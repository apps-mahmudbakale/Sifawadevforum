import { BookOpen, Coins, Heart, Wrench, Shield, School } from 'lucide-react';
import Career from '../projects/Career.png';
import Jamb from '../projects/Jamb.png';
import Workshop from '../projects/workshop.png';
import Skills from '../projects/skills.png';
import Makabarta from '../projects/Makabarta.png';
import Wells from '../projects/wells.png';

export default function Activities() {
  const activities = [
    {
      icon: Coins,
      title: 'CAREER GUIDANCE FOR STUDENTS FEB, 2024',
      description: 'A comprehensive session providing students with professional insights into career paths, academic choices, and future opportunities to help them build a successful future.',
      image: Career,
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'SSCE/JAMB/CBT SUCCESS TIPS WORKSHOP FOR SS III STUDENTS, FEB 2024',
      description: 'An intensive workshop equipping SS III students with essential study strategies, exam techniques, and CBT navigation skills to maximize their success in national examinations.',
      image: Workshop,
      color: 'yellow'
    },
    {
      icon: Wrench,
      title: 'DISTRIBUTION OF 95 JAMB FORMS FEB, 2024',
      description: 'Supporting educational advancement by purchasing and distributing 95 JAMB registration forms to deserving students, removing financial barriers to higher education.',
      image: Jamb,
      color: 'blue'
    },
    {
      icon: School,
      title: 'PROCUREMENT OF MACHINE AND TOOLS; EMPOWERMENT OF 2 YOUTHS: 6 MONTHS SKILLS ACQUISITION TRAINING, FEB - JULY, 2024',
      description: 'A dedicated 6-month skills acquisition program coupled with the provision of machines and tools to empower youths with practical vocational skills for self-reliance.',
      image: Skills,
      color: 'yellow'
    },
    {
      icon: Shield,
      title: 'FIXING OF MAKABARTA  GATE AND DU’A BOARD, JAN, 2024',
      description: 'Community service project focused on the repair and installation of the cemetery (Makabarta) gate and Du’a board, ensuring dignity and reverence for the resting place.',
      image: Makabarta,
      color: 'blue'
    },
    {
      icon: BookOpen,
      title: 'RE-EXCAVATION OF 15 WELLS IN SIFAWA, MARCH, 2024 ',
      description: 'Addressing community water needs by rehabilitating and re-excavating 15 wells across Sifawa, improving access to clean and reliable water sources.',
      image: Wells,
      color: 'yellow'
    }
  ];

  return (
    <section id="activities" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Activities & Programs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of programs designed to empower youth, build skills, and create lasting impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            const gradientColor = activity.color === 'blue'
              ? 'from-blue-600 to-blue-700'
              : 'from-yellow-400 to-yellow-500';

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className={`absolute top-4 right-4 w-14 h-14 bg-gradient-to-br ${gradientColor} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our History</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">Journey & Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A timeline of our dedicated service and developmental milestones in the Sifawa community.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-100">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider border-b border-blue-800 w-1/6">Year</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider border-b border-blue-800 w-1/3">Activity / Project</th>
                  <th className="p-4 md:p-6 text-sm font-bold uppercase tracking-wider border-b border-blue-800">Description / Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { year: '2015', title: 'Establishment of Adult Islamic Class', desc: 'Initiated at the residence of Wakilin Sifawa, providing basic Islamic education on purification, ablution, prayer, and hygiene for adults.' },
                  { year: '2016', title: "Women's Hygiene and Sanitation Programme", desc: 'Empowered women with knowledge of personal hygiene and environmental cleanliness, improving community health and sanitation.' },
                  { year: '2017', title: 'Support to Makabarta and Local Primary Schools', desc: 'Clear weeds and sanitized Makabarta; provided learning materials and infrastructural assistance to enhance Islamic and formal education.' },
                  { year: '2018', title: 'Ramadan Feeding and Scholarship Support', desc: 'Supported fasting families and provided scholarships to needy students to promote education and social welfare.' },
                  { year: '2019', title: 'Tree Planting and Environmental Clean-up', desc: 'Promoted environmental sustainability and beautification through afforestation and community sanitation drives.' },
                  { year: '2020', title: 'Community Health and Awareness Outreach', desc: 'Conducted medical awareness and health screening campaigns addressing public health issues and preventive care.' },
                  { year: '2021', title: 'Support for Orphans in primary schools', desc: 'Provided clothing to orphans and strengthening social support systems.' },
                  { year: '2022', title: 'Support for Ali Tambari Primary School, Sifawa', desc: 'Assisted in infrastructural renovation, provision of teaching materials, and teacher motivation to enhance learning quality.' },
                  { year: '2023 (a)', title: 'Support of Mudalia and Musabaka Competitions', desc: "Supported Qur'anic recitation and Islamic knowledge competitions to promote moral and spiritual development." },
                  { year: '2023 (b)', title: 'Community Security Sensitization Programme', desc: 'Collaborated with local security operatives and stakeholders to raise awareness on community vigilance and peacebuilding.' },
                  { year: '2023 (c)', title: 'Expansion of Educational Support and Scholarships', desc: 'Broadened scholarship schemes and provided capacity-building opportunities for students and teachers across Sifawa.' },
                  { year: '2023 (d)', title: 'Well Drilling, Borehole Repairs and Maintenance', desc: 'Improved access to clean and safe water for households and institutions within the community.' },
                  { year: '2023 (e)', title: 'Town Electricity Maintenance and Support', desc: 'Assisted in repair and stabilization of power supply systems, enhancing living standards and productivity.' },
                  { year: '2024 (a)', title: 'Youth Empowerment and Loan Schemes', desc: 'Introduced small business grants and loans for young entrepreneurs to promote economic self-reliance.' },
                  { year: '2024 (b)', title: 'Support to the Elderly and Sick Persons', desc: 'Offered welfare, medical, and emotional support to vulnerable elders and ill persons in the town.' },
                  { year: '2025 (a)', title: 'Supervision and Maintenance of Community Projects', desc: 'Ensured sustainability and proper functionality of past and ongoing SDF developmental projects.' },
                  { year: '2025 (b)', title: "Students' Support, Training, and Counselling", desc: 'Organized mentoring, training, and counselling programmes to improve academic performance and emotional wellbeing.' },
                  { year: '2025 (c)', title: 'Support to Security Operatives (Vigilante Group)', desc: 'Strengthened local security systems through logistics and moral support to ensure safety of lives and property.' },
                  { year: '2025 (d)', title: 'Support to Islamiyya Schools', desc: 'Paid monthly allowances to 10 Islamiyya teachers to enhance Islamic education and uphold community values.' },
                  { year: '2018 - 2024', title: 'Annual General Meetings of SDF', desc: 'Sustained unity and cooperation among members through annual interactive and developmental meetings.' },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors duration-150">
                    <td className="p-4 md:p-6 text-sm font-semibold text-blue-900 align-top whitespace-nowrap">{item.year}</td>
                    <td className="p-4 md:p-6 text-sm font-bold text-gray-900 align-top">{item.title}</td>
                    <td className="p-4 md:p-6 text-sm text-gray-700 align-top leading-relaxed">{item.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
}
