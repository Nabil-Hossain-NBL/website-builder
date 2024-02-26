import Image from "next/image";
import icon5 from "@/public/icon5.svg";

async function Product({ product }) {
    console.log(product, 'hi from product');

    return (
        <section className=" mb-2 drop-shadow-xl">
            <div className="grid grid-cols-4 gap-4 bg-white rounded-xl">
                <div className="w-5/6 mx-auto">
                    <Image src={product.img} alt="" width={141} height={103} layout="responsive" />
                </div>

                <div className="col-span-2">
                    <h1>WixPro 72-Inch Responsive Website Builder- omprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores</h1>

                    <h1>Main highlights</h1>
                    <p>
                        [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                    </p>

                    <p className="flex">
                        Show more <Image src={icon5} alt="" />
                    </p>


                </div>

                <div className="bg-white">
                    <div className="mx-auto text-center text h-full grid grid-rows-2 ">
                        <div className="bg-[#F3F9FF] w-2/4 mx-auto rounded-b-xl pt-2">
                            <div>
                                9.5
                            </div>
                            <div>
                                Exceptional
                            </div>
                            <div></div>
                        </div>
                        <div className="flex justify-center items-end">
                            <button className="bg-[#1B88F4] text-white w-4/6 py-2 rounded-xl">View</button>
                        </div>
                    </div>

                </div>
                <div className="w-10 rounded-full bg-white text-center absolute -ml-5 mt-4 p-2  border">
                    1
                </div>
            </div>


        </section>
    );
}

export default Product;
