'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper/modules";

import Link from "next/link";
import {useState} from "react";

export default function NewsSlider({ news }) {
    const [data] = useState(news)

    const [slideIsStart, setSlideIsStart] = useState(true)
    const [slideIsEnd, setSlideIsEnd] = useState(false)

    const slideButtonDisplay = (s)=>{
        if(s.isBeginning){
            setSlideIsStart(true);
        }
        if(s.isEnd){
            setSlideIsEnd(true);
        }

        if(!s.isBeginning){
            setSlideIsStart(false)
        }
        if(!s.isEnd){
            setSlideIsEnd(false)
        }
    }

    return (
        <main className="my-12 xl:my-20">
            <Swiper
                centerInsufficientSlides={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    1280:{
                        slidesPerView: 3,
                        spaceBetween: 0,
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                onSlideChange={(s)=> slideButtonDisplay(s)}
                modules={[Pagination, Navigation]}
            >

                {data.map((news) => (
                    <SwiperSlide key={news.id} className="px-3">
                        <Link href={"/news/" + news.slug}>
                            <article className="rounded-2xl bg-white p-3">
                                <div>
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="rounded-xl w-full h-56"
                                    />
                                </div>
                                <div className="mt-4 mb-1 px-2">
                                    <h2 className="text-xl font-bold">{news.title}</h2>
                                </div>
                                <div className="px-2">
                                    <p className="line-clamp-2 text-slate-500 text-sm">{news.content}</p>
                                </div>
                                <div className="px-2 my-2 space-x-3">
                                    <span className="text-xs text-orange-400 font-semibold">bitcoin</span>
                                    <span className="text-xs text-orange-400 font-semibold">xrp</span>
                                </div>
                            </article>
                        </Link>
                    </SwiperSlide>
                ))}

                <div className="flex justify-center items-center mt-8">
                    <div className="swiper-button-prev">
                        <div className={slideIsStart ? "bg-orange-200 rounded-full p-3" : "bg-orange-400 rounded-full p-3 cursor-pointer"}>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.9299H2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.00009 19L2.84009 14C2.5677 13.7429 2.35071 13.433 2.20239 13.0891C2.05407 12.7452 1.97754 12.3745 1.97754 12C1.97754 11.6255 2.05407 11.2548 2.20239 10.9109C2.35071 10.567 2.5677 10.2571 2.84009 10L8.00009 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="swiper-button-next">
                            <div className={slideIsEnd ? "bg-orange-200 rounded-full p-3" : "bg-orange-400 rounded-full p-3 cursor-pointer"}>
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12.0701H22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16 5L21.16 10C21.4324 10.2571 21.6494 10.567 21.7977 10.9109C21.946 11.2548 22.0226 11.6255 22.0226 12C22.0226 12.3745 21.946 12.7452 21.7977 13.0891C21.6494 13.433 21.4324 13.7429 21.16 14L16 19" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Swiper>

        </main>
    )
}