
import { CalendarDays, GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Agriculture",
      institution: "Daffodil International University",
      year: "2023-2027",
      description: "Participated in field-based learning programs and workshops to bridge theoretical knowledge with practical applications.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Patuakhali Govt. College",
      year: "2019-2021",
      description: "Participated in extracurricular activities such as science fairs, debates, and volunteer programs, enhancing teamwork and leadership skills. ",
    },
  ];

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Education</h1>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0">
              <div className="absolute -left-3 top-0">
                <div className="bg-accent p-2 rounded-full">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="glass p-6 rounded-xl">
                <div className="flex items-center gap-2 text-accent mb-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>{edu.year}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <h4 className="text-gray-600 mb-2">{edu.institution}</h4>
                <p className="text-gray-500">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
