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
            src="https://images.pexels.com/photos/371285/pexels-photo-371285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
          my <FlipWords words={['Friend ', 'Soulmate ', 'Bestie ', 'Best Friend ', 'Everything ']} className="text-nowrap" />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-pink-600 transition-colors duration-300"
          onClick={() => { nextPage(); setMusicStarted(true); }} // <-- Yeh important hai
        >
          Open Our Story
        </motion.button>
      </div>
    </StoryPage>,

    // ...baaki pages aapke code jaise hi (yahan se neeche waale pages same rakhne hain, koi change ki zarurat nahi)
    // ---START COPY FROM HERE---
    // Our Journey Page
    <StoryPage key="journey" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">Our Journey</h2>
      <div className="space-y-4 flex-1 overflow-y-auto overflow-x-hidden rounded-xl custom-scrollbar">
        {[
          { date: 'September, 2023', event: 'Our Journey Began', emoji: '❤️' },
          { date: '3 September, 2023', event: 'First day we talked', emoji: '💬' },
          { date: 'Dance Event on Teachers Day', event: 'First Topic of Conversation', emoji: '🤔' },
          { date: 'Science Exhibition', event: 'Favorite time spent with you', emoji: '💝' },
          { date: '5 Jan sharp 12 AM on My Day', event: 'Phli wish tumhri thii', emoji: '🎂' },
          { date: '5 January, 2025', event: 'First Trip Together', emoji: '🛺' },
          { date: 'Many times', event: ' Fights', emoji: '😅' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
          >
            <span className="text-3xl">{item.emoji}</span>
            <div className='relative z-10'>
              <p className="font-medium text-gray-800">{item.event}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </motion.div>
        ))}
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
            <TimeCounter startDate="2023-05-06" label="The first time I saw you Madam jii.... " />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TimeCounter startDate="2025-01-14" label="As a Best Friend" />
          </motion.div>
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-btn hover:bg-blue-600 transition-colors duration-300"
          onClick={() => setShowVideo(true)}
        >
          Watch Our Special Video
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
          Every moment with you is a treasure....Dude....𖹭.....!
        </motion.p>
      </div>
    </StoryPage>,

    // Photo Gallery Page
    // ...yahan se aapka gallery, letter, final page, IMAGE MODAL, etc. -- koi change nahi, as it is paste karen
    // ---END COPY---
    // ...baaki pages same as your code above
    // (Aapka pura pages array yahan paste karen)
  ]

  return (
    <>
      {/* Background music, always looping after user clicks "Open Our Story" */}
      <audio
        ref={audioRef}
        src="/audio/instrumental.mp3"
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
              <HeartIcon size={200} className='fill-pink-100 stroke-none' />
            </motion.div>
            <AnimatePresence mode="wait">
              {pages[currentPage]}
            </AnimatePresence>
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

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed left-1/2 top-4 transform -translate-x-1/2 p-3 bg-white/50 rounded-full shadow-md hover:bg-white transition-colors duration-300 z-40"
            >
              <X className="text-pink-500" />
            </button>

            <motion.div
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-pink-50 p-4 rounded-3xl shadow-2xl max-w-fit w-full h-max overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`https://imag823/pexels-photo-1759823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
                alt={`Gallery image ${selectedImage}`}
                width={300}
                height={250}
                className="rounded-2xl w-auto h-auto"
              />
              <p className="mt-4 text-center text-gray-700">Moment {selectedImage}</p>
            </motion.div>
          </motion.div>
        )}

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {showVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              onClick={() => setShowVideo(false)}
            >
              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative bg-white rounded-2xl p-4 shadow-2xl w-[95vw] max-w-xl"
                onClick={e => e.stopPropagation()}
              >
                <video
                  src="/audio/lv_7340057311542578438_20250508141937.mp4"
                  controls
                  autoPlay
                  className="w-full rounded-lg"
                  onEnded={() => setShowVideo(false)}
                />
                <div className="mt-4 text-center text-lg font-medium text-blue-700">
                  ❤️‍🩹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}