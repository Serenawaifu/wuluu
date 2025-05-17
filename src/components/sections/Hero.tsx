'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <div className="relative h-[110vh] w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/90 to-neutral-900" />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-audiowide mb-8 text-5xl md:text-7xl">
            Explore the <span className="text-primary">Animeverse</span>
          </h1>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="xl" className="text-lg">
              Start Journey
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
