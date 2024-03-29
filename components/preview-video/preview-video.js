import { Box } from "@chakra-ui/react";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { IoCaretForwardOutline } from "react-icons/io5";

const videoSrc = "./videos/alien.MOV";

const topVideoTransform = 90;
const textTip = "Scroll me";
const link = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.MEASUREMENT_ID}&api_secret=${process.env.API_SECRET}`;

const PreviewVideo = ({ setPercent, percent, setIsSkip }) => {
  const [text, setText] = useState(null);

  const topTextTransfrom = 20;
  const [isTextHidden, setIsTextHidden] = useState(false);

  const videoRef = useRef();

  const setAnimation = useCallback(
    (percent, fromTime, toTime, isTextHidden = true, text) => {
      if (percent > fromTime && percent < toTime) {
        setIsTextHidden(isTextHidden);
        setText(text);
      }
    },
    []
  );

  useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        const h = document.documentElement,
          b = document.body,
          st = "scrollTop",
          sh = "scrollHeight";

        const percent =
          ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
        if (videoRef && videoRef.current) {
          videoRef.current.currentTime = 0.01;
        }
        if (videoRef && videoRef.current && percent) {
          const seconds = videoRef.current.duration % 60;
          setPercent(percent);
          const currentTime = ((seconds * percent) / 100).toFixed(2);

          videoRef.current.currentTime = currentTime;
          setAnimation(percent, 0, 7, true);
          setAnimation(percent, 7, 17, false, "Oo, someone from Earth! 🌍");
          setAnimation(percent, 17, 23, true);
          setAnimation(
            percent,
            23,
            44,
            false,
            "You've found a developer we've been following for a long time 😈"
          );
          setAnimation(percent, 44, 48, true);
          setAnimation(
            percent,
            48,
            59,
            false,
            "But for now, we have no plans to kidnap Danyl 😇"
          );
          setAnimation(percent, 59, 64, true);
          setAnimation(
            percent,
            64,
            99,
            false,
            "So you can look at his CV and contact him 😊"
          );
        }
      }
    }, 33.7);
  }, []);

  return (
    <>
      <Box height="7500" />
      <Box
        css={{
          position: "fixed",
          zIndex: "999",
          background: "#000000",
          height: "0vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top:
            percent >= topVideoTransform
              ? `-${(
                  ((percent - topVideoTransform) * 100) /
                  (100 - topVideoTransform)
                ).toFixed(2)}%`
              : "0",
          left: 0,
        }}
      >
        {!text && (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              delay: 2,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              color: "white",
              position: "fixed",
              top: "5%",
              zIndex: 9999999,
            }}
          >
            {textTip}
          </motion.div>
        )}
        <AnimatePresence>
          {text && !isTextHidden && (
            <motion.div
              className="text-preview"
              initial={{ opacity: 0, y: "200%" }}
              transition={{ duration: 0.4, type: "easeInOut" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-200%" }}
              style={{
                color: "white",
                position: "fixed",
                top:
                  percent >= 100 - topTextTransfrom
                    ? `${
                        topTextTransfrom -
                        (
                          ((percent - (100 - topTextTransfrom)) * 100) /
                          (100 - (100 - topTextTransfrom))
                        ).toFixed(2)
                      }%`
                    : `${topTextTransfrom}%`,
                zIndex: 9999999,
                backgroundColor: "#2997ff",
                padding: "6px 10px",
                borderRadius: "10px",
                margin: "0 40px",
              }}
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
        <video
          ref={videoRef}
          muted
          autoPlay={true}
          loop
          style={{
            top:
              percent >= 100 - topTextTransfrom
                ? `${
                    50 -
                    (
                      ((percent - (100 - topTextTransfrom)) * 100) /
                      (100 - (100 - topTextTransfrom))
                    ).toFixed(2)
                  }%`
                : "50%",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <Box
          opacity={0.8}
          display={"flex"}
          alignItems="center"
          cursor="pointer"
          onClick={() => {
            setIsSkip(true);
          }}
          position="fixed"
          bottom="10%"
          fontSize={12}
        >
          You can skip me
          <IoCaretForwardOutline />
        </Box>
      </Box>
    </>
  );
};

export default PreviewVideo;
