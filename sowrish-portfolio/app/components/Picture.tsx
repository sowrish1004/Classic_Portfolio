import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold tracking-tight text-slate-900">
            Hi, I&apos;m <span className="text-sky-800">Sowrish Sai Surapaneni</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Full Stack Developer specializing in <span className="font-semibold text-slate-800">Java/Spring Boot</span> backends and modern <span className="font-semibold text-slate-800">Next.js</span> frontends. Passionate about building scalable, cloud-native applications on <span className="font-semibold text-slate-800">AWS</span>.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="#projects" className="bg-sky-800 text-white px-6 py-3 rounded-md font-medium hover:bg-sky-900 transition-colors shadow-md">
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              download="Surapaneni_Resume.pdf"
              className="flex items-center gap-2 bg-white text-sky-800 border-2 border-sky-800 px-6 py-3 rounded-md font-medium hover:bg-sky-50 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="relative flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-sky-800/20">
            <Image
              src="/Profile.jpg"
              alt="Sowrish Sai Surapaneni"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}