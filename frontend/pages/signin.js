import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
// import {jwt_decode} from 'jwt-decode';


const SignInForm = () => {
    const router = useRouter()
    const [getError,setError]= useState();
    
    const[input,setInput]=useState({
        "username":"",
        "password":""
    }) 
    
    const handleSubmit = async() => {    

           const data = await axios.post('http://localhost:3005/api/signin',input).then((res)=>{           
            console.log("res",res)
            localStorage.setItem('username',res.data.user.username);
            // const token = res.data.token;
            // const decode = jwt_decode(token);
            // console.log(decode,'decode');
            alert("Sign in Successfully")
            router.push('/dashboard')
           }).catch((error)=>
           {
        //    console.log(error?.data?.error)
        console.log(error)
           setError(error?.data?.error)
    })       
    };
   

    return (
        <section className='h-full gradient-form bg-gray-200 md:h-screen'>
            <div className='container py-12 px-6 h-full'>
                <div className=' flex justify-center items-center flex-wrap h-full g-6 text-black'>
                  
                    <div className='block bg-white shadow-lg rounded-lg'>
                        <div className='lg:flex lg:flex-wrap g-0'>
                            <div className='px-4 md:px-0'>
                                <div className='md:p-12 md:mx-6'>
                                    <div className='text-center'>
                                        <h4 className='text-xl font-semibold mt-1 mb-6 pb-1'>
                                            <a href="/" className="text-2xl text-violet-900 font-bold">MyBlogSpot<sub className="text-purple-600">.com</sub></a>
                                        </h4>
                                        <span className='mb-4 text-center text-red-600'>
                                       {getError}
                                        </span>
                                    </div>
                                    <form>
                                        <p className='mb-4 text-center '>
                                            Please SignIn to open your account
                                        </p>
                                        <div className='mb-2'>
                                        <input
                                            type='text'
                                            className='form-control block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                            placeholder='username...'
                                            name='username'
                                            onChange={(e)=>{
                                                setInput({...input,username:e.target.value})
                                                
                                            }}
                                        />
                                    </div>
                                        <div className='mb-4'>
                                            <input
                                                type='text'
                                                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                                placeholder='Password..'
                                                name='userPassword'
                                                onChange={(e)=>{
                                                    setInput({...input,password:e.target.value})
                                                    
                                                }}
                                            />
                                        </div>
                                        <p className='mb-2 text-black font-semibold'>
                                            <Link href="/" legacyBehavior>Forgot password ?</Link>
                                        </p>
                                        <div className='text-center pt-1 mb-12 pb-1'>
                                            <button
                                                className='bg-green border-2  border-green-600 inline-block px-6 py-2.5 font-extrabold text-green-600 text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-300 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                                                type='button'
                                              onClick={handleSubmit}
                                            >
                                                Sign In
                                            </button>
                                        </div>

                                        <div className='flex items-center justify-between pb-6'>
                                            <p className='mb-0 text-black font-bold mr-2'>Don't have an account?</p>
                                            <button
                                                type='button'
                                                className='inline-block px-6 py-2 border-2 border-green-600 font-extrabold text-green-600 text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                                           
                                            ><Link href="/signup" legacyBehavior>Sign Up</Link>

                                            </button>
                                        </div>
                                    </form>
                                </div> </div></div></div></div>                                                             
            </div>       
        </section>
    );
};
export default SignInForm;