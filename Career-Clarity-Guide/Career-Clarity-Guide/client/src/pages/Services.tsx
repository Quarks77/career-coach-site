import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <FadeIn className="text-center mb-16">
            <h1 className="font-serif text-3xl md:text-4xl mb-6">サービス内容</h1>
            <p className="text-muted-foreground">
              対話を通じて、あなたの中にある答えを見つけるお手伝いをします。
            </p>
          </FadeIn>

          {/* Service 1 */}
          <section className="mb-24">
            <FadeIn>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <div className="grid md:grid-cols-2 h-full">
                  {/* peaceful forest path nature */}
                  <div className="h-64 md:h-auto relative">
                     <img 
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071&auto=format&fit=crop" 
                      alt="自然の中の小道" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-primary text-sm font-medium tracking-wider mb-2 block">BASIC</span>
                    <h2 className="font-serif text-2xl mb-4">単発コーチングセッション</h2>
                    <p className="text-muted-foreground leading-loose mb-6 text-sm">
                      現在の悩みや迷いを整理し、次の一歩を明確にするためのセッションです。
                      誰かに話すことで思考を整理したい、第三者の視点が欲しいという方におすすめです。
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ServicePoint text="モヤモヤの言語化・整理" />
                      <ServicePoint text="強みや価値観の再発見" />
                      <ServicePoint text="具体的なアクションプラン作成" />
                    </ul>
                    <div className="mt-auto">
                      <p className="text-xl font-serif mb-4">¥12,000 <span className="text-sm text-muted-foreground">/ 60分</span></p>
                      <Link href="/contact">
                        <Button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border-none shadow-none">
                          申し込む
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Service 2 */}
          <section className="mb-24">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                    <span className="text-primary text-sm font-medium tracking-wider mb-2 block">STANDARD</span>
                    <h2 className="font-serif text-2xl mb-4">継続キャリア・ライフサポート</h2>
                    <p className="text-muted-foreground leading-loose mb-6 text-sm">
                      3ヶ月〜6ヶ月かけて、じっくりと自分自身と向き合います。
                      転職活動の伴走から、働き方・生き方の見直しまで、長期的な視点でサポートします。
                    </p>
                    <ul className="space-y-3 mb-8">
                      <ServicePoint text="月2回の定期セッション" />
                      <ServicePoint text="チャットでの相談・壁打ち（無制限）" />
                      <ServicePoint text="自己分析ワークシート提供" />
                    </ul>
                    <div className="mt-auto">
                      <p className="text-xl font-serif mb-4">¥33,000 <span className="text-sm text-muted-foreground">/ 月</span></p>
                      <Link href="/contact">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          申し込む
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {/* calm morning coffee */}
                  <div className="order-1 md:order-2 h-64 md:h-auto relative">
                     <img 
                      src="https://images.unsplash.com/photo-1517856497829-3047e3fffae1?q=80&w=2069&auto=format&fit=crop" 
                      alt="落ち着いた時間" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* Flow */}
          <section>
            <FadeIn>
              <h2 className="font-serif text-2xl mb-10 text-center">ご利用の流れ</h2>
              <div className="space-y-8 relative before:absolute before:left-[19px] md:before:left-1/2 before:top-0 before:h-full before:w-[1px] before:bg-border/60">
                <FlowStep number={1} title="お問い合わせ" text="フォームよりご希望の日時をお知らせください。" />
                <FlowStep number={2} title="日程調整" text="メールにて日程を調整し、ZoomのURLをお送りします。" />
                <FlowStep number={3} title="セッション当日" text="リラックスできる環境で、お話を伺います。" />
                <FlowStep number={4} title="アフターフォロー" text="セッションのまとめや気づきをフィードバックします。" />
              </div>
            </FadeIn>
          </section>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function ServicePoint({ text }: { text: string }) {
  return (
    <li className="flex items-center text-sm text-muted-foreground">
      <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
      {text}
    </li>
  );
}

function FlowStep({ number, title, text }: { number: number, title: string, text: string }) {
  return (
    <div className="relative flex items-center md:justify-center">
      <div className="absolute left-0 md:left-1/2 md:-ml-10 w-10 h-10 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-serif font-bold z-10">
        {number}
      </div>
      <div className="ml-16 md:ml-0 md:w-1/2 md:pr-20 md:text-right md:group-odd:pl-20 md:group-odd:text-left md:group-even:ml-auto">
        <div className={`bg-white p-6 rounded-lg shadow-sm border border-border/40 ${number % 2 === 0 ? "md:ml-20 md:text-left" : "md:mr-20 md:text-right"}`}>
          <h3 className="font-serif text-lg mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}
