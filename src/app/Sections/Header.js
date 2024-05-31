'use client'

import Image from 'next/image'
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="px-3 py-8 sm:px-12 xl:px-44">

                <div className="bg-white flex w-full justify-between items-center px-4 xl:px-8 py-4 xl:py-7 rounded-xl xl:rounded-2xl">
                    <div className="w-1/2 flex justify-start xl:hidden">
                        <label className="hamburger">
                            <input type="checkbox"/>
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom"
                                      d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>

                    <div className="w-1/2 flex justify-center items-center xl:justify-start">
                        <Link href="/">
                            <Image
                                src="/images/fox.svg"
                                width={65}
                                height={65}
                                priority={true}
                                alt="Fox web logo"
                            />
                        </Link>

                    </div>
                    
                    <div className="w-1/2 hidden xl:flex">
                        <div className="flex items-center px-4 py-2 bg-gray-200 rounded w-full">
                            <svg className="text-dark-550 mr-3" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.82495" cy="7.82492" r="6.74142" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></circle>
                                <path d="M12.5137 12.8638L15.1568 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                            <input className="bg-transparent outline-none border-none" type="text"/>
                        </div>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <svg className="size-12 cursor-pointer" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 64 64">
                            <g>
                                <circle cx="32" cy="32" r="31" fill="#fff6e6" opacity="1" data-original="#e6ecff" className=""></circle>
                                <g fill="#4294ff">
                                    <path d="M56.877 50.475a31.065 31.065 0 0 0-49.765-.016 30.967 30.967 0 0 0 49.765.016z" fill="#FE936B" opacity="1" data-original="#4294ff" className=""></path>
                                    <circle cx="32" cy="22" r="12" fill="#FE936B" opacity="1" data-original="#4294ff" className=""></circle>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </header>
        </>
    )
}