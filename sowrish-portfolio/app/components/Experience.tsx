const experiences = [
  {
    title: "Technology Support Assistant",
    company: "Northwest Missouri State University",
    location: "Maryville, MO",
    date: "Aug 2024 – Dec 2025",
    points: [
      "Collaborated with the Campus Software Team to troubleshoot and debug internal university web applications, reducing downtime for student portals.",
      "Assisted in the maintenance of campus-wide software infrastructure, ensuring compatibility across 3000+ devices.",
      "Provided technical documentation and feedback on UI/UX issues to the development team, helping streamline the software deployment lifecycle."
    ]
  },
  {
    title: "Co-Op Intern",
    company: "InMobi Technology Services",
    location: "Bangalore, India",
    date: "Jan 2023 – Dec 2023",
    points: [
      "Developed high-performance internal dashboards using React.js and Next.js to visualize campaign KPIs, replacing legacy Excel-based reporting tools.",
      "Collaborated with the engineering team to optimize ad-serving workflows, ensuring seamless delivery of campaigns worth $2 million.",
      "Implemented responsive UI components for client-facing analytics platforms, utilizing segmentation tools (Adjust, Branch) to drive $1 million in generated orders."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-sky-800 after:rounded">Professional Experience</h2>
        
        
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`border-l-4 border-sky-800 pl-6 ml-2 relative ${
                index === experiences.length - 1 ? 'pb-0' : 'pb-12'
              }`}
            >
              
              <div className="absolute w-4 h-4 bg-sky-800 rounded-full -left-[10px] top-0 border-2 border-white ring-2 ring-sky-800/20"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                <span className="text-sm text-slate-500 font-medium">{exp.date}</span>
              </div>
              <div className="mb-4 text-sky-800 font-medium">
                {exp.company} {exp.location && `| ${exp.location}`}
              </div>
              <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}