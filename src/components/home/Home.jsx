/* src/components/home/Home.jsx */

import React from 'react';
import { Link } from 'react-router-dom';
import { GooeyText } from '@/components/ui/gooey-text-morphing';
import InfosphereLogo from '../../assets/InfoSphereLogo.png';
import ThreeDPhotoCarousel from "@/components/ui/3d-carousel"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import facultyImg1 from '../../assets/profiles/bhavyashree.jpg';
import facultyImg2 from '../../assets/profiles/ravi.jpg';
import facultyImg3 from '../../assets/profiles/amruth.jpg';
import facultyImg4 from '../../assets/profiles/smithashree.jpg';
import facultyImg5 from '../../assets/profiles/sangeetha.jpg';
import facultyImg6 from '../../assets/profiles/thalivar.jpg';
import vp from '../../assets/profiles/vp.jpg';
import js from '../../assets/profiles/jointsec.jpg';
import ss from '../../assets/profiles/sportssec.jpg';
import sh from '../../assets/profiles/sportshead.jpg';
import t from '../../assets/profiles/Treasurer.jpg';
import s from '../../assets/profiles/secretary.jpg';
import p from '../../assets/profiles/p.jpg';
import th from '../../assets/profiles/techhead.jpg';
import ch from '../../assets/profiles/culhead.jpg';
// Club Images (Using your new filenames)
import sportsImg from '../../assets/clubs/sports.jpg';
import techImg from '../../assets/clubs/tech.jpg';
import culturalImg from '../../assets/clubs/cul.jpg';
import { motion } from "framer-motion";

const facultyCoordinators = [
  {
    quote:
      "Empowering young innovators to shape tomorrow’s world—Infosphere is where ideas find their wings.",
    name: "Prof. Bavyashree HD",
    designation: "Head Faculty Coordinator, Infosphere",
    src: facultyImg1,
  },
  {
    quote:
      "At Infosphere, imagination meets innovation—our students redefine what’s possible every day.",
    name: "Dr. Ravi P",
    designation: "Head Faculty Coordinator, Infosphere",
    src: facultyImg2,
  },
  {
    quote:
      "Innovation begins with curiosity. At Infosphere, we nurture that spark into brilliance.",
    name: "Prof. Amruth V",
    designation: "Faculty Coordinator, Infosphere",
    src: facultyImg3,
  },
  {
    quote:
      "Technology is more than tools—it’s a mindset. Infosphere inspires students to think, build, and transform.",
    name: "Prof. Smithashree KP",
    designation: "Faculty Coordinator, Technical Club",
    src: facultyImg4,
  },
  {
    quote:
      "Every great creation starts with a single idea. Infosphere helps students turn that idea into impact.",
    name: "Prof. Sangeetha G",
    designation: "Faculty Coordinator, Technical Club",
    src: facultyImg5,
  },
  {
    quote:
      "Collaboration fuels innovation. Infosphere is where teamwork drives technological excellence.",
    name: "Prof. Vijaykumar",
    designation: "Faculty Coordinator, Technical Club",
    src: facultyImg6,
  },
];

