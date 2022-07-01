import React from "react";
import home1 from "../img/home1.png";
import { Layout, Description, ImageContainer, Hide } from "../styles";
import { motion } from "framer-motion";

const AboutSection = () => {
  // Framer-motion variant
  const titleAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } },
  };

  return (
    <Layout>
      <Description>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="title"
        >
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <motion.h2
              variants={titleAnimation}
              initial="hidden"
              animate="show"
            >
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <ImageContainer>
        <img src={home1} alt="guy with a camera" />
      </ImageContainer>
    </Layout>
  );
};

export default AboutSection;
