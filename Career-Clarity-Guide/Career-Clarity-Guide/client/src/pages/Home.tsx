import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/FadeIn";
import { Link } from "wouter";
import { ArrowRight, MessageCircle, Heart, Feather } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract organic shapes background */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-secondary rounded-full blur-3xl" />
           <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeIn delay={0.1}>
            <p className="text-primary font-medium tracking-widest text-sm md:text-base mb-6 uppercase">
              Freelance Career Coach
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-tight mb-8 text-balance-jp">
              言葉にならない想いに、<br className="hidden md:block" />
              静かに耳を傾ける。
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed text-balance-jp">
              「自分は何がしたいのか分からない」<br />
              そんなモヤモヤした気持ちも、大切なあなたの声です。<br />
              キャリアだけでなく、生き方そのものを一緒に考えます。
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Link href="/services">
              <Button size="lg" className="rounded-full px-8 py-6 text-base font-serif bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
                サービスを見る
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            {/* calming minimalistic desk setup */}
            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl shadow-xl">
              {/* Using Unsplash with descriptive comment */}
              {/* minimal clean desk with notebook and plant */}
              <img 
                src="https://pixabay.com/get/gbc53f902bcd542d53a015e97c73fc1adc203405f2a66bc03a9f6b75868462f4b81271beda07733895f7badd5d98aa394718e7c389d6c6f0fdb17949aff3ba5f7_1280.jpg" 
                alt="静かな空間とノート" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </FadeIn>
          
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <h2 className="font-serif text-3xl text-foreground">
                無理に言葉にしなくても大丈夫。
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-muted-foreground leading-loose">
                情報が溢れる現代社会で、「正解」を探して疲れていませんか？
                キラキラした成功法則や、アグレッシブな目標設定に違和感を覚える方へ。
              </p>
              <p className="text-muted-foreground leading-loose mt-4">
                私のコーチングは、無理にポジティブになることを求めません。
                あなたのペースで、あなたの中にある本当の願いが見つかるまで、
                じっくりと対話を重ねていきます。
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <Link href="/message">
                <a className="inline-flex items-center text-primary font-medium hover:underline underline-offset-4 group">
                  想いをもっと読む <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl mb-4">大切にしていること</h2>
              <p className="text-muted-foreground">安心してお話しいただける環境づくりを心がけています</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageCircle className="w-6 h-6" />}
              title="深く聴く"
              description="表面的な悩みだけでなく、その奥にある価値観や感情まで、丁寧に耳を傾けます。"
              delay={0.1}
            />
            <FeatureCard 
              icon={<Heart className="w-6 h-6" />}
              title="安心の場"
              description="否定や評価は一切しません。どんな感情も受け止める、心理的に安全な場を提供します。"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Feather className="w-6 h-6" />}
              title="自然体で"
              description="無理な勧誘や、価値観の押し付けはしません。あなたのペースを何よりも尊重します。"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl">まずは一度、お話しませんか？</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground leading-relaxed">
              初めての方は、相性を確認するための<br className="md:hidden" />体験セッションをご用意しています。<br />
              まとまっていなくても大丈夫です。そのままのあなたでお越しください。
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact">
              <Button size="lg" className="rounded-full px-10 py-6 text-lg font-serif bg-primary hover:bg-primary/90">
                お問い合わせはこちら
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: ReactNode, title: string, description: string, delay: number }) {
  return (
    <FadeIn delay={delay} className="bg-background p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </FadeIn>
  );
}

import { ReactNode } from "react";
