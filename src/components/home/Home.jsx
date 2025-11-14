import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import ThreeDPhotoCarousel from "@/components/ui/3d-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CometCard } from "@/components/ui/comet-card";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Link } from "react-router-dom";

import InfosphereLogo from "../../assets/InfoLogo.webp";
import facultyImg7 from "../../assets/profiles/ajay.webp";
import facultyImg1 from "../../assets/profiles/bhavyashree.webp";
import ch from "../../assets/profiles/culhead.webp";
import js from "../../assets/profiles/jointsec.webp";
import p from "../../assets/profiles/p.webp";
import pradImg from "../../assets/profiles/Prad.webp";
import rajathImg from "../../assets/profiles/Rajath.webp";
import raju from "../../assets/profiles/raju.webp";
import facultyImg2 from "../../assets/profiles/ravi.webp";
import s from "../../assets/profiles/secretary.webp";
import sh from "../../assets/profiles/sportshead.webp";
import ss from "../../assets/profiles/sportssec.webp";
import th from "../../assets/profiles/techhead.webp";
import t from "../../assets/profiles/Treasurer.webp";
import vaibhavImg from "../../assets/profiles/Vaibhav.webp";
import vp from "../../assets/profiles/vp.webp";
// Club Images (Using your new filenames)
import { motion } from "framer-motion";
import culturalImg from "../../assets/clubs/cul.webp";
import sportsImg from "../../assets/clubs/sports.webp";
import techImg from "../../assets/clubs/tech.webp";
// --- ADD THESE CAROUSEL IMPORTS ---
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// --- COMPONENT IMPORTS ---
// ... (existing imports like GooeyText, ThreeDPhotoCarousel, CardContainer, etc.) ...
import { Story, StoryImage } from "@/components/ui/stories-carousel";

//new faculty coordinators data
import amithImg from "../../assets/profiles/amith.webp";
import amruthImg from "../../assets/profiles/amruth.webp";
import chaitraImg from "../../assets/profiles/chaitra.webp";
import gaabhriImg from "../../assets/profiles/gaabhri.webp";
import jkbImg from "../../assets/profiles/jkb.webp";
import karthikImg from "../../assets/profiles/karthik.webp";
import kgImg from "../../assets/profiles/kg.webp";
import khasmiImg from "../../assets/profiles/khasmi.webp";
import nithyaImg from "../../assets/profiles/nithya.webp";
import omniImg from "../../assets/profiles/omni.webp";
import pinkyImg from "../../assets/profiles/pinky.webp";
import rajniImg from "../../assets/profiles/rajni.webp";
import rakshithaImg from "../../assets/profiles/rakshitha.webp";
import ranjuuImg from "../../assets/profiles/ranjuu.webp";
import rohitImg from "../../assets/profiles/rohit.webp";
import sangeethaImg from "../../assets/profiles/sangeetha.webp";
import sarsaImg from "../../assets/profiles/sarsa.webp";
import shootImg from "../../assets/profiles/shoot.webp";
import sidduImg from "../../assets/profiles/siddu.webp";
import smithashreeImg from "../../assets/profiles/smithashree.webp";
import sujayImg from "../../assets/profiles/sujay.webp";
import thalivarImg from "../../assets/profiles/thalivar.webp";
import varunImg from "../../assets/profiles/varun.webp";

const developerTeam = [
  { name: "R Pradhyumna", designation: "Architecture + Backend", src: pradImg },
  { name: "Rajath S", designation: "Frontend + UI", src: rajathImg },
  { name: "Vaibhav M S", designation: "Frontend + UI", src: vaibhavImg },
];

const facultyCoordinators = [
  {
    quote:
      "At Infosphere, we believe in nurturing curiosity and courage—because every great innovation begins with a bold idea.",
    name: "Dr. Sharath Kumar YH",
    designation: "Head of Department, ISE",
    src: raju,
  },
  {
    quote:
      "Empowering young innovators to shape tomorrow’s world—Infosphere is where ideas find their wings.",
    name: "Prof. Bhavyashree HD",
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
    quote: "At Infosphere, creativity isn’t just encouraged—it’s engineered.",
    name: "Prof. Ajay Kumar BR",
    designation: "Head Faculty Coordinator, Infosphere",
    src: facultyImg7,
  },
];

