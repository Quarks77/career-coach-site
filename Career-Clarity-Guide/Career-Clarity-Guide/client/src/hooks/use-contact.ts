import { useMutation } from "@tanstack/react-query";
import { api, type InsertContactMessage } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      // Validate data against schema before sending
      const validated = api.contact.submit.input.parse(data);
      
      const res = await fetch(api.contact.submit.path, {
        method: api.contact.submit.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
           const errorData = await res.json();
           // Try to parse as validation error, fallback to generic
           try {
             const parsedError = api.contact.submit.responses[400].parse(errorData);
             throw new Error(parsedError.message);
           } catch {
             throw new Error("入力内容を確認してください。");
           }
        }
        throw new Error("送信に失敗しました。時間をおいて再度お試しください。");
      }

      return api.contact.submit.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "送信完了",
        description: "お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。",
        className: "bg-primary text-white border-none",
      });
    },
    onError: (error) => {
      toast({
        title: "エラーが発生しました",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
