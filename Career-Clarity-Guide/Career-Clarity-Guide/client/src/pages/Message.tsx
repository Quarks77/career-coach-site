import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function Message() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          
          <FadeIn className="text-center mb-20">
            <span className="text-primary text-sm font-medium tracking-widest uppercase block mb-4">Philosophy</span>
            <h1 className="font-serif text-3xl md:text-4xl leading-relaxed">
              「どう生きたいか」を、<br />
              置き去りにしないために。
            </h1>
          </FadeIn>

          <div className="space-y-12 text-muted-foreground leading-loose font-light text-justify md:text-left">
            <FadeIn delay={0.2}>
              <p>
                「もっと頑張らなきゃ」<br />
                「今のままじゃダメだ」<br />
                そんな焦燥感に駆られて、キャリアの選択をしていませんか？
              </p>
              <p className="mt-6">
                市場価値を上げることも、スキルを身につけることも、もちろん大切です。<br />
                でも、そのために「今のあなたの幸せ」が犠牲になっているとしたら、<br />
                それは本当に望んでいる生き方でしょうか。
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative my-16">
                 <div className="absolute -inset-4 bg-secondary/30 -z-10 rounded-2xl transform -rotate-1"></div>
                 {/* calm reading person */}
                 <img 
                   src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" 
                   alt="自分と向き合う時間" 
                   className="w-full h-64 md:h-80 object-cover rounded-xl shadow-sm"
                 />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <h2 className="font-serif text-2xl text-foreground mb-6">弱さも迷いも、大切なリソース</h2>
              <p>
                うまく言葉にできないモヤモヤや、人には言えない弱音の中にこそ、<br />
                あなただけの「真実」が隠されています。<br />
                きれいな言葉でまとめる必要はありません。<br />
                矛盾していても、整理されていなくても構いません。
              </p>
              <p className="mt-6">
                私が提供したいのは、正解を教えることではなく、<br />
                あなたがあなた自身の言葉を取り戻すための「対話の時間」です。
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 mt-12 text-center">
                <p className="font-serif text-lg text-primary-foreground text-foreground italic">
                  "Life is not a problem to be solved, but a reality to be experienced."
                </p>
                <p className="text-xs text-muted-foreground mt-2">Søren Kierkegaard</p>
              </div>
            </FadeIn>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
