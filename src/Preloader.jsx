import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [phase, setPhase] = useState('fill') // fill -> hold -> exit -> done
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 1600)
    const t2 = setTimeout(() => setPhase('exit'), 2200)
    const t3 = setTimeout(() => setVisible(false), 3000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-brandRed"
          style={{ zIndex: 100000 }}
          initial={{ y: 0 }}
          animate={{ y: phase === 'exit' ? '-100%' : 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="relative"
            animate={
              phase === 'exit'
                ? { scale: 0.85, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Background dark text */}
            <span
              className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl select-none"
              style={{ color: 'rgba(0,0,0,0.25)', letterSpacing: '-0.04em' }}
            >
              Lakshmi
            </span>
            {/* Foreground white water-fill text */}
            <motion.span
              className="absolute inset-0 font-display font-extrabold text-5xl sm:text-7xl md:text-8xl select-none text-white"
              style={{ letterSpacing: '-0.04em' }}
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            >
              Lakshmi
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
