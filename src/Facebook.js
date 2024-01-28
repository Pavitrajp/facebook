import React from "react";
import fb from "../src/assets/img/fb.svg";

const Facebook = () =>{
    return (
        <>
            <div className="max-w-[1240px] mx-auto mt-[100px] md:grid grid-cols-2 items-center justify-center">
                <div className="md:w-[540px] mt-[-210px]">
                <img src={fb} className="w-[60%] pt-[112px]"/>
                <div className="text-3xl ml-[28px] w-[527px]">Facebook helps you connect and share with the people in your life.</div>
                </div>

                <div className="flex flex-col bg-white pt-[10px] pb-[24px] px-[16px] md:w-[396px] md:h-[349px] rounded-[10px] mt-3xl ">
                    <input type="text" placeholder="Email address or phone number" className="border border-gray px-4 h-14 my-2 rounded text-[17px] outline-blue-600"/>
                    <input type="password" placeholder="Password" className="border border-gray px-4 h-14 my-2 rounded text-[17px] outline-blue-600"/>
                    <button className="bg-[#1877f2] text-white rounded py-3 font-bold my-2 text-1xl">Log in</button>
                    <span className="mt-1 text-[#1877f2] text-center cursor-pointer hover:underline">Forgotten password?</span>
                    <hr className="my-[20px]"/>
                    <button className="bg-[#42b72a] text-white rounded py-3 px-4 font-bold w-fit mx-auto">Create new account</button>
                    <div className="absolute bottom-[120px] text-[14px] ml-[28px]"><strong>Create a Page</strong> for a celebrity, brand or business.</div>
                </div>
               
            </div>

        </>
    );
};
export default Facebook;