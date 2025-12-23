import Navbar from './components/Navbar';
import Picture from './components/Picture';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Picture />
      <section id="about" className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center leading-relaxed text-lg text-slate-700">
        Proven ability to deliver responsive, user-centric web solutions by collaborating with UX/UI teams and optimizing application performance. Proficient in building scalable full-stack architectures using <span className="font-semibold text-slate-900">Java Spring Boot</span>, <span className="font-semibold text-slate-900">Next.js</span>, and <span className="font-semibold text-slate-900">MySQL</span>, with a growing focus on cloud-native deployment via <span className="font-semibold text-slate-900">AWS (EC2, S3, Lambda)</span>.
        </div>
      </section>
      
      <Skills />
      <Projects />
      <Experience />
      
      <Contact />
      <Footer />
    </main>
  );
}