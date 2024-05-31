'use client'

import animationData from "/public/animations/hero-fox.json";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function Hero() {

    return (
        <div className="mt-6 sm:flex items-center sm:pl-5 sm:pr-9 xl:pl-32 xl:pr-40">
            <Player
                autoplay
                loop
                src={animationData}
                className="w-[350px] h-[350px] sm:w-[370px] sm:h-[370px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] 2xl:w-[540px] 2xl:h-[540px]"
            />

            <div className="mt-9 px-4 sm:mt-12 xl:mt-24">
                <h3 className="text-5xl sm:text-4xl xl:text-6xl leading-tight xl:leading-[4.3rem] font-bold text-slate-700 text-center">Cryptocurrency Prices by Market Cap</h3>
                <p className="mt-3 sm:mt-5 text-slate-500 xl:text-xl xl:mt-8">FoxWeb provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, FoxWeb tracks community growth, open-source code development, major events and on-chain metrics.</p>
            </div>
        </div>
    )
}