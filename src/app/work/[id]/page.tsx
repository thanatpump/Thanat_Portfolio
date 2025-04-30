'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useState, useEffect } from 'react';

interface WorkDetail {
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: Record<string, string[]>;
  responsibilities: string[];
  images?: string[];
  images2?: string[];
}

const workDetails: Record<string, WorkDetail> = {
  'chaiyaphum-hospital': {
    title: 'Chaiyaphum Hospital',
    role: 'Full-Stack Developer',
    period: 'Feb 2025 - Present',
    description: 'Design and Development of Marathon Registration System and Management Dashboard and Health Insurance Department',
    technologies: {
      'Programming Languages': ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'TypeScript/JavaScript', 'React/Next.js', 'Prisma (ORM)', 'HTML', 'CSS (Tailwind CSS)'],
      'Software': ['Visual Studio', 'Navicat','aaPanel']
    },
    responsibilities: [
      'Designed and implemented a system to manage the registration of foreign nationals for health insurance, including functionalities for adding, deleting, and editing records.',
      'Designed and implemented a real-time dashboard to visualize and track data updates in real-time.',
      'Developed a feature to allow data export to Excel format for improved data management and accessibility.',
      'Developed a document registration system for patient records in the Health Insurance Department, with functionality to upload and manage documents',
      'Developed a comprehensive marathon registration system supporting multiple race categories (Fun Run, Mini Marathon, Half Marathon, Full Marathon)',
      'Designed and implemented a payment management system with status tracking (Pending, Completed, Rejected)',
      'Built a real-time admin dashboard displaying statistical data and analytics using graphs',
      'Developed a participant management system with support for adding, editing, and deleting applicant information',
      'Designed and developed a modern, user-friendly UI/UX using Tailwind CSS and Framer Motion'
    ],
    images: ['/images/work/hospital-1.png', '/images/work/hospital-2.png', '/images/work/hospital-3.png'],
    images2: ['/images/work/hospital-4.png', '/images/work/hospital-5.png', '/images/work/hospital-6.png']
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
      'Programming Languages': ['C#'],
      'Game Engines': ['Unity'],
      'Software': ['Visual Studio','Github', 'Trello']
    },
    responsibilities: [
      'Assisted in the development of game prototypes and proof-of-concepts',
      'Participated in code reviews, identifying and resolving issues to improve code quality.',
      'Collaborated with senior developers in designing and implementing game mechanics.',
      'Conducted testing and debugging to identify and fix software defects.'
    ]
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
    ]
  }
};

export default function WorkDetail() {
  const { id } = useParams();
  const work = workDetails[id as keyof typeof workDetails];
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoIndex2, setPhotoIndex2] = useState(0);
  const [currentSlideshow, setCurrentSlideshow] = useState<'first' | 'second'>('first');

  // Add auto-sliding effect for first slideshow
  useEffect(() => {
    if (!work.images || work.images.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev < (work.images as string[]).length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [work.images]);

  // Add auto-sliding effect for second slideshow
  useEffect(() => {
    if (!work.images2 || work.images2.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex2((prev) => (prev < (work.images2 as string[]).length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [work.images2]);

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
            {work.images && work.images.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Images</h2>
                
                {/* Health Insurance Department Slideshow */}
                {id === 'chaiyaphum-hospital' && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Health Insurance Department</h3>
                    <div 
                      className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => {
                        setCurrentSlideshow('first');
                        setIsLightboxOpen(true);
                      }}
                    >
                      <Image
                        src={work.images[photoIndex]}
                        alt={`${work.title} image ${photoIndex + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex((prev) => (prev > 0 ? prev - 1 : (work.images as string[]).length - 1));
                          }}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex((prev) => (prev < (work.images as string[]).length - 1 ? prev + 1 : 0));
                          }}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {(work.images as string[]).map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPhotoIndex(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === photoIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        Click to view full size
                      </div>
                    </div>
                  </div>
                )}

                {/* Marathon Registration System Slideshow */}
                {id === 'chaiyaphum-hospital' && work.images2 && work.images2.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Marathon Registration System</h3>
                    <p className="text-gray-600 mb-4">This is a personal project that I designed and developed entirely on my own using Next.js. I gathered requirements directly from marathon organizers and built a full-featured registration system that supports multiple race types (Fun Run, Mini Marathon, Half Marathon, Full Marathon). The system includes a secure payment management module with real-time status tracking, an admin dashboard with interactive statistics, and a participant management panel. The UI/UX was crafted using Tailwind CSS and Framer Motion to ensure a clean and modern user experience.
                      You can view the project at: <a href="https://cphrun.hsoft.in.th" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://cphrun.hsoft.in.th</a></p>
                    <div 
                      className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      onClick={() => {
                        setCurrentSlideshow('second');
                        setIsLightboxOpen(true);
                      }}
                    >
                      <Image
                        src={work.images2[photoIndex2]}
                        alt={`${work.title} image ${photoIndex2 + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between px-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex2((prev) => (prev > 0 ? prev - 1 : (work.images2 as string[]).length - 1));
                          }}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex2((prev) => (prev < (work.images2 as string[]).length - 1 ? prev + 1 : 0));
                          }}
                          className="text-white hover:text-blue-300 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {(work.images2 as string[]).map((_, index) => (
                          <button
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPhotoIndex2(index);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === photoIndex2 ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                        Click to view full size
                      </div>
                    </div>
                  </div>
                )}

                {/* Default Slideshow for other projects */}
                {id !== 'chaiyaphum-hospital' && (
                  <div 
                    className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => {
                      setCurrentSlideshow('first');
                      setIsLightboxOpen(true);
                    }}
                  >
                    <Image
                      src={work.images[photoIndex]}
                      alt={`${work.title} image ${photoIndex + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-between px-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhotoIndex((prev) => (prev > 0 ? prev - 1 : (work.images as string[]).length - 1));
                        }}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhotoIndex((prev) => (prev < (work.images as string[]).length - 1 ? prev + 1 : 0));
                        }}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {(work.images as string[]).map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPhotoIndex(index);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === photoIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      Click to view full size
                    </div>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox for full-size image viewing */}
      {isLightboxOpen && work.images && work.images2 && (
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={currentSlideshow === 'first' 
            ? work.images.map((src: string) => ({ src }))
            : work.images2.map((src: string) => ({ src }))
          }
          index={currentSlideshow === 'first' ? photoIndex : photoIndex2}
        />
      )}
    </div>
  );
} 