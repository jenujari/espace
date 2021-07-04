import * as React from "react";
import { motion } from "framer-motion"

import Root from "./../Components/Common/RootCover";
import Vid from "./../assets/videos/bg_one.mp4";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 2
    }
  },
};

// markup
const IndexPage = () => {
  return (
    <Root>
      <div className="comming__soon__main">
        <video
          className="particle__bg"
          autoPlay
          loop
          muted
          playsInline
          src={Vid}
          type="video/mp4"
        />
        <div className="overlay">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            {"Coming Soon..."}
          </motion.p>
        </div>
      </div>
    </Root>
  )
}

export default IndexPage
