import Image from "next/image";
import icon5 from "@/public/icon5.svg";
import icon7 from "@/public/icon7.svg";
import FiveStar from "@/public/FiveStar.png";
import FourHalfStar from "@/public/FourHalfStar.png";

async function Product({ product }) {

    return (
        <section className=" mb-8 drop-shadow-xl">

            {
                product?.award && <div className="flex gap-2 text-white rounded-r-xl bg-[#FF7724] text-center absolute -ml-3 -mt-5 p-2  border">
                    <Image src={icon7} alt="" />
                {product?.award}
            </div>}

            <div className="w-10 rounded-full bg-white text-center absolute -ml-5 mt-8 p-2  border">
                {product.id}
            </div>
            <div className="lg:grid lg:grid-cols-4 gap-4 bg-white rounded-xl">
                <div className="w-5/6 mx-auto">
                    <Image src={product.img} alt="" width={141} height={103} layout="responsive" />
                    <p className="text-center">{product.name}</p>
                </div>

                <div className="col-span-2 my-2 ml-2 lg:ml-0">
                    <h1> <span className="font-bold">{product.title}</span> {product.description}</h1>

                    <h1 className="font-bold my-2">Main highlights</h1>
                    <p className="ml-4">
                        [What You Get]: {product.highlights}
                    </p>

                    <p className="flex justify-center lg:justify-start mt-3 text-[#1B88F4]" >
                        Show more <Image src={icon5} alt="" />
                    </p>


                </div>

                <div className="bg-white">
                    <div className="mx-auto text-center text h-full grid grid-rows-2 ">
                        <div className="bg-[#F3F9FF] w-2/4 mx-auto rounded-b-xl pt-2">
                            <div className="text-[2em]">
                                {product.rating}
                            </div>
                            <div>
                                Exceptional
                            </div>
                            <div className="flex justify-center">
                                {
                                    product.star === 5 && <Image src={FiveStar} alt="" /> || product.star === 4.5 && <Image src={FourHalfStar} alt="" />
                                }
                            </div>
                        </div>
                        <div className="flex justify-center items-end">
                            <button className="bg-[#1B88F4] text-white w-4/6 py-2 rounded-xl mb-2">View</button>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    );
}

export default Product;
