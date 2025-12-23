import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-sky-800 after:rounded">Featured Project</h2>
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
          <div className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
              <h3 className="text-2xl font-bold text-sky-900">MaintXperts - Maintenance Management System</h3>
              <div className="flex gap-3">
                <Link href="https://github.com/sowrish1004/MaintXperts" target="_blank" className="text-sm border border-slate-300 px-3 py-1 rounded hover:bg-slate-50 hover:text-sky-800 transition">
                  GitHub
                </Link>
                <Link href="https://maintxperts.vercel.app/" target="_blank" className="text-sm bg-sky-800 text-white px-3 py-1 rounded hover:bg-sky-900 transition">
                  Live Demo
                </Link>
              </div>
            </div>
            
            <p className="text-slate-600 italic mb-6">Sep 2025 – Dec 2025</p>

            <div className="mb-6 space-y-2">
              <h4 className="font-semibold text-slate-900">Role: Full Stack Developer</h4>
              <p className="text-slate-700">Architected and deployed a scalable Maintenance Management System replacing manual paper-based campus facility inspections.</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
               {['Next.js 14', 'TypeScript', 'React', 'PostgreSQL', 'Prisma ORM', 'Clerk Auth', 'Recharts', 'Docker'].map(tech => (
                 <span key={tech} className="text-xs font-medium bg-sky-100 text-sky-800 px-2.5 py-0.5 rounded">{tech}</span>
               ))}
            </div>

            <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600">
              <li>Designed relational database schema with Prisma ORM managing complex relationships between Technicians, Buildings, and Data Categories.</li>
              <li>Implemented secure Role-Based Access Control using Clerk Authentication with custom middleware protecting API routes and UI components.</li>
              <li>Engineered dynamic form system automatically adapting input fields based on building configurations, reducing data entry errors.</li>
              <li>Developed interactive dashboard using Recharts for inspection trend visualization and integrated ExcelJS for downloadable audit reports.</li>
              <li>Optimized performance with parallel data fetching and Server Components, deployed via Dockerized PostgreSQL and Vercel with CI/CD.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}