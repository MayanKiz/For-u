import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0)
    const audioRef = useRef(null);

    useEffect(() => {
        // Loader start hote hi sound bajao
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {}); // autoplay policy ke liye error suppress
        }

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => {
                        onFinish();
                    }, 100);
                    return 100
                }
                return prev + 1
            })
        }, 40)
        return () => clearInterval(timer)
    }, [onFinish])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            {/* Sound for loader */}
            <audio
                ref={audioRef}
                src="public/audio/instrumental.mp3"
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
            <div className="w-64 h-2 bg-pink-200 rounded-full mt-4 overflow-hidden">
                <motion.div
                    className="h-full bg-pink-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}