import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Loader({ onFinish }) {
    const [started, setStarted] = useState(false);
    const audioRef = useRef(null);

    // Button click par ye function chalega
    const handleStart = () => {
        setStarted(true);
        // Sound play
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {});
        }
        // Loader finish karna (1.3 second baad aage badho)
        setTimeout(() => {
            onFinish();
        }, 130); // 1.3s ke liye loader dikhayega
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Sound for loader */}
            <audio
                ref={audioRef}
                src="/audio/instrumental.mp3"
                preload="auto"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
            >
                <Heart className="w-20 h-20 text-pink-500" fill="currentColor" />
            </motion.div>
            <p className="mt-4 text-xl font-medium text-center px-4 text-gradient">
                Take a deep breath, my Friend. A special surprise awaits you...
            </p>
            {/* Button ya Progress */}
            {!started ? (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-btn hover:bg-pink-600 transition-colors duration-300 mt-8"
                    onClick={handleStart}
                >
                    Start
                </motion.button>
            ) : (
                // Loader animation jab button dab chuka
                <div className="w-64 h-2 bg-pink-200 rounded-full mt-6 overflow-hidden">
                    <motion.div
                        className="h-full bg-pink-500"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2 }}
                    />
                </div>
            )}
        </div>
    )
}