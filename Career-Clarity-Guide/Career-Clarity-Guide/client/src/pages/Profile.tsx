import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navigation />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Image Column */}
            <div className="md:col-span-2">
              <FadeIn>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-3 translate-y-3"></div>
                  {/* Portrait Placeholder - calm professional gentle */}
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                    alt="Coach Profile" 
                    className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-md grayscale-[20%]"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Text Column */}
            <div className="md:col-span-3 space-y-8">
              <FadeIn delay={0.2}>
                <h1 className="font-serif text-3xl mb-2">佐藤 健太 (Sato Kenta)</h1>
                <p className="text-primary font-medium text-sm tracking-wide">Freelance Career Coach</p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="prose prose-slate prose-p:text-muted-foreground prose-headings:font-serif">
                  <p>
                    大学卒業後、人材系企業にてキャリアアドバイザーとして従事。
                    延べ2,000人以上のキャリア相談を受ける中で、
                    「条件の良い転職」だけでは埋まらない心の穴があることに気づく。
                  </p>
                  <p>
                    その後、コーチングと出会い、人の内面にある価値観や感情を扱うことの重要性を痛感。
                    2021年に独立し、フリーランスのキャリアコーチとして活動を開始。
                  </p>
                  <p>
                    現在は「静かな対話」をテーマに、内向的な方や、HSP気質の方、
                    自分の言葉を持つことに苦手意識がある方を中心にサポートを行っている。
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} className="pt-6">
                <h3 className="font-serif text-xl mb-4 border-b border-border pb-2">資格・経歴</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 国家資格キャリアコンサルタント</li>
                  <li>• GCS認定プロフェッショナルコーチ</li>
                  <li>• MBTI認定ユーザー</li>
                </ul>
              </FadeIn>
              
              <FadeIn delay={0.5} className="pt-6">
                <h3 className="font-serif text-xl mb-4 border-b border-border pb-2">趣味</h3>
                <p className="text-sm text-muted-foreground">
                  珈琲を淹れること、早朝の散歩、フィルムカメラ、読書（哲学・エッセイ）
                </p>
              </FadeIn>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
