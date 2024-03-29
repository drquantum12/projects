import Link from 'next/link';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { CiCoffeeCup } from 'react-icons/ci';


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full bg-gray-100">
                <div className="justify-between px-3 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="#">
                                <h2 className="text-2xl text-violet-900 font-bold">MyBlogSpot<sub className="text-purple-600">.com</sub></h2>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center gap-7 space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-black font-bold text:2xl">
                                    <Link href="/" legacyBehavior>
                                        <a>Home</a>
                                    </Link>
                                </li>
                              
                                <li className="text-black font-bold text:2xl">
                                    <Link href="/" legacyBehavior>
                                        <a>Category</a>
                                    </Link>
                                </li>
                                <li className="text-black font-bold text:2xl">
                                    <Link href="/" legacyBehavior>
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li className="shadow-lg bg-purple-600 text-white font-bold text-sm rounded px-3 py-2">
                                    <Link href="/signin" legacyBehavior>
                                        <a className='flex flex-row gap-1'>Sign In</a>
                                    </Link >
                                </li>
                                <li className="shadow-lg bg-purple-600 text-white font-bold text-sm rounded px-3 py-2">
                                    <Link href="/" legacyBehavior>
                                        <a className='flex flex-row gap-1'><CiCoffeeCup />Buy Me A Coffee</a>
                                    </Link >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    );
}