const coreCommittee = [
  {
    quote: "Infosphere is where ideas turn into impact — leading it is all about empowering our peers to explore, learn, and create.",
    name: "Sagar C",
    designation: "President, Infosphere",
    src: p,
  },
  {
    quote: "Being part of Infosphere means inspiring teamwork and innovation — together, we make every idea count.",
    name: "Dheeksha D Shetty",
    designation: "Vice President, Infosphere",
    src: vp,
  },
  {
    quote: "Coordinating events and initiatives at Infosphere is about keeping the spark alive and helping every student be heard.",
    name: "Varun NS",
    designation: "Secretary, Infosphere",
    src: s,
  },
  {
    quote: "Teamwork and collaboration define Infosphere — every role, every effort adds to our shared success.",
    name: "Niharika MS",
    designation: "Joint Secretary, Infosphere",
    src: js,
  },
  {
    quote: "Managing resources isn’t just about numbers — it’s about making every opportunity count for the club and its members.",
    name: "Rocky S Simethy",
    designation: "Treasurer, Infosphere",
    src: t,
  },
  {
    quote: "Sports bring energy, unity, and spirit to Infosphere — it’s all about pushing limits and celebrating teamwork.",
    name: "Nagesh N",
    designation: "Sports Head, Infosphere",
    src: sh,
  },
  {
    quote: "Being a student secretary means being the bridge — connecting people, plans, and passion at Infosphere.",
    name: "Kushal R Gowda",
    designation: "Sports Secretary, Infosphere",
    src: ss,
  },
  {
    quote: "Culture is where creativity thrives — through dance, art, and drama, Infosphere celebrates every shade of talent.",
    name: "Bhuvan HN",
    designation: "Cultural Head, Infosphere",
    src: ch,
  },
  {
    quote: "From code to creation, every technical event at Infosphere is a step toward innovation and discovery.",
    name: "Sonashree MS",
    designation: "Technical Head, Infosphere",
    src: th,
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
            In{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
              Focus
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            Bringing Our People Into the Spotlight
          </p>

          {/* --- 8. Reduced max-width on desktop --- */}
          {/* Changed max-w-4xl to max-w-3xl */}
          <div className="w-full max-w-3xl mx-auto">
             {/* Adjusted min-h to account for mobile buttons below */}
            <div className="min-h-[500px] md:min-h-[500px] flex flex-col justify-center space-y-4">
              <ThreeDPhotoCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MEET THE TEAM --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Team Behind the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
              Dream
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
            The driving force behind Infosphere, from our guiding faculty to our dedicated student leaders.
          </p>

          <div className="mb-8 md:mb-20">
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-6 md:mb-12">
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
            Dive Into the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-light">
              Experience
            </span>
          </h2>
          <p className="text-lg text-slate-600 mb-16 text-center">
            Three clubs. Endless possibilities!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto items-start"> {/* Use items-start for alignment */}

            {/* --- CARD 1: SPORTS --- */}
            <CardContainer
              // Remove default padding from the outer container
              containerClassName="py-0"
              // Apply rounded corners and overflow hidden to the rotating div
              className="rounded-3xl overflow-hidden"
            >
              {/* Apply glassmorphism and ensure CardBody fills the container */}
              <CardBody className="relative group/card w-full h-auto rounded-3xl p-6 border bg-white/60 backdrop-blur-lg border-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/[0.2]">
                {/* Card Items remain the same */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Sports Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 text-sm max-w-sm mt-2"
                >
                  Compete • Achieve • Excel
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
                    as={Link}
                    to="/sports"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-light text-white text-xs font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* --- CARD 2: TECHNICAL --- */}
             <CardContainer
              containerClassName="py-0"
              className="rounded-3xl overflow-hidden"
            >
              <CardBody className="relative group/card w-full h-auto rounded-3xl p-6 border bg-white/60 backdrop-blur-lg border-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/[0.2]">
                 {/* Card Items remain the same */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Technical Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 text-sm max-w-sm mt-2"
                >
                  Innovate • Build • Code 
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
                    as={Link}
                    to="/technical"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-light text-white text-xs font-semibold shadow-md hover:shadow-lg transition-shadow"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>

            {/* --- CARD 3: CULTURAL --- */}
            <CardContainer
              containerClassName="py-0"
              className="rounded-3xl overflow-hidden"
            >
              <CardBody className="relative group/card w-full h-auto rounded-3xl p-6 border bg-white/60 backdrop-blur-lg border-slate-200/50 hover:shadow-2xl hover:shadow-brand-primary/[0.2]">
                 {/* Card Items remain the same */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-bold text-slate-900"
                >
                  Cultural Club
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 text-sm max-w-sm mt-2"
                >
                  Express • Perform • Inspire
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
                    as={Link}
                    to="/cultural"
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-light text-white text-xs font-semibold shadow-md hover:shadow-lg transition-shadow"
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