import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, X } from 'lucide-react'

// Mock StoryPage component
const StoryPage = ({ children, backgroundColor }) => (
  <div className={`w-full h-full ${backgroundColor} p-6 flex flex-col relative overflow-hidden`}>
    {children}
  </div>
)

// Mock TimeCounter component
const TimeCounter = ({ startDate, label }) => {
  const calculateTime = (startDate) => {
    const start = new Date(startDate)
    const now = new Date()
    const diff = now - start
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    
    return { days, hours, minutes }
  }

  const time = calculateTime(startDate)
  
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <p className="text-lg font-medium text-gray-700 mb-3">{label}</p>
      <div className="text-3xl font-bold text-blue-600">
        {time.days} days, {time.hours} hours, {time.minutes} minutes
      </div>
    </div>
  )
}

// Mock FlipWords component
const FlipWords = ({ words, className }) => {
  const [currentWord, setCurrentWord] = useState(0)
  
  useState(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])
  
  return (
    <span className={`text-pink-600 font-bold ${className}`}>
      {words[currentWord]}
    </span>
  )
}

export default function MainContent() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [showVideo, setShowVideo] = useState(false)

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pages.length - 1))
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0))

  const pages = [
    // Cover Page
    <StoryPage key="cover" backgroundColor="bg-gradient-to-br from-rose-200 to-purple-200">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="w-44 h-44 mb-8 rounded-full overflow-hidden shadow-md bg-pink-300 flex items-center justify-center">
          <Heart className="w-24 h-24 text-pink-600 fill-pink-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 relative z-10">
          Our Special Story
        </h1>
        <div className="text-2xl md:text-3xl text-purple-700 mb-8 relative z-10">
          Hey Cutiepie, you are<br />
          my <FlipWords words={['Friend ', 'Soulmate ', 'Bestie ', 'Best Friend ', 'Everything ']} className="text-nowrap" />
        </div>
        <button
          className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-pink-600 transition-colors duration-300 hover:scale-105 transform"
          onClick={nextPage}
        >
          Open Our Story
        </button>
      </div>
    </StoryPage>,

    // Our Journey Page
    <StoryPage key="journey" backgroundColor="bg-gradient-to-br from-blue-200 to-green-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">Our Journey</h2>
      <div className="space-y-4 flex-1 overflow-y-auto pr-2" style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}>
        {[
          { date: 'September, 2023', event: 'Our Journey Began', emoji: '❤️' },
          { date: '3 September, 2023', event: 'First day we talked', emoji: '💬' },
          { date: 'Dance Event on Teachers Day', event: 'First Topic of Conversation', emoji: '🤔' },
          { date: 'Science Exhibition', event: 'Favorite time spent with you', emoji: '💝' },
          { date: '5 Jan sharp 12 AM on My Day', event: 'Phli wish tumhri thii', emoji: '🎂' },
          { date: '5 January, 2025', event: 'First Trip Together', emoji: '🛺' },
          { date: 'Many times', event: ' Fights', emoji: '😅' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow-md"
          >
            <span className="text-3xl">{item.emoji}</span>
            <div className='relative z-10'>
              <p className="font-medium text-gray-800">{item.event}</p>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </StoryPage>,

    // Time Together Page
    <StoryPage key="time" backgroundColor="bg-gradient-to-br from-pink-200 to-purple-200">
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 relative z-10">Our Time Together</h2>
        <div className="w-full max-w-md space-y-8">
          <TimeCounter startDate="2023-05-06" label="The first time I saw you Madam jii.... " />
          <TimeCounter startDate="2025-01-14" label="As a Best Friend" />
        </div>
        <button
          className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 hover:scale-105 transform"
          onClick={() => setShowVideo(true)}
        >
          Watch Our Special Video
        </button>
        <div className="mt-6">
          <Heart className="w-16 h-16 text-rose-500 mx-auto fill-rose-500" />
        </div>
        <p className="text-lg md:text-xl text-blue-600 mt-5 relative z-10">
          Every moment with you is a treasure....Dude....𖹭.....!
        </p>
      </div>
    </StoryPage>,

    // Photo Gallery Page
    <StoryPage key="gallery" backgroundColor="bg-gradient-to-br from-blue-50 to-cyan-100">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 relative z-10">Photo Gallery</h2>
      <div className="flex-1 overflow-y-auto pr-2" style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}>
        <div className="flex flex-col gap-8 pb-4">
          {/* Scribbled Day */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600 mb-4">Scribbled Day</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md bg-pink-200 cursor-pointer hover:scale-105 transform transition-transform duration-300"
                  onClick={() => setSelectedImage(`scribbled-${i}`)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Photo */}
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">Class Group Photo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md bg-green-200 cursor-pointer hover:scale-105 transform transition-transform duration-300"
                onClick={() => setSelectedImage('group-photo')}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-6xl">👥</span>
                </div>
              </div>
            </div>
          </div>

          {/* Science Exhibition */}
          <div>
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Science Exhibition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer bg-blue-200 hover:scale-105 transform transition-transform duration-300"
                onClick={() => setSelectedImage("scienceExhibition")}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl block mb-2">🔬</span>
                    <span className="text-white text-3xl font-bold bg-black bg-opacity-50 px-3 py-1 rounded">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Favourite Photos */}
          <div>
            <h3 className="text-xl font-semibold text-purple-600 mb-4">My Favourite Photos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md bg-purple-200 cursor-pointer hover:scale-105 transform transition-transform duration-300"
                  onClick={() => setSelectedImage(`favourite-${i}`)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">💖</span>
                  </div>
                </div>
              ))}
              {/* Video in favourite section */}
              <div
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md cursor-pointer bg-purple-300 hover:scale-105 transform transition-transform duration-300"
                onClick={() => setSelectedImage("favVideo")}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-4xl block mb-2">🎬</span>
                    <span className="text-white text-2xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoryPage>,

    // Letter page
    <StoryPage key="letter" backgroundColor="bg-gradient-to-br from-blue-200 to-gray-200">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 relative z-10">A Special Message</h2>
      <div className="bg-white rounded-xl p-6 shadow-md overflow-y-auto flex-1" style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}>
        <div className="relative z-10">
          <div className="text-gray-700 text-lg leading-relaxed mb-4">
            <p>From the very first moment our paths crossed, life has felt more beautiful, more exciting, and more meaningful. Every smile, every conversation, and every memory we've shared has built a story so precious that no words can truly capture it. I feel incredibly grateful to have someone like you by my side, someone who understands me without even saying a word, someone who brings light even on the darkest days. Through ups and downs, laughter and tears, you've been a constant source of strength and happiness. As we continue to write our journey together, I want you to always remember that you are deeply cherished, endlessly appreciated, and truly loved. Here's to the countless memories we've yet to create and the beautiful future that awaits us. You are, and always will be, my favorite part of every day. 💖</p>
          </div>
          <p className="text-right text-rose-600 font-semibold">
            Forever yours,<br />
            Your Billu😺❤️
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
        <div className="text-6xl mb-8 animate-pulse">
          ❤️
        </div>
        <button
          className="bg-rose-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-rose-600 transition-colors duration-300 hover:scale-105 transform"
          onClick={() => setCurrentPage(0)}
        >
          Start Over
        </button>
      </div>
    </StoryPage>
  ]

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl h-[78vh] bg-white rounded-3xl shadow-2xl overflow-hidden relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <Heart size={200} className='fill-pink-100 stroke-pink-300' />
          </div>
          <div className="relative z-10 w-full h-full">
            {pages[currentPage]}
          </div>
        </div>
      </div>

      {currentPage > 0 && (
        <button
          onClick={prevPage}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 z-40 hover:scale-110"
        >
          <ChevronLeft className="text-pink-600" />
        </button>
      )}

      {currentPage < pages.length - 1 && (
        <button
          onClick={nextPage}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 z-40 hover:scale-110"
        >
          <ChevronRight className="text-pink-600" />
        </button>
      )}

      {/* IMAGE MODAL */}
      {selectedImage && !selectedImage.includes("Video") && !selectedImage.includes("Exhibition") && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-50"
          >
            <X className="text-pink-500" />
          </button>

          <div
            className="bg-white p-6 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto"
            style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-8xl">📸</span>
            </div>
            <p className="text-center text-gray-700 text-lg font-medium">Beautiful Memory - {selectedImage}</p>
          </div>
        </div>
      )}

      {/* VIDEO MODAL for Science Exhibition or Fav Video */}
      {(selectedImage === "favVideo" || selectedImage === "scienceExhibition") && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-50"
          >
            <X className="text-pink-500" />
          </button>
          
          <div
            className="bg-white rounded-2xl p-4 shadow-2xl w-[95vw] max-w-2xl max-h-[90vh] overflow-auto"
            style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center">
                <span className="text-8xl block mb-4">🎬</span>
                <p className="text-2xl font-bold text-gray-700">Video Player</p>
                <p className="text-gray-600">Click to play video</p>
              </div>
            </div>
            <div className="text-center text-blue-600 font-semibold text-lg">
              {selectedImage === "scienceExhibition" ? "Science Exhibition" : "Favourite Video"}
            </div>
          </div>
        </div>
      )}

      {/* SPECIAL VIDEO MODAL */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setShowVideo(false)}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors duration-300 z-50"
          >
            <X className="text-pink-500" />
          </button>
          
          <div
            className="relative bg-white rounded-2xl p-6 shadow-2xl w-[95vw] max-w-xl max-h-[90vh] overflow-auto"
            style={{scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9'}}
            onClick={e => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <span className="text-8xl block mb-4">💝</span>
                <p className="text-2xl font-bold text-gray-700">Our Special Video</p>
                <p className="text-gray-600">A collection of beautiful moments</p>
              </div>
            </div>
            <div className="text-center text-lg font-medium text-blue-700">
              ❤️‍🩹
            </div>
          </div>
        </div>
      )}
    </div>
  )
}