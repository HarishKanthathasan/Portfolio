import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1, 5)}
        className='mt-4 text-secondary text-[15px] max-w-7xl leading-[20px] text-justify'
      >
        Hello! I'm Harish, a highly motivated 4th-year ICT (Information and Communication Technology) undergraduate at the University of Kelaniya. 🎓<br /><br />

        💻 About Me:<br />
        I am passionate about exploring the dynamic world of technology, particularly in the realm of ICT. Throughout my academic journey, I have been intrigued by the ever-evolving digital landscape and its potential to revolutionize industries and drive positive change. As an avid learner, I am committed to staying updated with the latest trends and advancements in the tech sphere.<br /><br />

        🌟 Key Skills:<br />
        I possess a strong foundation in programming languages like Python, and Java along with proficiency in web development technologies such as HTML, CSS, and JavaScript.<br /><br />

        🎯 Future Goals:<br />
        My ambition is to leverage my skills and knowledge to contribute meaningfully to the tech industry. I am excited about the prospect of applying ICT solutions to address real-world problems and make a positive impact on society. I am open to exploring opportunities in software development, data analytics, or any field where technology plays a pivotal role.<br /><br />

        🌱 Continuous Learning:<br />
        As the tech landscape evolves rapidly, I believe in the importance of continuous learning. I am always eager to explore new technologies, attend workshops, and engage with like-minded professionals to expand my horizons and stay ahead in this ever-changing field.<br /><br />

        Let's connect and explore opportunities to collaborate or share insights about the fascinating world of ICT! Feel free to reach out via messages. Looking forward to connecting with you! 😊<br /><br />

        #ICT #TechnologyEnthusiast #SoftwareDeveloper #DataAnalytics #ContinuousLearner<br /><br />
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");