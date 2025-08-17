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
            src=https://i.ibb.co/ZpGRc7zn/x.jpgauto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 relative z-10">Some Beautiful Moments – Because Ordinary Toh Tum Kabhi Thi Hi Nahi</h2>
      <div className="flex flex-col gap-8 pb-4 overflow-y-auto flex-1 pr-2">
        
        {/*  Group Photo */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-2"> Group Photo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage("https://i.ibb.co/FL2qYgMy/x.jpg.jpg")}
            >
              <Image
                src="https://i.ibb.co/FL2qYgMy/x.jpg"
                alt="Group Photo"
                width={440}
                height={330}
                className="rounded-2xl object-cover h-full w-full"
              />
            </motion.div>
          </div>
        </div>
        {/* Science Exhibition Image */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-2">One of the most Beautiful pics of your </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage("https://envs.sh/Qrj.jpg/IMG20250807708.jpg")}
            >
              <Image
                src="https://i.ibb.co/0RJ44mjL/x.jpg
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
            {[
             ""https://envs.sh/Qrj.jpg/IMG20250807708.jpg",
  "https://envs.sh/Qrv.jpg/IMG2025080746.jpg",
  "https://envs.sh/2yu.jpg/IMG202508154.jpg",
  "https://envs.sh/2yF.jpg/IMG20250815775.jpg",
  "https://envs.sh/2yt.jpg/IMG20250815787.jpg",
  "https://envs.sh/2ye.jpg/IMG20250815846.jpg",
  "https://envs.sh/2yi.jpg/IMG20250815411.jpg",
  "https://envs.sh/2yb.jpg/IMG2025081548.jpg",
            ].map((img, i) => (
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
              <p className="font-medium text-gray-700 mb-2">Yaarrr........❤️‍🩹:</p>
              <audio controls className="w-full">
                <source src="/audio/audio_7692124805 (2).mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <div className="p-4 bg-white shadow-md rounded-2xl">
              <p className="font-medium text-gray-700 mb-2">Aaye haye... Yahn mai pighal gya☺️:</p>
              <audio controls className="w-full">
                <source src="/audio/v2m-c8yddJxfZ0Tka.mp3" type="audio/mpeg" />
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

// Our Journey Page
    <StoryPage key="journey" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">Our Journey</h2>
      <div className="space-y-4 flex-1 overflow-y-auto overflow-x-hidden rounded-xl custom-scrollbar">
        {[
          { date: 'December 2025', event: 'Our Journey Began in chats', emoji: '❤️' },
  { date: 'Bahut hoti hai hamariii', event: 'Mastiyaan...', emoji: '🙃' },
  { date: '25 June 2025', event: 'First time street food together — Momos 🍜', emoji: '😋' },
  { date: 'Always', event: 'You’re not just a friend, you’re my sister 🤍', emoji: '👭' },

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

    // Letter page
    <StoryPage key="letter" backgroundColor="bg-gradient-to-br from-blue-200 to-gray-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">A Special Message</h2>
      <div className="bg-white rounded-xl p-6 shadow-md overflow-y-auto flex-1 custom-scrollbar">
        <div className="relative z-10">
          <div className="text-gray-700 text-lg leading-relaxed mb-4">
            <p>🌸💖 Ankita, tum meri life ka ek aisa hissa ban gayi ho jo words me explain karna mushkil hai 🤗. Pehle lagta tha bas ek normal sister ho, par dheere-dheere samajh aaya ki tum toh ek dost,Bestie best friend...jaisi blessing ho 🫶✨. Kabhi hasi-mazak 😆, kabhi choti-moti ladayi 😜, aur kabhi woh long talks jo dil ko sukoon de 🩷… sab kuch special lagta hai jab tum saath ho. Tumhari ek smile hi mood fresh kar deti hai 😍, aur tumhari masti waise hi addictive hai jaise momos ka first bite 😋🥟. Dil se dua karta hoon tum hamesha khush raho 🌈, tumhare saare sapne pure ho ✨🌟 aur zindagi tumhe wohi de jo tum deserve karti ho 💯💝.

Sach bolu toh, tum sister kam aur dost zyada ho 💕👭 aur ye bond meri life ka sabse precious part hai 🥰🌍.


</p>
          </div>
          <p className="text-right text-rose-600 font-semibold">
            From,<br />
            Your Billu😺🩵
          </p>
        </div>
      </div>
    </StoryPage>,

    // Final Page
    <StoryPage key="final" backgroundColor="bg-gradient-to-br from-pink-100 to-blue-200">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-6 relative z-10">Our Story Continues...</h2>
        <p className="text-xl text-blue-700 mb-8 relative z-10">
          Every moment we share is another step in our unforgettable story.
        </p>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-6xl mb-8"
        >
          ❤️
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-rose-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-rose-600 transition-colors duration-300"
          onClick={() => setCurrentPage(0)}
        >
          Start Over
        </motion.button>
      </div>
    </StoryPage>
  ]

  return (
    <>
      {/* Background music, always looping after user clicks "Open Our Story" */}
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