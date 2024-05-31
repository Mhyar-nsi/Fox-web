'use client'

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper/modules";

import {useState} from "react";
import Link from "next/link";

export default function CoinSlider({coins}) {
    const [data] = useState(coins)

    return (
        <Swiper
            loop={true}
            centerInsufficientSlides={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            breakpoints={{
                300: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 0
                },
                820: {
                    slidesPerView: 5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 0
                },
                1280: {
                    slidesPerView: 7,
                    spaceBetween: 90
                },
                1536: {
                    slidesPerView: 8,
                    spaceBetween: 210
                }
            }}
            pagination={{
                clickable: true,
                type: 'custom',
            }}
            autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true
            }}
            modules={[Pagination, Autoplay]}
            className="w-full flex justify-center items-center mt-9"
        >
            {data.map((coin) => (
                <SwiperSlide key={coin.market_cap_rank}>
                    <Link href={"/coins/" + coin.name}>
                        <div
                            className="card bg-slate-950 transition hover:bg-slate-900 flex flex-col justify-center items-center text-white rounded-2xl w-[180px] 2xl:w-[200px] h-[285px]">
                            <div className="anim-img flex justify-center items-center">
                                <img
                                    src={"/logo/" + coin.symbol + ".png"}
                                    width={90}
                                    height={90}
                                    alt={coin.name}
                                    className="rounded-full my-4"
                                />
                            </div>
                            <div className="mt-5">
                                <h2 className="font-semibold text-2xl text-center px-2">
                                    {coin.name.length < 10 ? coin.name : coin.symbol}
                                </h2>
                            </div>
                            <div className="mt-6">
                                <p className="text-lg">{coin.current_price}$</p>
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};