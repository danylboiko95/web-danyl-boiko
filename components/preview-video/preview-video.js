import { Box } from '@chakra-ui/react'

import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react';

const videoSrc = './videos/alien-video.MOV'

const topVideoTransform = 90
const topTextTransfrom = 25
const textTip = 'Scroll me'
const PreviewVideo = ({ setPercent, percent }) => {
    const [text, setText] = useState(null);

    const [isTextHidden, setIsTextHidden] = useState(false);

    const videoRef = useRef()

    const setAnimation = useCallback((percent, fromTime, toTime, isTextHidden = true, text) => {
        if (percent > fromTime && percent < toTime) {
            setIsTextHidden(isTextHidden)
            setText(text)
        }
    }, [])

    useEffect(() => {
        setInterval(() => {
            if (typeof window !== "undefined") {
                const h = document.documentElement,
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';

                const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
                if (videoRef && videoRef.current) {

                    videoRef.current.currentTime = 0.01
                }
                if (videoRef && videoRef.current && percent) {
                    const seconds = videoRef.current.duration % 60
                    setPercent(percent)
                    const currentTime = ((seconds * percent) / 100).toFixed(2)
                    console.log(currentTime, 'currentTime')
                    videoRef.current.currentTime = currentTime
                    setAnimation(percent, 0, 3, true)
                    setAnimation(percent, 3, 12, false, 'Oo, someone from Earth!')
                    setAnimation(percent, 12, 18, true)
                    setAnimation(percent, 18, 48, false, "You've found a developer we've been following for a long time 😈")
                    setAnimation(percent, 48, 52, true)
                    setAnimation(percent, 56, 72, false, "But for now, we have no plans to kidnap him")
                    setAnimation(percent, 72, 76, true)
                    setAnimation(percent, 76, 99, false, "So for now, you can check out his CV😊")
                }
            }
        }, 33.7);
    }, [])

    return (<>
        <Box height='4000' />
        <Box
            css={{
                position: 'fixed',
                zIndex: '999',
                background: '#000000',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                top: percent >= topVideoTransform
                    ? `-${(((percent - topVideoTransform) * 100 / (100 - topVideoTransform))).toFixed(2)}%`
                    : '0',
                left: 0,
            }}>
            {!text
                ? (
                    <motion.div
                        initial={{ opacity: 0, }}
                        transition={{ repeat: Infinity,
                            repeatType: "reverse",
                            duration: 2,
                            delay: 2
                          }}
                        animate={{ opacity: 1, }}
                        exit={{ opacity: 0, }}

                        style={{
                            color: "white",
                            position: "fixed",
                            top: '5%',
                            zIndex: 9999999,
                        }}
                    >
                        {textTip}
                    </motion.div>
                ) : (<AnimatePresence>
                    {!isTextHidden && <motion.div
                        initial={{ opacity: 0, y: '200%' }}
                        transition={{ duration: 0.4, type: 'easeInOut', }}
                        animate={{ opacity: 1, y: '0%' }}
                        exit={{ opacity: 0, y: '-200%' }}
                        style={{
                            color: "white",
                            position: "fixed",
                            top: percent >= 80
                                ? `${topTextTransfrom - (((percent - 80) * 100
                                    / (100 - 80))).toFixed(2)}%`
                                : `${topTextTransfrom}%`,
                            zIndex: 9999999,
                            backgroundColor: "#02D948",
                            padding: "6px 10px",
                            borderRadius: "10px",
                        }}
                    >
                        {text}
                    </motion.div>}
                </AnimatePresence>)
            }
            <video
                ref={videoRef}
                muted
                autoPlay={true}
                loop
                // poster="./images/preview.png"
                style={{
                    top: percent >= 80
                        ? `${50 - (((percent - 80) * 100 / (100 - 80))).toFixed(2)}%`
                        : '50%',
                }}
            >
                <source
                    src={videoSrc}
                    type="video/mp4"
                />
            </video>
        </Box>
    </>)
}

export default PreviewVideo;