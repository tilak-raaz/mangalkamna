import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ArticleTemplate({
  articleTitle = "Default Title",
}: {
  articleTitle?: string;
}) {
  // In a real app, data would come from CMS based on slug

  return (
    <main className="min-h-screen bg-slate-50 relative pt-20 overflow-hidden pb-20">
      {/* Featured Header Area */}
      <section className="relative pt-16 pb-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#cb1b1a] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-red-50 text-[#cb1b1a] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Heart Health
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Clock className="w-4 h-4" />5 min read
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Calendar className="w-4 h-4" />
              August 15, 2024
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
            {articleTitle === "Default Title"
              ? "10 Warning Signs of Heart Disease You Should Never Ignore"
              : articleTitle}
          </h1>

          <div className="flex items-center justify-between border-t border-slate-100 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 relative">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80"
                  alt="Dr. Sarah Johnson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900">Dr. Sarah Johnson</p>
                <p className="text-sm font-medium text-slate-500">
                  Senior Cardiologist
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-slate-400 hidden sm:inline mr-2">
                Share:
              </span>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-900 border-4 border-white">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80"
            alt="Heart checkup visual"
            fill
            className="object-cover opacity-90"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#cb1b1a] prose-img:rounded-3xl max-w-none">
            <p className="lead text-xl text-slate-600 mb-8">
              Heart disease remains one of the leading causes of mortality
              globally, but many heart conditions are highly treatable if
              detected early. The key to prevention and successful treatment
              lies in recognizing the warning signs your body gives you.
            </p>

            <h2 className="text-2xl mt-12 mb-6">
              1. Chest Discomfort or Angina
            </h2>
            <p>
              It's the most common sign of heart danger. If you have a blocked
              artery or are having a heart attack, you may feel pain, tightness,
              or pressure in your chest. The feeling can last for more than a
              few minutes. It may happen when you're resting or when you're
              doing physical activity.
            </p>

            <h2 className="text-2xl mt-10 mb-6">
              2. Nausea, Indigestion, or Stomach Pain
            </h2>
            <p>
              Some people have these symptoms during a heart attack. They may
              even vomit. Women are more likely to report this type of symptom
              than men. Of course, you can have a stomachache for many reasons
              that have nothing to do with your heart, but you need to be aware
              of the connection.
            </p>

            <h3 className="text-xl mt-8 mb-4">When to seek emergency help</h3>
            <p>
              If you experience sudden, severe chest pain that spreads to your
              arm, back, or jaw, along with shortness of breath, call emergency
              services immediately. Time is muscle when it comes to cardiac
              events.
            </p>

            {/* Key Takeaways Box */}
            <div className="my-12 bg-red-50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-xl font-extrabold text-[#cb1b1a] mb-5 flex items-center gap-2 mt-0">
                <CheckCircle className="w-6 h-6" />
                Key Takeaways
              </h3>
              <ul className="space-y-3 m-0 pl-0 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cb1b1a] mt-2.5 flex-shrink-0"></span>
                  <span className="text-slate-800 font-medium">
                    Never ignore persistent chest pain or pressure.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cb1b1a] mt-2.5 flex-shrink-0"></span>
                  <span className="text-slate-800 font-medium">
                    Symptoms can be subtle, especially in women, presenting as
                    extreme fatigue or indigestion.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cb1b1a] mt-2.5 flex-shrink-0"></span>
                  <span className="text-slate-800 font-medium">
                    Regular screenings and EKGs after age 40 are crucial for
                    early detection.
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Maintaining a healthy lifestyle through diet, regular exercise,
              and stress management significantly reduces your risk. However,
              knowing your family history and paying attention to these warning
              signs is equally important.
            </p>
          </div>

          {/* Social Share Footer */}
          <div className="flex items-center justify-between border-y border-slate-200 py-6 mt-16 mb-16">
            <span className="font-bold text-slate-800">
              Share this article:
            </span>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4" /> Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-xl font-semibold text-sm hover:bg-sky-600 transition-colors">
                <Twitter className="w-4 h-4" /> Tweet
              </button>
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="bg-slate-900 rounded-[2rem] p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Concerned about your heart health?
              </h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                Don't wait for symptoms to worsen. Book a preventive cardiac
                screening or consult with our top cardiologists today.
              </p>
              <Link
                href="/appointments"
                className="inline-flex items-center gap-2 bg-[#cb1b1a] text-white px-8 py-4 rounded-xl font-bold hover:bg-rose-700 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 group"
              >
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Related Articles
            </h2>
            <Link
              href="/news"
              className="text-sm font-bold text-[#cb1b1a] hover:text-rose-600 flex items-center gap-1 group"
            >
              View All News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hardcoded related sample */}
            <Link
              href="/news"
              className="group bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1628595351029-c29e9620e401?auto=format&fit=crop&q=80"
                  alt="Diabetes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#cb1b1a] line-clamp-2">
                  Diabetes & Foot Care: What Every Patient Needs to Know
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  Proper foot care is essential for diabetic patients. Here are
                  the daily routines you need to follow.
                </p>
                <span className="text-sm font-bold text-[#cb1b1a]">
                  Read Article
                </span>
              </div>
            </Link>

            <Link
              href="/news"
              className="group bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col hidden md:flex"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
                  alt="Joints"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#cb1b1a] line-clamp-2">
                  How to Protect Your Joints as You Age
                </h3>
                <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                  Simple lifestyle changes and exercises that can help maintain
                  joint mobility and prevent osteoarthritis.
                </p>
                <span className="text-sm font-bold text-[#cb1b1a]">
                  Read Article
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
