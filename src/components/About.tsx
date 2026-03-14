import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImg from "@/assets/portrait.jpg";
import BotanicalDecor from "@/components/BotanicalDecor";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <BotanicalDecor variant="about" />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Portrait with tilted frame */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-72 h-80 md:w-80 md:h-96 border-2 border-accent rounded-lg transform rotate-3 top-4 left-1/2 -translate-x-1/2" />
          <img
            src={portraitImg}
            alt="Sushil Shrestha"
            className="relative w-72 h-80 md:w-80 md:h-96 object-cover rounded-lg shadow-lg -rotate-2"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-accent font-body text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            Passionate About Technology
          </h2>
          <div className="space-y-4 font-body text-foreground/75 leading-relaxed">
            <p>
              I am a back-end developer specializing in building secure, scalable, and high-performance applications
              using Python (Django) and PHP (Laravel), with hands-on experience in developing Flutter-based mobile applications.
              I have strong expertise in designing robust APIs, managing databases, and implementing efficient server-side architectures.
            </p>
            <p>
              I actively work on real-world projects and continuously refine my skills to deliver reliable, maintainable,
              and impactful software solutions aligned with modern industry standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