const coreCommittee = [
  {
    quote:
      "Infosphere is where ideas turn into impact — leading it is all about empowering our peers to explore, learn, and create.",
    name: "Sagar C",
    designation: "President, Infosphere",
    src: p,
  },
  {
    quote:
      "Being part of Infosphere means inspiring teamwork and innovation — together, we make every idea count.",
    name: "Dheeksha D Shetty",
    designation: "Vice President, Infosphere",
    src: vp,
  },
  {
    quote:
      "Coordinating events and initiatives at Infosphere is about keeping the spark alive and helping every student be heard.",
    name: "Varun NS",
    designation: "Secretary, Infosphere",
    src: s,
  },
  {
    quote:
      "Teamwork and collaboration define Infosphere — every role, every effort adds to our shared success.",
    name: "Niharika MS",
    designation: "Joint Secretary, Infosphere",
    src: js,
  },
  {
    quote:
      "Managing resources isn’t just about numbers — it’s about making every opportunity count for the club and its members.",
    name: "Rocky S Simethy",
    designation: "Treasurer, Infosphere",
    src: t,
  },
  {
    quote:
      "Sports bring energy, unity, and spirit to Infosphere — it’s all about pushing limits and celebrating teamwork.",
    name: "Nagesh N",
    designation: "Sports Head, Infosphere",
    src: sh,
  },
  {
    quote:
      "Being a student secretary means being the bridge — connecting people, plans, and passion at Infosphere.",
    name: "Kushal R Gowda",
    designation: "Sports Secretary, Infosphere",
    src: ss,
  },
  {
    quote:
      "Culture is where creativity thrives — through dance, art, and drama, Infosphere celebrates every shade of talent.",
    name: "Bhuvan HN",
    designation: "Cultural Head, Infosphere",
    src: ch,
  },
  {
    quote:
      "From code to creation, every technical event at Infosphere is a step toward innovation and discovery.",
    name: "Sonashree MS",
    designation: "Technical Head, Infosphere",
    src: th,
  },
];

