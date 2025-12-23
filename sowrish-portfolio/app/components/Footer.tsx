import Link from 'next/link';

export default function Footer() {
  return (
    <section id="contact" className="py-16 bg-slate-900 text-slate-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        
        <div id="education">
          <h2 className="text-2xl font-bold text-white mb-8 text-left after:hidden">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Master of Science in Information Systems</h3>
              <p className="text-sky-400">Northwest Missouri State University, Maryville, MO</p>
              <p className="text-sm">Dec 2025 | GPA: 4.0/4.0</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Bachelor of Engineering in Mechanical Engineering</h3>
              <p className="text-sky-400">Birla Institute of Technology and Science, Pilani, India</p>
              <p className="text-sm mb-1">May 2024 | GPA: 3.4/4.0</p>
              <p className="text-sm italic">Minor: Computation and Intelligence</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-left after:hidden">Contact</h2>
          <p className="mb-6">Currently based in Baltimore, MD. Open to relocate. Feel free to reach out!</p>
          
          <div className="space-y-4">
            <p className="flex items-center">
              <span className="font-medium text-white w-20">Email:</span>
              <a href="mailto:reachsowrish@gmail.com" className="hover:text-sky-400 transition">reachsowrish@gmail.com</a>
            </p>
            <p className="flex items-center">
              <span className="font-medium text-white w-20">Phone:</span>
              <a href="tel:+16674716290" className="hover:text-sky-400 transition">+1 (667) 471 6290</a>
            </p>
            <div className="flex gap-6 mt-8">
              <Link href="https://www.linkedin.com/in/sowrish" target="_blank" className="text-white hover:text-sky-400 transition font-semibold">
                 LinkedIn
              </Link>
              <Link href="https://github.com/sowrish1004" target="_blank" className="text-white hover:text-sky-400 transition font-semibold">
                 GitHub
              </Link>
              <Link href="http://sowrish-portfolio.vercel.app" target="_blank" className="text-white hover:text-sky-400 transition font-semibold">
                 Portfolio URL
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm mt-16 pt-8 border-t border-slate-800">
        © {new Date().getFullYear()} Sowrish Sai Surapaneni. All rights reserved.
      </div>
    </section>
  );
}