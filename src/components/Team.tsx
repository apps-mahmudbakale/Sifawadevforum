import { useState } from 'react';
import { Linkedin, X } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'President & Founder',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Sarah is a passionate advocate for youth empowerment with over 5 years of experience in community development. She founded the Youth Development Forum to create opportunities for young leaders to thrive and make meaningful impact.',
      linkedin: '#'
    },
    {
      name: 'Marcus Chen',
      role: 'Programs Director',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Marcus oversees all our youth development programs and workshops. With a background in education and psychology, he designs transformative experiences that help young people discover their potential.',
      linkedin: '#'
    },
    {
      name: 'Aisha Patel',
      role: 'Community Outreach Lead',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Aisha connects our forum with communities across the region. Her expertise in social work and grassroots organizing ensures our initiatives reach those who need them most.',
      linkedin: '#'
    },
    {
      name: 'David Martinez',
      role: 'Mentorship Coordinator',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'David manages our mentorship programs, matching young people with experienced professionals. His dedication to nurturing talent has helped hundreds of youth achieve their goals.',
      linkedin: '#'
    },
    {
      name: 'Emily Okonkwo',
      role: 'Events & Activities Manager',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Emily brings our vision to life through engaging events and activities. Her creative approach and organizational skills make every forum event memorable and impactful.',
      linkedin: '#'
    },
    {
      name: 'James Wilson',
      role: 'Communications Director',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'James amplifies our message and shares success stories from our community. His background in digital media helps us inspire and engage youth across multiple platforms.',
      linkedin: '#'
    }
  ];

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
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{member.bio}</p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              <p className="text-blue-600 font-semibold text-lg mb-6">{selectedMember.role}</p>
              <p className="text-gray-700 leading-relaxed mb-6">{selectedMember.bio}</p>

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
    </section>
  );
}