// --- Department Faculty Data (with short quotes) ---
const departmentFaculty = [
  {
    name: "Dr. D Khasim Vali",
    designation: "Professor",
    src: khasmiImg,
    quote: "Shaping the future of tech.",
  },
  {
    name: "Dr. Sujay S",
    designation: "Assistant Professor",
    src: sujayImg,
    quote: "Bridging theory and practice.",
  },
  {
    name: "Prof. Saraswathi D",
    designation: "Assistant Professor",
    src: sarsaImg,
    quote: "Empowering students.",
  }, // Placeholder name
  {
    name: "Prof. Amruth V",
    designation: "Assistant Professor",
    src: amruthImg,
    quote: "Guiding future engineers.",
  },
  {
    name: "Prof. Smithashree KP",
    designation: "Assistant Professor",
    src: smithashreeImg,
    quote: "Inspiring innovation daily.",
  },
  {
    name: "Prof. Chaitrashree R",
    designation: "Assistant Professor",
    src: chaitraImg,
    quote: "Fostering learning.",
  },
  {
    name: "Prof. Siddaraj MG",
    designation: "Assistant Professor",
    src: sidduImg,
    quote: "Teaching core concepts.",
  }, // Placeholder name
  {
    name: "Prof. Chaitra KG",
    designation: "Assistant Professor",
    src: kgImg,
    quote: "Focusing on practical knowledge.",
  },
  {
    name: "Prof. Sangeetha G",
    designation: "Assistant Professor",
    src: sangeethaImg,
    quote: "Passionate about teaching.",
  },
  {
    name: "Prof. Vijay Kumar MS",
    designation: "Assistant Professor",
    src: thalivarImg,
    quote: "Dedicated to student success.",
  },
  {
    name: "Prof. Zuha Azmi",
    designation: "Assistant Professor",
    src: pinkyImg,
    quote: "Encouraging creativity.",
  }, // Placeholder name
  {
    name: "Prof. Amith S",
    designation: "Assistant Professor",
    src: amithImg,
    quote: "Exploring new technologies.",
  },
  {
    name: "Prof. Chandan KN",
    designation: "Assistant Professor",
    src: shootImg,
    quote: "Passionate about code.",
  }, // Placeholder name
  {
    name: "Prof. Rajinikanth G",
    designation: "Assistant Professor",
    src: rajniImg,
    quote: "Fostering student potential.",
  },
  {
    name: "Prof. Rohith Gowda KS",
    designation: "Assistant Professor",
    src: rohitImg,
    quote: "Exploring computer science.",
  }, // Placeholder name
  {
    name: "Prof. Ganavi NP",
    designation: "Assistant Professor",
    src: gaabhriImg,
    quote: "Building foundational skills.",
  },
  {
    name: "Prof. Sri Sai Gomini D M",
    designation: "Assistant Professor",
    src: omniImg,
    quote: "Innovating in education.",
  }, // Placeholder name
  {
    name: "Rakshitha NH",
    designation: "Teaching Assistant",
    src: rakshithaImg,
    quote: "Making complex topics clear.",
  },
  {
    name: "Varun AR",
    designation: "Teaching Assistant",
    src: varunImg,
    quote: "Supporting student growth",
  },
  {
    name: "Ranjitha PV",
    designation: "Teaching Assistant",
    src: ranjuuImg,
    quote: "Dedicated to teaching.",
  }, // Placeholder name
  {
    name: "Karthik N",
    designation: "Lab Instructor",
    src: karthikImg,
    quote: "Inspiring practical knowledge.",
  },
  {
    name: "Nithyananda M",
    designation: "Lab Instructor",
    src: nithyaImg,
    quote: "Learning through experimentation.",
  },
  {
    name: "Gopal Krishna BV",
    designation: "Lab Instructor",
    src: jkbImg,
    quote: "Knowledge through practice.",
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
        <div className="container flex flex-col items-center px-4 mx-auto text-center">
          <motion.div
            className="relative inline-block mb-10"
            variants={heroItemVariants}
          >
            <div className="absolute inset-0 rounded-full opacity-75 bg-brand-primary blur-3xl"></div>
            <img
              src={InfosphereLogo}
              alt="Infosphere Logo"
              className="relative z-10 w-auto h-52 sm:h-64"
            />
          </motion.div>

          <motion.h1
            className="mb-4 text-5xl font-bold sm:text-6xl md:text-7xl text-slate-900"
            variants={heroItemVariants}
          >
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
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
              texts={["BYTE THE CODE", "FEEL THE BEAT", "LIVE THE SPIRIT"]}
              morphTime={1}
              cooldownTime={1.5}
              className="text-3xl font-semibold sm:text-4xl md:text-5xl text-slate-900 whitespace-nowrap"
            />
          </motion.div>
        </div>
      </motion.section>
      {/* --- SECTION 2: 3D CAROUSEL --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold md:text-5xl text-slate-900">
            In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
              Focus
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-lg text-slate-600">
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
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-2 text-4xl font-bold md:text-5xl text-slate-900">
            Team Behind the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
              Dream
            </span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-lg text-slate-600">
            The driving force behind Infosphere, from our guiding faculty to our
            dedicated student leaders.
          </p>

          {/* Subsection 1: Faculty Coordinators */}
          <div className="mb-16 md:mb-20">
            <h3 className="mb-6 text-3xl font-semibold md:text-4xl text-slate-800 md:mb-12">
              Core Faculty Coordinators
            </h3>
            {/* Adding quote: "" for safety */}
            <AnimatedTestimonials
              testimonials={facultyCoordinators.map((fc) => ({
                ...fc,
                quote: fc.quote || "",
              }))}
            />
          </div>

          {/* Subsection 2: Core Committee */}
          <div className="mb-16 md:mb-20">
            <h3 className="mb-6 text-3xl font-semibold md:text-4xl text-slate-800 md:mb-12">
              Core Committee
            </h3>
            {/* Adding quote: "" for safety */}
            <AnimatedTestimonials
              testimonials={coreCommittee.map((cc) => ({
                ...cc,
                quote: cc.quote || "",
              }))}
            />
          </div>

          {/* --- NEW SECTION: Meet the Developers (using Comet Cards) --- */}
          <section className="w-full py-16 md:py-24">
            {" "}
            {/* Removed background gradient */}
            <div className="container px-4 mx-auto text-center">
              <h2 className="mb-2 text-4xl font-bold md:text-5xl text-slate-900">
                Meet the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
                  Developers
                </span>
              </h2>
              <p className="max-w-2xl mx-auto mb-16 text-lg text-slate-700">
                {" "}
                {/* Increased bottom margin */}
                The individuals who brought this website to life.
              </p>

              {/* Use flexbox to center the Comet Cards */}
              <div className="flex flex-wrap items-start justify-center max-w-5xl gap-8 mx-auto md:gap-12">
                {" "}
                {/* Use items-start for alignment */}
                {developerTeam.map((member, index) => (
                  <CometCard key={index} className="w-auto">
                    {" "}
                    {/* Let CometCard handle perspective */}
                    {/* Content structure inside CometCard */}
                    <div className="overflow-hidden border shadow-lg w-72 rounded-2xl bg-slate-900/80 backdrop-blur-sm border-slate-700">
                      {" "}
                      {/* Glassmorphism-like dark card */}
                      <img
                        src={member.src}
                        alt={member.name}
                        className="object-cover object-center w-full h-80" // Adjust height as needed
                      />
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-bold truncate">
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-300">
                          {member.designation}
                        </p>
                      </div>
                    </div>
                  </CometCard>
                ))}
              </div>
            </div>
          </section>

          {/* --- FINAL ALIGNED Subsection 3: Department Faculty (Stories Carousel) --- */}
          <div>
            <h3 className="mb-6 text-3xl font-semibold md:text-4xl text-slate-800 md:mb-12">
              Faculty Coordinators
            </h3>
            {/* Main Carousel Wrapper */}
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="py-4 -ml-4">
                {departmentFaculty.map((faculty, index) => (
                  <CarouselItem
                    key={faculty.name + index}
                    className="pl-4 basis-auto sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
                  >
                    {/* --- Story Card: Added flex centering --- */}
                    <Story className="relative w-[180px] md:w-[210px] aspect-square flex flex-col justify-center items-center rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 ease-in-out hover:scale-105">
                      {" "}
                      {/* Added flex utils */}
                      <StoryImage
                        alt={faculty.name}
                        src={faculty.src}
                        // Use relative positioning and ensure it fills parent
                        className="relative object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Gradient Overlays (Positioned absolute relative to StoryImage/Story) */}
                      <div className="absolute inset-x-0 bottom-0 z-10 transition-opacity duration-300 opacity-100 pointer-events-none h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-xl group-hover:opacity-90"></div>
                      {/* Removed top gradient as text is only at bottom now */}
                      {/* <div className="absolute inset-x-0 top-0 pointer-events-none h-1/4 bg-gradient-to-b from-black/60 via-black/30 to-transparent opacity-90 rounded-t-xl"></div> */}
                      {/* Name & Designation (Stacked at Bottom) */}
                      <div className="absolute z-20 text-white pointer-events-none bottom-3 left-3 right-3">
                        <p className="text-sm font-semibold truncate mb-0.5">
                          {faculty.name}
                        </p>
                        <p className="text-[11px] opacity-90 leading-tight">
                          {faculty.designation}
                        </p>
                      </div>
                    </Story>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <CarouselPrevious className="absolute left-0 z-30 items-center justify-center hidden p-3 transition-all -translate-y-1/2 border rounded-full shadow-md top-1/2 md:-left-12 bg-white/30 backdrop-blur-lg border-white/20 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed sm:flex text-slate-800" />
              <CarouselNext className="absolute right-0 z-30 items-center justify-center hidden p-3 transition-all -translate-y-1/2 border rounded-full shadow-md top-1/2 md:-right-12 bg-white/30 backdrop-blur-lg border-white/20 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed sm:flex text-slate-800" />

              {/* Mobile Buttons */}
              <div className="relative z-30 flex justify-center gap-4 mt-6 sm:hidden">
                <CarouselPrevious className="relative left-auto flex items-center justify-center p-3 transition-all translate-y-0 border rounded-full shadow-md bg-white/30 backdrop-blur-lg border-white/20 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-800" />
                <CarouselNext className="relative right-auto flex items-center justify-center p-3 transition-all translate-y-0 border rounded-full shadow-md bg-white/30 backdrop-blur-lg border-white/20 hover:bg-white/50 disabled:opacity-50 disabled:cursor-not-allowed text-slate-800" />
              </div>
            </Carousel>
          </div>
        </div>{" "}
        {/* closes Section 3 container (container mx-auto px-4 text-center) */}
      </section>{" "}
      {/* closes Section 3 section */}
      {/* --- SECTION 4: CHOOSE YOUR PATH (3D CARDS) --- */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <h2 className="mb-2 text-4xl font-bold text-center md:text-5xl text-slate-900">
            Dive Into the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark to-brand-light">
              Experience
            </span>
          </h2>
          <p className="mb-16 text-lg text-center text-slate-600">
            Three clubs. Endless possibilities!
          </p>

          <div className="grid items-start max-w-5xl grid-cols-1 gap-10 mx-auto lg:grid-cols-3">
            {" "}
            {/* Use items-start for alignment */}
            {/* --- CARD 1: SPORTS --- */}
            <CardContainer
              // Remove default padding from the outer container
              containerClassName="py-0"
              // Apply rounded corners and overflow hidden to the rotating div
              className="overflow-hidden rounded-3xl"
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
                  className="max-w-sm mt-2 text-sm text-slate-700"
                >
                  Compete • Achieve • Excel
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={sportsImg}
                    height="1000"
                    width="1000"
                    className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                    alt="Sports Club"
                  />
                </CardItem>
                <div className="flex items-center justify-end mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to="/sports"
                    className="px-4 py-2 text-xs font-semibold text-white transition-shadow rounded-full shadow-md bg-gradient-to-r from-brand-primary to-brand-light hover:shadow-lg"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            {/* --- CARD 2: TECHNICAL --- */}
            <CardContainer
              containerClassName="py-0"
              className="overflow-hidden rounded-3xl"
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
                  className="max-w-sm mt-2 text-sm text-slate-700"
                >
                  Innovate • Build • Code
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={techImg}
                    height="1000"
                    width="1000"
                    className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                    alt="Technical Club"
                  />
                </CardItem>
                <div className="flex items-center justify-end mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to="/technical"
                    className="px-4 py-2 text-xs font-semibold text-white transition-shadow rounded-full shadow-md bg-gradient-to-r from-brand-primary to-brand-light hover:shadow-lg"
                  >
                    Explore →
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            {/* --- CARD 3: CULTURAL --- */}
            <CardContainer
              containerClassName="py-0"
              className="overflow-hidden rounded-3xl"
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
                  className="max-w-sm mt-2 text-sm text-slate-700"
                >
                  Express • Perform • Inspire
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={culturalImg}
                    height="1000"
                    width="1000"
                    className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                    alt="Cultural Club"
                  />
                </CardItem>
                <div className="flex items-center justify-end mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to="/cultural"
                    className="px-4 py-2 text-xs font-semibold text-white transition-shadow rounded-full shadow-md bg-gradient-to-r from-brand-primary to-brand-light hover:shadow-lg"
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
