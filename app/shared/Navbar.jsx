import React from 'react';
import searchIcon from "@/public/searchIcon.png";
import Image from 'next/image';


function Navbar(props) {
    return (
        <div className="bg-black py-4 ">
            <div className='max-w-6xl mx-auto lg:flex lg:justify-around'>
                <div className='flex justify-center'>
                    <div className="relative mx-auto">
                        <Image src={searchIcon} alt="" className="absolute top-1 left-1" />
                        <input type="text" name="searc-bar" placeholder="" className="w-24 md:w-auto p-1 rounded-lg" />
                    </div>
                </div>

                <div className='flex justify-center gap-2 lg:gap-10'>
                    <div className="text-[#B6BDC4]">Categories</div>
                    <div className="text-[#B6BDC4]">Website Builders</div>
                    <div className="text-[#B6BDC4]">Todays deals</div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;