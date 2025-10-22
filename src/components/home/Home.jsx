/* src/components/home/Home.jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import InfosphereLogo from '../../assets/InfoSphereLogo.png';
import ThreeDPhotoCarousel from "@/components/ui/3d-carousel"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import facultyImg1 from '../../assets/profiles/faculty-1.png';
import facultyImg2 from '../../assets/profiles/faculty-2.png';
import facultyImg3 from '../../assets/profiles/faculty-3.png';
import facultyImg4 from '../../assets/profiles/faculty-4.png';
import facultyImg5 from '../../assets/profiles/faculty-5.png';
import facultyImg6 from '../../assets/profiles/faculty-6.png';
// Club Images (Using your new filenames)
import sportsImg from '../../assets/clubs/sports.webp';
import techImg from '../../assets/clubs/technical.png';
import culturalImg from '../../assets/clubs/cultural.png';
import { motion } from "framer-motion";

const facultyCoordinators = [
  {
    quote:
      "Guiding the next generation of innovators is our passion. We are proud to support the diverse activities of Infosphere.",
    name: "Dr. XYZ",
    designation: "HOD, Dept. of ISE",
    src: facultyImg1, // Was hodImg
  },
  {
    quote:
      "The technical club is a hub of creativity. It's inspiring to see students turn ideas into real-world projects.",
    name: "Prof. ABC",
    designation: "Faculty Coordinator, Technical Club",
    src: facultyImg2, // Was facultyImg1
  },
];

const coreCommittee = [
  {
    quote:
      "Leading Infosphere is an incredible experience. We work to create opportunities for every student to shine.",
    name: "Student President",
    designation: "President, Infosphere",
    src: facultyImg3, // Was studentImg1
  },
  {
    quote:
      "Organizing sports events brings so much energy to the campus. It's all about teamwork and spirit.",
    name: "Student Sports Head",
    designation: "Sports Head, Infosphere",
    src: facultyImg4, // Was studentImg2
  },
  {
    quote:
      "From dance to drama, the cultural wing is the heartbeat of the department. We celebrate creativity in all its forms.",
    name: "Student Cultural Head",
    designation: "Cultural Head, Infosphere",
    src: facultyImg5, // Was studentImg3
  },
  {
    quote:
      "Managing the technical projects and workshops is a rewarding challenge. We're building the future, one line of code at a time.",
    name: "Student Technical Head",
    designation: "Technical Head, Infosphere",
    src: facultyImg6, // Added another one
  },
];

// --- ANIMATION VARIANTS ---
const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Animates each child 0.2s after the previous one
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 }, // Start invisible and 20px down
  visible: {
    opacity: 1,
    y: 0, // Animate to full opacity and original position
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

function Home() {
  return (
    <>
      {/* --- SECTION 1: HERO --- */}
      <motion.section 
        className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-16 overflow-hidden"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 text-center flex flex-col items-center">
          
          <motion.div className="relative inline-block mb-10" variants={heroItemVariants}>
            <div className="absolute inset-0 bg-brand-primary rounded-full blur-3xl opacity-75"></div>
            <img 
              src={InfosphereLogo} 
              alt="Infosphere Logo" 
              className="relative z-10 h-52 w-auto sm:h-64" 
            />
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-4"
            variants={heroItemVariants}
          >
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
              Infosphere
            </span>
          </motion.h1>

          <motion.div 
            className="flex items-center justify-center min-h-[60px] md:h-[80px]"
            // --- THIS IS THE FIX ---
            // Changed heroItemvariants (lowercase v) to heroItemVariants (capital V)
            variants={heroItemVariants}
          >
            <GooeyText
              texts={[
                "BYTE THE CODE",
                "FEEL THE BEAT",
                "LIVE THE SPIRIT"
              ]}
              morphTime={1}
              cooldownTime={1.5}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-900 whitespace-nowrap"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* --- SECTION 2: 3D CAROUSEL --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Our Gallery
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            A glimpse into our events, workshops, and achievements.
          </p>
          
          <div className="w-full max-w-4xl mx-auto">
            <div className="min-h-[500px] flex flex-col justify-center space-y-4">
              <ThreeDPhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MEET THE TEAM --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Meet the Team
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            The driving force behind Infosphere, from our guiding faculty to our dedicated student leaders.
          </p>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12">
              Faculty Coordinators
            </h3>
            <AnimatedTestimonials testimonials={facultyCoordinators} />
          </div>

          <div>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-12">
              Core Committee
            </h3>
            <AnimatedTestimonials testimonials={coreCommittee} />
          </div>

        </div>
      </section>

      {/* --- SECTION 4: CHOOSE YOUR PATH (3D CARDS) --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-2">
            Choose Your Path
          </h2>
          <p className="text-lg text-slate-600 mb-16 text-center">
            Three clubs. Endless possibilities.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            
            {/* --- CARD 1: SPORTS --- */}
            <CardContainer className="inter-var">
              <CardBody className="bg-slate-50 relative group/card hover:shadow-2xl hover:shadow-brand-primary/[0.2] border-slate-200 w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Sports Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-600 text-sm max-w-sm mt-2"
                >
                  Play. Compete. Win. From the cricket pitch to the basketball court.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={sportsImg} 
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Sports Club"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link} // This is why we need the import
                    to="/sports"
                    className="px-4 py-2 rounded-xl bg-brand-dark text-white text-xs font-bold"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* --- CARD 2: TECHNICAL --- */}
            <CardContainer className="inter-var">
              <CardBody className="bg-slate-50 relative group/card hover:shadow-2xl hover:shadow-brand-primary/[0.2] border-slate-200 w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Technical Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-600 text-sm max-w-sm mt-2"
                >
                  Code. Build. Innovate. Workshops, hackathons, and real-world projects.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={techImg}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Technical Club"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link} // This is why we need the import
                    to="/technical"
                    className="px-4 py-2 rounded-xl bg-brand-dark text-white text-xs font-bold"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* --- CARD 3: CULTURAL --- */}
            <CardContainer className="inter-var">
              <CardBody className="bg-slate-50 relative group/card hover:shadow-2xl hover:shadow-brand-primary/[0.2] border-slate-200 w-auto h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Cultural Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-600 text-sm max-w-sm mt-2"
                >
                  Express. Perform. Inspire. The stage is yours, from dance to music.
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={culturalImg}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="Cultural Club"
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link} // This is why we need the import
                    to="/cultural"
                    className="px-4 py-2 rounded-xl bg-brand-dark text-white text-xs font-bold"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;