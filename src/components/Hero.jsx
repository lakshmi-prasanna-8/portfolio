import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiVolumeUp, HiVolumeOff } from 'react-icons/hi'

export default function Hero() {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef(null)
  useEffect(() => { videoRef.current?.play().catch(() => {}) }, [])
  const toggleSound = () => { const v=videoRef.current; if(!v)return; v.muted=!v.muted; setMuted(v.muted); v.play().catch(()=>{}) }
  return <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
    <div className="absolute inset-0"><video ref={videoRef} src={`${import.meta.env.BASE_URL}intro.mp4`} autoPlay loop muted controls className="w-[115%] h-[119%] -ml-[6%] -mt-[6%] object-cover object-top"/><div className="absolute inset-0 bg-black/35"/></div>
    <button onClick={toggleSound} aria-label={muted?'Unmute video':'Mute video'} className="absolute top-24 right-6 md:right-10 z-20 flex items-center gap-2 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-4 py-2 text-white text-sm">{muted?<HiVolumeOff/>:<HiVolumeUp/>}<span className="font-mono-wide uppercase text-[10px]">{muted?'Tap for sound':'Sound on'}</span></button>
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20"><div className="max-w-3xl">
      <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="font-mono-wide uppercase text-xs text-brandRed mb-4">AI / ML Engineer · Generative AI · LLMs · RAG · MLOps</motion.p>
      <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="font-display font-extrabold text-white leading-[1.02] text-5xl sm:text-6xl md:text-7xl">Hi, I'm Lakshmi Prasanna<br/><span className="text-stroke">AI/ML Engineer</span></motion.h1>
      <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="mt-6 text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">I architect and deploy production-scale machine learning and Generative AI systems, with deep focus on LLMs, Retrieval-Augmented Generation, Kubernetes-native model serving, and MLOps for enterprise environments.</motion.p>
      <div className="mt-9 flex flex-wrap gap-4"><a href="#projects" className="rounded-full bg-white text-black font-semibold px-7 py-3 text-sm">View Projects</a><a href="#experience" className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white">Experience</a><a href="#contact" className="rounded-full border border-brandRed/70 px-7 py-3 text-sm font-semibold text-white">Contact Me</a></div>
    </div></div>
  </section>
}
