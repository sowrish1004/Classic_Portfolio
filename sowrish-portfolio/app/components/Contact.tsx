"use client";
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    
    formData.append("access_key", "d46e1eaf-438d-44cc-a2ed-18461015c829"); 

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact-form" className="py-16 bg-slate-50">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-sky-900">Send Me a Message</h2>
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
          <form onSubmit={onSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input type="text" name="name" required placeholder="Recruiter Name" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-800 focus:border-transparent outline-none transition" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" name="email" required placeholder="email@company.com" className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-800 focus:border-transparent outline-none transition" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea name="message" required rows={4} placeholder="Hi Sowrish, I'd like to discuss a role..." className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-sky-800 focus:border-transparent outline-none transition"></textarea>
            </div>

            <button type="submit" className="w-full bg-sky-800 text-white font-bold py-3 rounded-md hover:bg-sky-900 transition-colors shadow-md">
              Send Message
            </button>

            <div className="text-center mt-4 text-sm font-medium text-sky-800">
              {result}
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}