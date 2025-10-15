import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "./utils/motion";
import {
  About,
  Contact,
  Feedbacks,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import Loading from "./components/Loading";
import ProjectPage from "./pages/ProjectPage";

const Landingpage = () => {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {<Experience />}
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap justify-center items-center gap-10  bg-primary">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-white text-[20px] font-bold text-center"
        >
          You could also reach out to me through my socials.
        </motion.p>
      </div>
      <div className="bg-primary w-full flex flex-row flex-wrap justify-center items-center gap-10 ">
        <Footer />
      </div>
    </>
  );
};

function App() {
  const location = useLocation();
  const [landingLoading, setLandingLoading] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => {
        setLandingLoading(false);
      }, 4000); // Show loading for 4 seconds

      return () => clearTimeout(timer);
    } else {
      setLandingLoading(false); // No loading for other pages
    }
  }, [location.pathname]);

  if (landingLoading && location.pathname === "/") {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/pages/[id]" element={<Navigate to="/" replace />} />
    </Routes>
  );
}


export default App;
