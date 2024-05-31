'use client'

import {useState} from "react";
import {get, post} from "@/utils/request";

export default function Detail( params ){
    const [detail] = useState(params.data)
    const [shownLoading, setShownLoading] = useState(false)

    const showLoading = ()=> {
        setShownLoading(true);
        document.body.classList.add('overflow-y-hidden');
        setTimeout(()=>{
            setShownLoading(false)
            document.body.classList.remove('overflow-y-hidden');
        }, 1000)
    }

    async function likeButton(){
        showLoading()
    }

    async function disLikeButton(){
        showLoading()
    }

    return(
        <>
            <div className={shownLoading ? "fixed inset-0 object-center size-full bg-gray-600 bg-opacity-70 flex justify-center items-center z-10" : "hidden"}>
                <svg className="z-20" viewBox="25 25 50 50" id="loading">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>
            <div className="mt-4 md:px-40 lg:px-60 pb-12">
                <div className="flex justify-between items-center px-4 md:px-0 mb-9">

                    <div className="flex flex-col justify-center items-center bg-white w-40 h-20 rounded-xl cursor-pointer" onClick={likeButton}>
                        <svg className="w-9 h-9 fill-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.2699 16.265L20.9754 12.1852C21.1516 11.1662 20.368 10.2342 19.335 10.2342H14.1539C13.6404 10.2342 13.2494 9.77328 13.3325 9.26598L13.9952 5.22142C14.1028 4.56435 14.0721 3.892 13.9049 3.24752C13.7664 2.71364 13.3545 2.28495 12.8128 2.11093L12.6678 2.06435C12.3404 1.95918 11.9831 1.98365 11.6744 2.13239C11.3347 2.29611 11.0861 2.59473 10.994 2.94989L10.5183 4.78374C10.3669 5.36723 10.1465 5.93045 9.86218 6.46262C9.44683 7.24017 8.80465 7.86246 8.13711 8.43769L6.69838 9.67749C6.29272 10.0271 6.07968 10.5506 6.12584 11.0844L6.93801 20.4771C7.0125 21.3386 7.7328 22 8.59658 22H13.2452C16.7265 22 19.6975 19.5744 20.2699 16.265Z"
                                fill="inherit"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z"
                                fill="inherit"
                            />
                        </svg>
                        <div className="mt-0.5 text-green-500">
                            <span className="-ml-1 mr-0.5">+</span>
                            <span>{detail.reactions.likes}</span>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center bg-white w-40 h-20 rounded-xl cursor-pointer" onClick={disLikeButton}>
                        <svg className="w-9 h-9 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.2699 8.48505L20.9754 12.5648C21.1516 13.5838 20.368 14.5158 19.335 14.5158H14.1539C13.6404 14.5158 13.2494 14.9767 13.3325 15.484L13.9952 19.5286C14.1028 20.1857 14.0721 20.858 13.9049 21.5025C13.7664 22.0364 13.3545 22.465 12.8128 22.6391L12.6678 22.6856C12.3404 22.7908 11.9831 22.7663 11.6744 22.6176C11.3347 22.4539 11.0861 22.1553 10.994 21.8001L10.5183 19.9663C10.3669 19.3828 10.1465 18.8195 9.86218 18.2874C9.44683 17.5098 8.80465 16.8875 8.13711 16.3123L6.69838 15.0725C6.29272 14.7229 6.07968 14.1994 6.12584 13.6656L6.93801 4.27293C7.0125 3.41139 7.7328 2.75 8.59658 2.75H13.2452C16.7265 2.75 19.6975 5.17561 20.2699 8.48505Z"
                                fill="inherit"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2.96767 15.2651C3.36893 15.2824 3.71261 14.9806 3.74721 14.5804L4.71881 3.34389C4.78122 2.6221 4.21268 2 3.48671 2C2.80289 2 2.25 2.55474 2.25 3.23726V14.5158C2.25 14.9174 2.5664 15.2478 2.96767 15.2651Z"
                                fill="inherit"
                            />
                        </svg>
                        <div className="mt-0.5 text-red-600">
                            <span className="-ml-1 mr-0.5">-</span>
                            <span>{detail.reactions.dislikes}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src={detail.image}
                        alt={detail.title}
                        className="rounded-t-2xl"
                    />
                </div>
                <div className="pt-4 px-4 pb-7 md:bg-white rounded-b-2xl">
                    <h1 className="text-slate-800 text-4xl mb-4 font-semibold">{detail.title}</h1>
                    <div className="text-slate-700">{detail.content}</div>
                </div>
            </div>
        </>
    )
}