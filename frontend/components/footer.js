import { ImFacebook, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import Link from 'next/link'

export default function footer() {
    return (
        <footer className="p-4 bg-gray-200 sm:p-6">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="/" className="flex items-center">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
                        <h2 className="text-2xl text-violet-900 font-bold">MyBlogSpot<sub className="text-purple-600">.com</sub></h2>
                    </a>
                    <div className="py-2">
                        <p className="text-gray-500">Flow with upcoming trends</p>
                        <div className="flex py-3 gap-10">
                            <Link href={"/"}><ImFacebook /></Link>
                            <Link href={"/"}><ImTwitter /></Link>
                            <Link href={"/"}><ImYoutube /></Link>
                            <Link href={"/"}><ImLinkedin /></Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CATEGORY</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">CSS</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">JavaScript</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Tailwind</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">React JS</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">More Category</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ABOUT ME</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">About Me</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Project</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Achievement</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">GET IN TOUCH</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">+91 9337346614</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">support@nettantra.net</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">FOLLOW US</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Instagram</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">LinkedIn</a>
                            </li>
                            <li className="mb-4">
                                <a href="/" className="hover:underline">You Tube</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 flex justify-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">NetTantra™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 text-gray-500 space-x-6 justify-center sm:mt-0">
                    <h5>Made By Jyotiprakash</h5>
                </div>
            </div>
        </footer>

    )
}