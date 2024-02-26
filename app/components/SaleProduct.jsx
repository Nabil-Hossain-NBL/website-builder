import React from 'react';
import product from '@/public/product.png';
import Image from 'next/image';
import icon5 from "@/public/icon5.svg";

function SaleProduct(props) {
    return (
        <section className="drop-shadow-2xl  mb-2 ">
            <div className=" bg-white rounded-xl m-2 p-2">
                <div className="w-3/6 my-10 mx-auto">
                    <Image src={product} alt="" width={141} height={103} layout="responsive" />
                </div>

                <div className="">

                    <p>
                        <span className='bg-[#F2F4F7] p-2 rounded-xl text-[#074786]'>20% Off</span>
                        <span className='bg-[#F2F4F7] p-2 rounded-xl text-[#074786]'>Limited time </span>
                    </p>

                    <h1 className=' text-center mt-2 font-extrabold text-[#626E79] mb-2 '>
                        Webbuilder 1
                    </h1>
                    <p className='text-[#626E79]'>
                        Computer  Modern clasic with wix support
                    </p>
                    <h1 className='my-2'>
                        <span className='text-[1.5em]'>$39.96</span>
                        <span className='text-[#9FA9B3] mx-2'>$49.96</span>
                        <span className='text-[#EF4C5D]'>(20% Off)</span>
                    </h1>
                    <div className="">
                        <button className="bg-[#1B88F4] text-white w-full py-2 rounded-xl">View Deal</button>
                    </div>


                </div>
            </div>

        </section>
    );
}

export default SaleProduct;