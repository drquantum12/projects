import Image from "next/image"

export default function section3() {
    return (
        <section className="py-5 bg-gray-100 pl-3 pr-3">
            <div className="container flex justify-center">
                <Image src={"/images/mailbox.jpeg"} className="rounded-full" alt="author" width={70} height={70} />
            </div>
            <div className="flex justify-center font-extrabold py-2">
                <h5 className="text-2xl">Subscribe For The Lastest Updates</h5>
            </div>
            <div className="flex justify-center text-gray-500">
                <h5 className="text-sm ">Subscribe to newsletter and never miss the post every week</h5>
            </div>
            <div className=" flex justify-center py-6 h-20  ">
                    <div>
                        <input type="text" className=" w-70 px-3 py-2 bg-white border border-state-300
                    text-sm shadow-sm palceholder-slate-500" placeholder="enter your email here" />
                    </div>
                    <div>
                        <button className="w-30 px-3 py-2 ml-2 border border-state-300
                    text-sm shadow-sm palceholder-slate-500 bg-purple-600 text-white font-bold  rounded">Subscribe</button>
                    </div>
                </div>
        </section>
    )
}