"use client"
import Image from "next/image"
import { PropsWithChildren, useRef } from "react"



type TTSParagraphProps = {
    icon?: string
    src?: string | null
}

export default function TTSParagraph({ src = null, icon = "/speaker.svg", children }: PropsWithChildren<TTSParagraphProps>) {
    const audioRef = useRef<HTMLAudioElement>(null)
    return <div className="grid grid-cols-[auto_1fr] gap-5 mb-5">
        {
            src === null
                ? <div />
                : <div>
                    <Image
                        className="cursor-pointer p-3 bg-green-400 rounded-xl"
                        width={64}
                        height={64}
                        alt="Click to Listen"
                        src={icon}
                        onClick={() => {
                            if (audioRef.current !== null) {
                                if (audioRef.current.paused) {
                                    audioRef.current.currentTime = 0
                                    audioRef.current.play()
                                }
                                else {
                                    audioRef.current.pause()
                                }
                            }
                            else {
                                console.log("HERE")
                            }

                        }}
                    />
                    <audio ref={audioRef}><source src={src} type="audio/wav" />NOT FOUND!</audio>
                </div>
        }
        <p>{children}</p>
    </div>
}