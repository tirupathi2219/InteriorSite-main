import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-[#ab8925] rounded-full pointer-events-none"
            style={{
                x: position.x - 20,
                y: position.y - 20,
            }}
            animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 0.1, ease: 'easeInOut', repeat: Infinity }}
        />
    );
}
