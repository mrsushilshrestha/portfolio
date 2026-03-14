import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import heroImg from "@/assets/hero-fern.jpg";
import cvFile from "@/assets/Sushil-Shrestha-CV.pdf";

const Hero = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Modern biotechnology laboratory with microscope" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 gradient-hero-overlay" />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-white font-body text-sm tracking-[0.3em] uppercase mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] font-semibold"
      >
         Skilled Back-End Developer | Django & Laravel Specialist | Flutter Developer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-tight mb-6"
      >
        Sushil Shrestha
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-lg md:text-xl text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] mb-10 max-w-xl mx-auto"
      >
        Python Enthusiast | BIT Student | Aspiring Technologist
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Dialog>
          <DialogTrigger asChild>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-body font-semibold text-sm hover:bg-white/20 transition-colors w-full sm:w-auto justify-center">
              View CV
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-[90vw] h-[85vh] p-0 sm:p-2 bg-transparent border-none shadow-none flex flex-col justify-center items-center rounded-2xl transition-all duration-300 [&>button]:bg-black/50 [&>button]:text-white [&>button]:backdrop-blur-md [&>button]:hover:bg-black [&>button]:p-3 [&>button]:rounded-full [&>button]:absolute [&>button]:-right-2 [&>button]:-top-4 sm:[&>button]:-right-4 sm:[&>button]:-top-4 [&>button]:z-[60] [&>button]:border [&>button]:border-white/20 [&>button_svg]:w-5 [&>button_svg]:h-5">
            <DialogHeader className="sr-only">
              <DialogTitle>Sushil Shrestha CV</DialogTitle>
              <DialogDescription>View and download CV</DialogDescription>
            </DialogHeader>
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col items-center justify-center -webkit-overflow-scrolling-touch">
              <iframe 
                src={cvFile} 
                className="w-full h-full border-none touch-pan-y" 
                title="Sushil Shrestha CV Preview"
              />
              {/* Floating control dock for mobile/desktop */}
              <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40">
                <a
                  href={cvFile}
                  download="Sushil-Shrestha-CV.pdf"
                  className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-black/90 backdrop-blur-md text-white font-body font-semibold text-sm sm:text-base hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/20"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>

    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown className="w-6 h-6 text-primary-foreground/60" />
    </motion.div>
  </section>
);

export default Hero;
