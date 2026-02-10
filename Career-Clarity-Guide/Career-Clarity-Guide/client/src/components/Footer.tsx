import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8 border-t border-border/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl tracking-wider text-foreground">Career Dialogue</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              言葉にならない想いに寄り添い、<br />
              あなたらしい生き方を一緒に探します。
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3">
            <h4 className="font-serif text-base text-foreground mb-2">Menu</h4>
            <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">サービス</Link>
            <Link href="/message" className="text-muted-foreground hover:text-primary transition-colors text-sm">想い</Link>
            <Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">プロフィール</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">お問い合わせ</Link>
          </div>

          {/* Contact Info (Simulated) */}
          <div className="space-y-4">
            <h4 className="font-serif text-base text-foreground mb-2">Contact</h4>
            <p className="text-muted-foreground text-sm">
              オンライン（Zoom）を中心に活動中
            </p>
            <Link href="/contact">
              <span className="inline-block mt-2 text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-colors cursor-pointer text-sm">
                フォームから相談する &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-sans">
            &copy; {new Date().getFullYear()} Career Dialogue. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
