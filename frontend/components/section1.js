import Image from "next/image"
import Link from "next/link"

export default function section1() {
    return (
        <section className="py-16 bg-gray-200  pl-2 pr-1">
            <div className="container mx-auto md:px-20">
                
                {Slide()}
            </div>
        </section>
    )
}

function Slide() {
    return (
        <div className="grid md:grid-cols-2 bg-gray-200">

            <div className="info flex justify-center flex-col">
               
                <div className="title">
                    <Link href={"/"}><p className="text-6xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Hi, I'm Jack Front End Dev</p></Link>
                </div>
                <p className="text-gray-500 py-3">
                    Communities that contribute least to climate change often suffer the greatest impacts. TWP deploys
                    resources to keep them resilient.
                </p>
                <div className=" flex h-20 py-3 ">
                    <div>
                        <input type="text" className=" w-60 px-3 py-2 bg-white border border-state-300
                    text-sm shadow-sm palceholder-slate-500" placeholder="enter your email here" />
                    </div>
                    <div>
                        <button className="w-30 px-3 py-2 ml-2 border border-state-300
                    text-sm shadow-sm palceholder-slate-500 bg-purple-600 text-white font-bold  rounded">Subscribe</button>
                    </div>
                </div>
               
            </div>
            <div className="image">
                <Link href={"/"}><Image src={"/images/vav.png"} alt="plant image" width={500} height={400} /></Link>
            </div>
        </div>
    )
}