'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState } from 'react';

const workDetails = {
  'chaiyaphum-hospital': {
    title: 'Chaiyaphum Hospital',
    role: 'Full-Stack Developer',
    period: 'Feb 2025 - Present',
    description: 'Design and Development of MySQL Database and Web Application for Health Insurance Department',
    technologies: {
      'Programming Languages': ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      'Software': ['Visual Studio', 'Navicat']
    },
    responsibilities: [
      'Designed and implemented a system to manage the registration of foreign nationals for health insurance, including functionalities for adding, deleting, and editing records.',
      'Designed and implemented a real-time dashboard to visualize and track data updates in real-time.',
      'Developed a feature to allow data export to Excel format for improved data management and accessibility.',
      'Developed a document registration system for patient records in the Health Insurance Department, with functionality to upload and manage documents'
    ],
    images: ['/images/work/hospital-1.png', '/images/work/hospital-2.png', '/images/work/hospital-3.png']
  },
  'dkcode': {
    title: 'DKcode Co., Ltd',
    role: 'Programmer',
    period: 'Nov 2024 - Feb 2025',
    description: 'Designing Systems and Troubleshooting Issues Identified by Testers',
    technologies: {
      'Programming Languages': ['MySQL', 'JavaScript'],
      'Platforms': ['Low-code']
    },
    responsibilities: [
      'Designed and implemented a patient screening module for new visit appointments.',
      'Developed a blood allergy screening interface to capture and monitor patient blood type reactions.',
      'Created a form interface to record and track post-blood transfusion symptoms.',
      'Collaborated with senior developers to resolve issues identified by testers.'
    ],
    images: ['/images/work/dkcode-1.png', '/images/work/dkcode-2.png', '/images/work/dkcode-3.png']
  },
  'soft-kingdom': {
    title: 'Soft Kingdom Co., Ltd',
    role: 'Game Developer',
    period: 'May 2023 - Sep 2023',
    description: 'Design and Develop game for web application to project&apos;s requirement',
    technologies: {
      'Programming Languages': ['GDScript', 'Lua'],
      'Game Engines': ['Godot'],
      'Software': ['Visual Studio', 'Docker', 'Postman']
    },
    responsibilities: [
      'Assisted in the development of game prototypes and proof-of-concepts',
      'Participated in code reviews, identifying and resolving issues to improve code quality.',
      'Collaborated with senior developers in designing and implementing game mechanics.',
      'Conducted testing and debugging to identify and fix software defects.'
    ],
    images: ['/images/work/soft-kingdom1.jpg', '/images/work/soft-kingdom2.jpg']
  },
  'one-game': {
    title: 'ONE Game',
    role: 'Game Developer',
    period: 'Dec 2021 - Mar 2023',
    description: 'Design and Develop game for web application to project&apos;s requirement',
    technologies: {
      'Programming Languages': ['GDScript', 'C#'],
      'Game Engines': ['Godot', 'Unity'],
      'Software': ['Visual Studio', 'Github']
    },
    responsibilities: [
      'Assisted in the development of game prototypes and proof-of-concepts',
      'Participated in code reviews, identifying and resolving issues to improve code quality.',
      'Conducted testing and debugging to identify and fix software defects.'
    ],
    images: ['/images/work/one-game1.jpg', '/images/work/one-game2.jpg']
  }
};

export default function WorkDetail() {
  const { id } = useParams();
  const work = workDetails[id as keyof typeof workDetails];
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{work.title}</h1>
            <p className="text-xl font-semibold mb-2">{work.role}</p>
            <p className="text-lg opacity-90">{work.period}</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Description */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Overview</h2>
              <p className="text-gray-600 text-lg">{work.description}</p>
            </section>

            {/* Technologies */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Technologies Used</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(work.technologies).map(([category, items]) => (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-700 mb-2">{category}</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {items.map((item, index) => (
                        <li key={index} className="text-gray-600">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Key Responsibilities</h2>
              <ul className="space-y-3">
                {work.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Project Images */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Images</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {work.images.map((image, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsLightboxOpen(true);
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${work.title} image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to view
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Lightbox for full-size image viewing */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={work.images.map(src => ({ src }))}
        index={photoIndex}
      />
    </div>
  );
} 