
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimationWrapper = ({ children, yValue, scale, duration = 1, delay = 1 }) => {
    const squareVariants = {
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration } },
        hidden: { opacity: 0, y: yValue ? yValue : '150px', scale: scale ? scale : 0.9 }
    };

    const [ref, inView] = useInView();
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={squareVariants}
            animate={controls}
            transition={{ type: 'easeInOut', delay }}
        >
            {children}
        </motion.div>)
}

export default AnimationWrapper