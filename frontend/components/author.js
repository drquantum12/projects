import Image from "next/image"
import Link from "next/link"


export default function author(){
    return(
        <div className="author flex py-5">
                <Image src={"/images/auth1.jpg"} className="rounded-full" alt="author" width={50} height={40}/>
                <div className="flex flex-col justify-center px-4">
                    <Link href={"/"} legacyBehavior><a className="text-md font-bold">Sam Tom</a></Link>
                    <span className="text-sm">jan10,2022 . 3 Min Read</span>
                </div>
        </div>
    )
}
