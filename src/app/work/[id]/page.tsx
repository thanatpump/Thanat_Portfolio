'use client';

import { motion } from 'framer-motion';
import { use } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

// ข้อมูลผลงานของแต่ละที่ทำงาน
const workDetails = {
  'chaiyaphum-hospital': {
    title: 'Chaiyaphum Hospital',
    period: '2025 Feb - Present',
    role: 'Full Stack Developer',
    description: 'I gathered data from the Health Insurance Department and designed a MySQL database to streamline data access and management. I also developed a web application using Laravel, ensuring a user-friendly interface and efficient data processing for improved workflow.',
    images: [
      '/images/work/hospital-1.png',
      '/images/work/hospital-2.png',
      '/images/work/hospital-3.png'
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'HTML' , 'CSS' , 'JavaScript'],
    achievements: [
      'Developed a database management system',
      'Built a health insurance registration system for foreign nationals',
      'Improved system performance and efficiency'
    ]
  },
  'dkcode': {
    title: 'DKCode Co, Ltd',
    period: '2024 Nov - 2025 Feb',
    role: 'Programmer',
    description: 'I worked as a low-code programmer in a work-from-home setup, focusing on internal systems for hospitals, including electronic medical records (EMR), appointment booking systems, and visit management systems.',
    images: [
      '/images/work/dkcode-1.png',
      '/images/work/dkcode-2.png',
      '/images/work/dkcode-3.png'
    ],
    technologies: ['Low-code', 'MySQL', 'JavaScript' ],
    achievements: [
      'Developed a Registration System ',
      'Developed a Patient Screening System',
      'Developed a Visit Scheduling System'
    ]
  },
  'soft-kingdom': {
    title: 'Soft Kingdom Co, Ltd',
    period: '2023 May - 2023 Sep',
    role: 'Game Developer',
    description: 'Developed games for multiple platforms to enhance user engagement and expand reach.',
    images: [
      // '/images/work/soft-kingdom-1.jpg',
      // '/images/work/soft-kingdom-2.jpg',
      // '/images/work/soft-kingdom-3.jpg'
    ],
    technologies: ['Unity', 'C#', 'Game Design'],
    achievements: [
      'Developed games for PC platforms.',
      'Created AI systems for NPCs.',
      'Designed and developed gameplay mechanics.'
    ]
  },
  'one-game': {
    title: 'ONE Game',
    period: '2021 Dec - 2023 Mar',
    role: 'Game Developer',
    description: 'Developed mobile games to enhance user experience and engagement.',
    images: [
      // '/images/work/one-game-1.jpg',
      // '/images/work/one-game-2.jpg',
      // '/images/work/one-game-3.jpg'
    ],
    technologies: ['Godot', 'GDScript', 'Mobile Game Development'],
    achievements: [
      'Developed games for mobile platforms.',
      'Built multiplayer game systems.',
      'Designed and developed UI/UX for mobile devices.'
    ]
  }
};

export default function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const work = workDetails[resolvedParams.id as keyof typeof workDetails];
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Data not found</h1>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-bold mb-4">{work.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{work.period}</p>
            <p className="text-lg text-blue-600 font-semibold">{work.role}</p>
            <p className="text-gray-700 mt-4">{work.description}</p>
          </div>

          {/* Image Carousel */}
          <div className="mb-8">
            <Slider {...settings} className="work-carousel">
              {work.images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <Image
                    src={image}
                    alt={`Project image ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      Click to view full size
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Lightbox */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={work.images.map(src => ({ src }))}
          />

          {/* Technologies */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
            <ul className="space-y-3">
              {work.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .work-carousel .slick-prev,
        .work-carousel .slick-next {
          z-index: 10;
        }
        .work-carousel .slick-prev {
          left: 25px;
        }
        .work-carousel .slick-next {
          right: 25px;
        }
        .work-carousel .slick-dots {
          bottom: 20px;
        }
        .work-carousel .slick-dots li button:before {
          color: white;
        }
      `}</style>
    </div>
  );
} 