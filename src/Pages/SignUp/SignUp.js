import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <header className="mt-20 px-28">
                        <div className="flex gap-x-[0.625rem] items-center">

<img
src="./images/bluelogo.svg"
alt="Logo"
className=" ml-12"
/>
<p className=" font-inter font-[700] text-[1rem] leading-[1.20rem] text-#100A42">
HelpMeOut
</p>


</div>
      </header>

            <section className="grid place-items-center gap-8">
                <div className="mt-12 font-inter">
                    <h1 className="text-center text-[2rem] font-bold text-headings tracking-[0.02rem] leading-[3rem] mb-2">
                        Log in or Sign up
                    </h1>
                    <p className="text-center text-[0.875rem] font-light tracking-[0.00875rem] leading-[1.3125] text-[#434343] max-w-xs">
                        Join millions of others in sharing successful moves on{" "}
                        {""}
                        <span className="font-normal text-headings">
                            HelpMeOut
                        </span>
                        .
                    </p>
                </div>
                <div className="flex flex-col gap-6 text-headings text-base font-inter font-medium tracking-[0.01rem]">
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[8rem] rounded-xl">
                        <img src='./images/google.png' alt="google" />
                        Continue with Google
                    </button>
                    <button className="inline-flex gap-4 py-[0.56rem] border border-headings px-[8rem] rounded-xl">
                        <img src='./images/facebook.png' alt="facebook" />
                        Continue with Facebook
                    </button>
                </div>
<div class="relative w-1/4 flex  items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">or</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div>


                <form action="">               
                 <div className="flex flex-col gap-4 text-headings text-base font-inter font-medium tracking-[0.01rem]">
                    <div>
                        <label>Email</label>
                    </div>
                    <input type='email' placeholder='Enter your email address' className=" py-[0.56rem] border border-headings px-[8rem] rounded-xl text-left"/>

                    <div>
                        <label>Password</label>
                    </div>
                    <input type='password' placeholder='Enter your password' className=" py-[0.56rem] border border-headings px-[8rem] rounded-xl text-left"/>
                    <Link to='/recordedvideo ' className=" bg-[#120B48] text-center text-white py-[0.56rem] border border-headings px-[8rem] rounded-xl">
                    <button >
                        Sign up
                    </button>
                    </Link>
                </div>

                </form>
            </section>
        </>
    );
};

export default SignUp;