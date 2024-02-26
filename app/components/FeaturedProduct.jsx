import React from 'react';
import product from '@/public/product.png';
import Image from 'next/image';
import icon5 from "@/public/icon5.svg";
import icon6 from "@/public/icon6.svg";
import FourStar from "@/public/FourStar.png";

function FeaturedProduct(props) {
    return (
        <section className=" mb-2 drop-shadow-xl">
            <div className="grid grid-cols-4 gap-4 bg-white rounded-xl">
                <div className="w-5/6 mx-auto">
                    <Image src={product} alt="" width={141} height={103} layout="responsive" />
                    <p className="text-center">CDK</p>
                </div>

                <div className="col-span-2 my-2">
                    <h1> <span className="font-bold">CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides</h1>

                    <h1 className="font-bold my-2">Main highlights</h1>
                    <div className="ml-4 bg-[#FFF4ED] p-2 rounded-lg">
                        <p><span className='p-1 bg-white rounded-lg'>9.9</span> building responsive</p>
                        <p><span className='p-1 bg-white rounded-lg'>8.9</span> Cool</p>
                        <p><span className='p-1 bg-white rounded-lg'>8.9</span> Docs</p>

                    </div>
                    <h1 className=" my-2">
                        Why we love it
                    </h1>
                    <div>

                        <div className='flex'>
                            <Image src={icon6} alt="" /> Documentation
                        </div>
                        <div className='flex'>
                            <Image src={icon6} alt="" /> Easy Use
                        </div>
                        <div className='flex'>
                            <Image src={icon6} alt="" /> Out of box
                        </div>
                    </div>

                    <p className="flex mt-3 text-[#1B88F4]" >
                        Show more <Image src={icon5} alt="" />
                    </p>


                </div>

                <div className="bg-white">
                    <div className="mx-auto text-center text h-full grid grid-rows-2 ">
                        <div className="bg-[#F3F9FF] w-2/4 mx-auto rounded-b-xl pt-2">
                            <div className="text-[2em]">
                                9.1
                            </div>
                            <div>
                                Very Good
                            </div>
                            <div className="flex justify-center">
                                <Image src={FourStar} alt="" />
                            </div>
                        </div>
                        <div className="flex justify-center items-end">
                            <button className="bg-[#1B88F4] text-white w-4/6 py-2 rounded-xl mb-2">View</button>
                        </div>
                    </div>

                </div>
                <div className="w-10 rounded-full bg-white text-center absolute -ml-5 mt-4 p-2  border">
                    4
                </div>
            </div>


        </section>
    );
}

export default FeaturedProduct;