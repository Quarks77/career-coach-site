import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { Loader2 } from "lucide-react";

// Extend schema for frontend specific validation if needed (e.g. required message)
const formSchema = insertContactMessageSchema;
type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-xl mx-auto px-6">
          
          <FadeIn className="text-center mb-12">
            <h1 className="font-serif text-3xl mb-4">お問い合わせ</h1>
            <p className="text-muted-foreground text-sm leading-relaxed">
              セッションに関するご質問や、体験セッションのお申し込みは<br />
              以下のフォームよりお気軽にご連絡ください。
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-border/50">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-serif">お名前</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="山田 太郎" 
                            {...field} 
                            className="bg-background border-border focus:border-primary focus:ring-primary/20 transition-all h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-destructive/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-serif">メールアドレス</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="mail@example.com" 
                            {...field} 
                            className="bg-background border-border focus:border-primary focus:ring-primary/20 transition-all h-12"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-destructive/80" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-serif">お問い合わせ内容</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="ご相談内容や、ご希望の日時などをご記入ください。" 
                            {...field} 
                            className="min-h-[160px] bg-background border-border focus:border-primary focus:ring-primary/20 transition-all resize-none p-4 leading-relaxed"
                          />
                        </FormControl>
                        <FormMessage className="text-xs text-destructive/80" />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-serif"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 送信中...
                        </>
                      ) : (
                        "送信する"
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-center text-muted-foreground mt-4">
                    ※原則24時間以内にご返信いたします。<br />
                    ※迷惑メール設定のご確認をお願いいたします。
                  </p>

                </form>
              </Form>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
