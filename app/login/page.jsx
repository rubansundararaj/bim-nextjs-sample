'use client';
import Head from 'next/head';
import { useState } from 'react';


export default function Login() {

    const [userName, setUserName] = useState("");



    const loginUser = () =>{
        console.log(userName)
    }



    return (
        <>
            <Head>
                <title>Login</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </Head>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-xs p-8 space-y-6 bg-white rounded-lg shadow-md opacity-80 backdrop-blur-sm">
                    <div className="text-center">
                        {/* <Link href="/"> */}
                            <a className="text-2xl font-bold">EXPANSION BIM</a>
                        {/* </Link> */}
                    </div>

                    <form className="space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium">Email</label>
                            <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            type="text" id="email" name="email" required className="w-full p-2 mt-1 border rounded-md"/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-lg font-medium">Password</label>
                            <input type="password" id="password" name="password" required className="w-full p-2 mt-1 border rounded-md"/>
                            <p className="mt-2 text-purple-700 cursor-pointer hover:underline">Forgot password?</p>
                            <p className="text-purple-700 cursor-pointer hover:underline">User Terms / Privacy Policy (GDPR)</p>
                        </div>
                        <button 
                        onClick={() => loginUser()}
                        className="w-full p-2 text-white bg-green-700 rounded-md hover:bg-green-800">Log in</button>
                    </form>

                    <p className="text-center text-purple-900 cursor-pointer hover:underline">
                        Dont have an account?
              
                            <a className="text-green-700"> Sign up</a>
                            
                      
                    </p>
                    <div className="flex justify-center mt-4 text-green-700">
                        <i className="fab fa-google"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
