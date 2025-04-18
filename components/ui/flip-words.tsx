"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
    words,
    duration = 3000,
    className,
}: {
    words: string[];
    duration?: number;
    className?: string;
}) => {
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const startAnimation = useCallback(() => {
        const word = words[words.indexOf(currentWord) + 1] || words[0];
        setCurrentWord(word);
        setIsAnimating(true);
    }, [currentWord, words]);

    useEffect(() => {
        if (!isAnimating)
            setTimeout(() => {
                startAnimation();
            }, duration);
    }, [isAnimating, duration, startAnimation]);

    return (
        <div className="md:px-24 px-8 text-4xl mt-3 md:mt-20 font-normal text-neutral-600 dark:text-neutral-400 ">
            <div className="text-[#02478E] mr-1 ">
                <span>Hello!!</span> <br />
                <span className="text-white ">I&apos;m </span>
                <span className="text-[#02478E] font-bold text-4xl md:text-6xl">Yogesh Pal</span>
            </div>

            <br />

            <div className="relative w-full  sm:max-w-none">
                <AnimatePresence
                    onExitComplete={() => {
                        setIsAnimating(false);
                    }}
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 10,
                        }}
                        exit={{
                            opacity: 0,
                            y: -40,
                            x: 40,
                            filter: "blur(8px)",
                            scale: 2,
                            position: "absolute",
                        }}
                        className={cn(
                            "z-10 inline-block relative md:text-left text-neutral-600 dark:text-neutral-200 md:px-2",
                            className
                        )}
                        key={currentWord}
                    >
                        {currentWord.split(" ").map((word, wordIndex) => (
                            <motion.span
                                key={word + wordIndex}
                                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{
                                    delay: wordIndex * 0.3,
                                    duration: 0.3,
                                }}
                                className="inline-block whitespace-nowrap"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={word + letterIndex}
                                        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        transition={{
                                            delay: wordIndex * 0.3 + letterIndex * 0.05,
                                            duration: 0.2,
                                        }}
                                        className="inline-block"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </motion.span>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};
