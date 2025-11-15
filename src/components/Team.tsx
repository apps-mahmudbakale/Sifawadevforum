import { useState } from 'react';
import { Linkedin, X, Phone } from 'lucide-react';
import President from '../President.jpeg';
import Vice from '../Vice.jpeg';
import Financial from '../Financial.jpeg';
import AsstSecretary from '../Asst.jpeg';
import PublicSecretary from '../PublicSectary1.jpeg';
import Security from '../MSecurity.jpeg';
import Education from '../memberEdu.jpeg';
import Education1  from '../Education1.jpeg';
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  shortBio?: string;
  linkedin?: string;
  phone?: string;
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const president: TeamMember = {
    name: 'Dr. Abubakar Boyi Sifawa',
    role: 'President',
    image: President,
    shortBio: 'Dr. Abubakar Boyi Sifawa is a seasoned educator and community leader with over 25 years of experience in public service, education policy, and rural development.',
    bio: `Dr. Abubakar Boyi Sifawa was born on February 18, 1977, in Sifawa, Sokoto State, Nigeria. He began his education in the traditional way by attending a local Qur'anic school (known as Karatun Allo) under the tutelage of Malam Garba Dariya, where he memorized and learned the foundations of Islamic education at a young age. For his formal schooling, he enrolled at Sifawa Model Primary School from 1983 to 1989, laying a strong academic foundation early on.

    After primary school, young Abubakar pursued teacher training in secondary education. He attended the College of Arts and Arabic Studies in Sokoto (1989–1994), where he obtained the Grade II Teachers' Certificate in 1994. Not one to rest on his laurels, he proceeded to earn a Nigerian Certificate in Education (NCE) at Shehu Shagari College of Education, Sokoto between 1995 and 1998, graduating with an impressive Upper Credit. This credential qualified him as a trained teacher and set the stage for his career in education.
    
    Driven by a passion for higher learning, Dr. Sifawa furthered his studies at Usmanu Danfodiyo University, Sokoto (UDUS). There, he obtained a Bachelor of Arts in Education (B.A.Ed.) in Islamic Studies in 2003, finishing with a strong academic record (Second Class Lower Division). Not stopping at the bachelor's level, he continued at UDUS for postgraduate studies. He earned a Master of Education (M.Ed.) in Guidance and Counselling in 2011, and subsequently achieved the pinnacle of academic qualifications with a Doctor of Philosophy (Ph.D.) in Education (Guidance and Counselling) in 2015. This remarkable educational journey – from Qur'anic school through to a doctoral degree – highlights Dr. Sifawa's lifelong commitment to learning and personal growth.`,
    linkedin: '#',
    phone: '+234 703 136 9585'
  };

  const teamMembers: TeamMember[] = [
    {
      name: 'Bashar Umar Sifawa (Durunbun Sifawa)',
      role: 'Vice President',
      image: Vice,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: 'Zayyanu Bello sifawa (Tafarkin Sifawa)',
      role: 'Asst. Secretary',
      image: AsstSecretary,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: "Nasiru Alkali Shehu (Dan'iyan Sifawa)",
      role: 'Financial Secretary',
      image: Financial,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: 'Nura Bello Sifawa',
      role: 'Publicly Secretary I Ag. Chairman Education Committee',
      image: PublicSecretary,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: 'Muntaka Muhammad',
      role: 'Member,Security Committee',
      image: Security,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: 'Mukhtar Salihu',
      role: 'Member Education committee',
      image: Education,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    },
    {
      name: 'Zubairu Adamu',
      role: 'Education committee',
      image: Education1,
      bio: '',
      phone: '+234 XXX XXX XXXX',
      linkedin: '#'
    }
  ];

  // use the dedicated `president` object (do not search teamMembers)
  const presidentMember = president;

  return (
    <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Meet the Team</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">Our Team</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate individuals dedicated to empowering youth and creating positive change
          </p>
        </div>

        {/* President section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden md:flex">
            <div className="md:w-1/2 h-80 relative">
              <img
                src={president.image}
                alt={president.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{president.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{president.role}</p>
                {president.phone && (
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <Phone size={18} />
                    <span>{president.phone}</span>
                  </p>
                )}
                <p className="text-gray-700 leading-relaxed mb-6 text-justify line-clamp-4">
                  {president.shortBio || president.bio}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                {president.linkedin && (
                  <a
                    href={president.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
                  >
                    View LinkedIn
                  </a>
                )}
                <button
                  onClick={() => setSelectedMember(president)}
                  className="inline-flex items-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transition"
                >
                  View Full Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                {member.phone && (
                  <p className="text-gray-600 mb-4 flex items-center gap-2 text-sm">
                    <Phone size={16} />
                    <span>{member.phone}</span>
                  </p>
                )}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 text-justify">{member.bio}</p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-72">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X size={24} className="text-gray-800" />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">{selectedMember.role}</p>
                
                {selectedMember.phone && (
                  <p className="text-gray-600 mb-6 flex items-center gap-2">
                    <Phone size={18} />
                    <span>{selectedMember.phone}</span>
                  </p>
                )}

                <p className="text-gray-700 leading-relaxed mb-6 text-justify">{selectedMember.bio}</p>

                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    <Linkedin size={20} />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
