import Link from 'next/link';
import Image from "next/image"
import Author from "../components/author"
import { useEffect, useState } from "react"
import axios from 'axios'
import input from '../pages/signin';


export default function section2() {
    const [blogs,setBlogs] = useState([])
    const[comment,setComment] = useState({
        "username":"",
        "text":""
    });
    const [commentText,setcommentText] = useState('');

    const fetchBlogs = async () => {

        const blog = await axios.get('http://localhost:3005/api/blogs').then((res) => {
        //   console.log(res.data)

        setBlogs(res.data)

        console.log(blogs)
       
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        fetchBlogs()
    }, [])
    const handleComment = async(objectId)=>{
        comment.username = localStorage.getItem("username");
        comment.text = commentText;
        const data = await axios.post('http://localhost:3005/api/comment/'+objectId,comment);
        // console.log(comment)
    }

    return (
        <section className="container mx-auto pl-20 pr-20 py-6">
            <div className='text-justify py-10 grid grid-cols-2 sm:grid-cols-2'>
                <Link href={"/"} legacyBehavior><a className="font-extrabold text-left">Latest Article
                </a></Link>
                <Link href={"/"} legacyBehavior><a className="font-extrabold text-right">See All Article </a></Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {
               blogs.map((post) => {
                  
                return (
                    <div className="items bg-gray-200">
                                              
                        <div className="images">
                            {/* <Link href={"/"} legacyBehavior><Image src={post.image} className="rounded-lg" alt="blog image" width={300} height={300} /></Link> */}
                        </div>
                      
                        <div className="info flex justify-center flex-col py-4">
                            <Link href={"/"} legacyBehavior>
                                <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.title}</p>
                                </Link>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                            <Link href={'/'} legacyBehavior>
                                <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.description}</p>
                                </Link>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                            <p className="text-1xl md:text-1xl font-bold hover:text-gray-600">
                                    {post.comments.map((com)=><p>{com}</p>)}</p>
                        </div>
                        <div className="info flex justify-center flex-col py-4">
                           
                                <textarea placeholder="post comment" className="bg-gray-100 border-2 border-black rounded-lg text-1xl md:text-1xl font-bold hover:text-gray-600"
                                value={commentText} onChange={e=>{setcommentText(e.currentTarget.value);}}>
                                   </textarea>
                                   <button
                                  type='button'
                                 className='inline-block w-10 py-2 border-2 border-green-600 font-extrabold text-green-600 text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'   
                                 onClick={() => handleComment(post._id)}        
                                   >Post
                               </button>
                        </div>

                        <Author />
                    </div>
                )
                })
                }
          
                {/* {Post2()}
                {Post3()}
                {Post4()} */}
            </div>
            <div className='flex justify-center py-8'>
                <button className="w-30 px-3 py-2 ml-2 border border-state-300
                    text-sm shadow-sm palceholder-slate-500 bg-purple-600 text-white font-bold rounded">More Article</button>
            </div>
        </section>
    )
}

// function Post({blogs}) {
   
// }

// function Post2() {
//     return (
//         <div className="items">
//             <div className="images">
//                 <Link href={"/"} legacyBehavior><Image src={"/images/img2.jpg"} className="rounded-lg" alt="plant image" width={300} height={300} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col py-4">
//                 <Link href={"/"} legacyBehavior><p className="text-1xl md:text-1xl font-bold hover:text-gray-600">First Month Of Learning Reactjs</p></Link>
//             </div>
//             <Author />
//         </div>
//     )
// }
// function Post3() {
//     return (
//         <div className="items">
//             <div className="images">
//                 <Link href={"/"} legacyBehavior><Image src={"/images/img3.jpg"} className="rounded-lg" alt="plant image" width={300} height={300} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col py-4">
//                 <Link href={"/"} legacyBehavior><p className="text-1xl md:text-1xl font-bold hover:text-gray-600">First Month Of Learning Reactjs</p></Link>
//             </div>
//             <Author />
//         </div>
//     )
// }
// function Post4() {
//     return (
//         <div className="items">
//             <div className="images">
//                 <Link href={"/"} legacyBehavior><Image src={"/images/img4.jpg"} className="rounded-lg" alt="plant image" width={300} height={300} /></Link>
//             </div>
//             <div className="info flex justify-center flex-col py-4">
//                 <Link href={"/"} legacyBehavior><p className="text-1xl md:text-1xl font-bold hover:text-gray-600">First Month Of Learning Reactjs</p></Link>
//             </div>
//             <Author />
//         </div>
//     )
// }