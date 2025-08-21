'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, HeartIcon, X } from 'lucide-react'
import StoryPage from './StoryPage'
import { TimeCounter } from './TimeCounter'
import { FlipWords } from './ui/flip-words'

export default function MainContent() {
  const audioRef = useRef(null)
  const [musicStarted, setMusicStarted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (musicStarted && audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.4
      audioRef.current.play().catch(() => {})
    }
  }, [musicStarted])

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

  const localImages = [
    "f3e5bd21bbf14dca8bf9a86dd349bbf58902.png",
    "Screenshot_20250807_230455_Photos.jpg",
    "IMG-20250815-WA0009.jpg",
    "IMG-20250815-WA0008.jpg",
    "IMG-20250815-WA0007.jpg",
    "IMG-20250815-WA0006.jpg",
    "IMG-20250815-WA0005.jpg",
    "IMG-20250815-WA0004(1).jpg",
    "IMG-20250806-WA0000.jpg",
  ]

  const pages = [
    // Cover Page
    <StoryPage key="cover" backgroundColor="bg-gradient-to-br from-rose-200 to-purple-200">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-44 h-44 mb-8 rounded-full overflow-hidden shadow-md"
        >
          <Image
            src="/audio/f3e5bd21bbf14dca8bf9a86dd349bbf58902.png"
            alt="Heart icon"
            priority={true}
            width={176}
            height={176}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 relative z-10">
          Our Special Story
        </h1>
        <div className="text-2xl md:text-3xl text-purple-700 mb-8 relative z-10">
          Hey Cutiepie, you are<br />
          my <FlipWords words={['Friend ', 'Bestie ', 'Best Friend  ']} className="text-nowrap" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-pink-600 transition-colors duration-300"
          onClick={() => { nextPage(); setMusicStarted(true); }}
        >
          Open Our Story
        </motion.button>
      </div>
    </StoryPage>,

    // Time Together Page
    <StoryPage key="time" backgroundColor="bg-gradient-to-br from-pink-200 to-purple-200">
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 relative z-10">Our Time Together</h2>
        <div className="w-full max-w-md space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TimeCounter startDate="2008-07-11" label="Kabse Aap meri bahen hai.... " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TimeCounter startDate="2025-08-15" label="As a Best Friend" />
          </motion.div>
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-btn hover:bg-blue-600 transition-colors duration-300"
          onClick={() => setShowVideo(true)}
        >
          Watch your Special Video Dude
        </button>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <HeartIcon className="w-16 h-16 text-rose-500 mx-auto" />
        </motion.div>
        <motion.p
          className="text-lg md:text-xl text-blue-600 mt-5 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Every moment with you is a treasure....!
        </motion.p>
      </div>
    </StoryPage>,

    // Photo Gallery Page
    <StoryPage key="gallery" backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-100">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 relative z-10">
        Some Beautiful Moments – Because Ordinary Toh Tum Kabhi Thi Hi Nahi
      </h2>
      <div className="flex flex-col gap-8 pb-4 overflow-y-auto flex-1 pr-2">

        {/* Group Photo */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2">Group Photo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage("/audio/1723237041535~2.jpg")}
            >
              <Image
                src="/audio/1723237041535~2.jpg"
                alt="Group Photo"
                width={440}
                height={330}
                className="rounded-2xl object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Favourite Photo */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">One of the most Beautiful pics of you</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage("/audio/IMG-20250806-WA0000.jpg")}
            >
              <Image
                src="/audio/IMG-20250806-WA0000.jpg"
                alt="Pookie ladki🥰"
                width={440}
                height={330}
                className="rounded-2xl object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Favourite Photos */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">My Favourite Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {localImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.13 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedImage(`/audio/${img}`)}
              >
                <Image
                  src={`/audio/${img}`}
                  alt={`Favourite Photo ${i + 1}`}
                  width={330}
                  height={330}
                  className="rounded-2xl object-cover h-full w-full"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Voice Memories */}
        <div>
          <h3 className="text-xl font-semibold text-red-600 mb-2">Voice Memories</h3>
          <div className="flex flex-col gap-4">
            <div className="p-4 bg-white shadow-md rounded-2xl">
              <p className="font-medium text-gray-700 mb-2">woow so cutee and melodious..</p>
              <audio controls className="w-full">
                <source src="/audio/AUD-20250817-WA0000.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-2xl p-2 shadow-2xl w-[95vw] max-w-2xl"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected"
                width={800}
                height={600}
                className="w-full rounded-xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StoryPage>,
  ]

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/Malang_Sajna.mp3"
        preload="auto"
        style={{ display: "none" }}
      />
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[78vh] bg-white rounded-3xl shadow-question-card overflow-hidden relative flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute"
            >
              <HeartIcon size={200} className="fill-pink-100 stroke-none" />
            </motion.div>
            <AnimatePresence mode="wait">{pages[currentPage]}</AnimatePresence>
          </div>
        </div>

        {currentPage > 0 && (
          <button
            onClick={prevPage}
            className="fixed left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
          >
            <ChevronLeft className="text-pink-600" />
          </button>
        )}

        {currentPage < pages.length - 1 && (
          <button
            onClick={nextPage}
            className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
          >
            <ChevronRight className="text-pink-600" />
          </button>
        )}
      </div>
    </>
  )
}
