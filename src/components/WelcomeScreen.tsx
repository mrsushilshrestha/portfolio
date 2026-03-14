import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const greetings = [
  { text: "नमस्ते",    sub: "Namaste",  lang: "Nepali",   emoji: "🙏",  dir: "ltr" },
  { text: "नमस्ते",    sub: "Namaste",  lang: "Hindi",    emoji: "🇮🇳", dir: "ltr" },
  { text: "Hello",     sub: "Welcome",  lang: "English",  emoji: "👋",  dir: "ltr" },
  { text: "こんにちは", sub: "Konnichiwa", lang: "Japanese", emoji: "🌸", dir: "ltr" },
  { text: "안녕하세요", sub: "Annyeonghaseyo", lang: "Korean", emoji: "🎋", dir: "ltr" },
  { text: "مرحباً",   sub: "Marhaban",  lang: "Arabic",   emoji: "☪️",  dir: "rtl" },
];

const WelcomeScreen = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("welcomed")) {
      sessionStorage.setItem("welcomed", "true");
      setVisible(true);

      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        if (idx < greetings.length) {
          setStep(idx);
        } else {
          clearInterval(interval);
          setTimeout(() => setLeaving(true), 500);
          setTimeout(() => setVisible(false), 1500);
        }
      }, 820);

      return () => clearInterval(interval);
    }
  }, []);

  if (!visible) return null;

  const current = greetings[step];

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.06, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Animated background glow that shifts color per language */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${step}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: [
                  "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 65%)", // Nepali — violet
                  "radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 65%)", // Hindi — saffron
                  "radial-gradient(ellipse at center, rgba(59,130,246,0.12) 0%, transparent 65%)", // English — blue
                  "radial-gradient(ellipse at center, rgba(236,72,153,0.12) 0%, transparent 65%)", // Japanese — pink
                  "radial-gradient(ellipse at center, rgba(16,185,129,0.12) 0%, transparent 65%)", // Korean — green
                  "radial-gradient(ellipse at center, rgba(234,179,8,0.12)  0%, transparent 65%)", // Arabic — gold
                ][step],
              }}
            />
          </AnimatePresence>

          {/* Center greeting */}
          <div className="relative flex flex-col items-center gap-3 px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
                exit={{    opacity: 0, y: -24, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-2 text-center"
                dir={current.dir}
              >
                {/* Emoji */}
                <span className="text-5xl sm:text-6xl leading-none mb-1">
                  {current.emoji}
                </span>

                {/* Main greeting — big, light, letter-spaced */}
                <h1 className="text-white text-5xl sm:text-7xl md:text-8xl font-thin tracking-tight leading-none">
                  {current.text}
                </h1>

                {/* Romanized / English subtitle */}
                <p className="text-white/40 text-sm sm:text-base font-body tracking-[0.2em] uppercase mt-1">
                  {current.sub}
                </p>

                {/* Language badge */}
                <span className="mt-3 px-3 py-1 rounded-full border border-white/10 text-white/25 text-[10px] font-body tracking-[0.25em] uppercase bg-white/5 backdrop-blur-sm">
                  {current.lang}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Animated progress dots */}
            <div className="flex gap-1.5 mt-10">
              {greetings.map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    width: i === step ? 22 : 5,
                    opacity: i < step ? 0.25 : i === step ? 1 : 0.35,
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="h-[5px] rounded-full bg-white"
                />
              ))}
            </div>
          </div>

          {/* Bottom name credit — Apple style */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 text-white/30 font-body text-[11px] tracking-[0.35em] uppercase"
          >
            Sushil Shrestha
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
