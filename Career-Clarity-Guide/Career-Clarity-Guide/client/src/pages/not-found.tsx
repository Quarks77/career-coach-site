import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border border-border/50">
        <CardContent className="pt-6 pb-6 text-center">
          <div className="flex justify-center mb-6">
            <AlertCircle className="h-16 w-16 text-primary/40" />
          </div>
          <h1 className="text-2xl font-serif text-foreground mb-4">404 Page Not Found</h1>
          <p className="text-muted-foreground mb-8 text-sm">
            お探しのページは見つかりませんでした。<br />
            URLが間違っているか、ページが移動した可能性があります。
          </p>
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90 font-serif">
              ホームに戻る
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
