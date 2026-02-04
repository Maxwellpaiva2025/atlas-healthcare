import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const DR_PHOTO = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ffcb51eeb9e0ad79e826fd/730c2bd20_TIM.jpg";
const BETHANY_PHOTO = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68ffcb51eeb9e0ad79e826fd/67930c975_BETANY.jpg";

export default function TeamSection() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      photo: DR_PHOTO,
      name: t.team.tim.name,
      role: t.team.tim.role,
      descriptions: [t.team.tim.desc1, t.team.tim.desc2, t.team.tim.desc3]
    },
    {
      photo: BETHANY_PHOTO,
      name: t.team.bethany.name,
      role: t.team.bethany.role,
      descriptions: [t.team.bethany.desc1, t.team.bethany.desc2, t.team.bethany.desc3]
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t.team.title}
          </h2>
          <div className="w-20 h-1 bg-[#4ECCA3] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow"
            >
              {/* Photo */}
              <div className="relative h-72 sm:h-80">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-[#4ECCA3] font-medium mb-4">{member.role}</p>
                
                <ul className="space-y-2">
                  {member.descriptions.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-[#4ECCA3] rounded-full mt-1.5 flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}