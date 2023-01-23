import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router'

const SignUpForm = () => {
    const router = useRouter()
    const [getError,setError]= useState();
    const[input,setInput]=useState({
        "firstname":"",
        "laqstname":"",
        "email":"",
        "username":"",
        "password":""
    })  
  
    const handleSubmit = async() => {    
         
           const data = await axios.post('http://localhost:3005/api/signup',input).then((res)=>{
            
            console.log("res",res)
            alert("Sign Up Successfully")
            router.push('/dashboard')
        }).catch((error)=>
        {
        console.log(error?.data?.error)
        setError(error?.data?.error)
 })       
 };


    return (
        <section className=' py-12 px-6 h-full'>
            
            <div className=' flex justify-center items-center flex-wrap h-full g-2 text-black'>
                <div className='block bg-green-100 shadow-lg rounded-lg'>
                    <div className='lg:flex lg:flex-wrap'>
                        <div className='px-2 md:px-0'>
                            <div className='md:p-8 md:mx-4'>
                                <div className='text-center'>
                                    <h4 className='text-xl font-semibold mt-1 mb-4 pb-1'>
                                        <a href="/" className="text-2xl text-violet-900 font-bold">MyBlogSpot<sub className="text-purple-600">.com</sub></a>
                                    </h4>
                                    <p className='mb-2 text-center text-red-600'>
                                        {getError}
                                    </p>
                                </div>
                                <form>
                                    <p className='mb-2 text-center '>
                                        Sign-Up for being a User!
                                    </p>
                                    <div className='mb-2'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='Enter Your First Name...'
                                            name='userFname'
                                            onChange={(e)=>{
                                                setInput({...input,firstname:e.target.value})
                                            }}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='Enter Your Last Name...'
                                            name='userLname'
                                            onChange={(e)=>{
                                                setInput({...input,lastname:e.target.value})
                                               
                                            }}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='Type a username...'
                                            name='username'
                                            onChange={(e)=>{
                                                setInput({...input,username:e.target.value})
                                            }}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <input
                                            type='email'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='Your Email'
                                            name='userEmail'
                                            onChange={(e)=>{
                                                setInput({...input,email:e.target.value})
                                            }}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-gray-200 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='Password'
                                            name='userPassword'
                                            onChange={(e)=>{
                                                setInput({...input,password:e.target.value})
                                            }}
                                        />
                                    </div>
                                    <div className='text-center pt-1 mb-8 pb-1'>
                                        <button
                                            className='bg-green border-2 border-blue-600 inline-block px-6 py-2.5 text-black font-extrabold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                                            type='button'
                                        onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-between pb-4'>
                                        <p className='mb-0 text-black font-bold mr-2'>Already have an account?</p>
                                        <button
                                            type='button'
                                            className='inline-block px-6 py-2 border-2 border-blue-600 text-black font-extrabold text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'

                                        ><Link href="/signin" legacyBehavior>Sign In</Link>

                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SignUpForm;