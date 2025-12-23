const skillsData = {
  "Backend & Core": [
    "Java", 
    "Spring Boot", 
    "Spring Data JPA", 
    "MySQL", 
    "C", 
    "Microservices",
    "API Design"
  ],
  "Frontend & UI": [
    "Next.js", 
    "React", 
    "TypeScript", 
    "Tailwind CSS", 
    "JavaScript (ES6+)",
    "HTML5/CSS3"
  ],
  "Cloud & DevOps": [
    "AWS EC2", 
    "AWS S3", 
    "AWS Lambda", 
    "Docker", 
    "Git/GitHub",
    "CI/CD" 
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-sky-800 after:rounded">
          Technical Skills
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-4 text-sky-900 border-b border-slate-100 pb-2">
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-md font-medium border border-slate-200">
                    {skill}
                  </span>
                ))}
              </div>

              {category === "Cloud & DevOps" && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-md border border-amber-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span className="font-semibold">Pursuing AWS Certified Solutions Architect - Associate Certification</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}