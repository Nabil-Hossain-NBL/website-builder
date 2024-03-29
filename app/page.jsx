import Image from "next/image";
import icon1 from "@/public/icon1.svg";
import icon2 from "@/public/icon2.svg";
import icon3 from "@/public/icon3.svg";
import icon4 from "@/public/icon4.svg";
import ProductsSection from "@/app/components/ProductsSection";
import AllSaleProducts from "./components/AllSaleProducts";
import FeaturedProduct from "./components/FeaturedProduct";


export default function Home() {
  return (
    <section className=" bg-[#FBFCFD] min-h-screen m-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-black font-inter text-4xl md:text-5xl lg:text-6xl">
          Best Website builders in the US
        </h1>
        <br />
        <hr />
        <div className="lg:flex py-2 lg:justify-between text-[#4B5665]">
          <div className="lg:flex gap-6">
            <span className="flex gap-1">
              <Image src={icon1} alt="" />
              <p>Last Updated - February 22, 2020</p>
            </span>
            <span className="flex gap-1">
              <Image src={icon2} alt="" />
              <p>Advertising Disclosure</p>
            </span>
          </div>
          <div>
            <span className="flex gap-1">
              <p>Top Relevant</p>
              <Image src={icon3} alt="" />
            </span>
          </div>


        </div>
        <hr />
        <br />

        <div className="grid grid-flow-col gap-2 lg:gap-4 grid-rows-2 lg:grid-rows-1 text-[#4B5665]">
          <div className="bg-white py-1 px-4 rounded-md">Tools</div>
          <div className="bg-white py-1 px-4 rounded-md">AWS Builder</div>
          <div className="bg-white py-1 px-4 rounded-md">Start Build</div>
          <div className="bg-white py-1 px-4 rounded-md">Build Supplies</div>
          <div className="bg-white py-1 px-4 rounded-md">Tooling</div>
          <div className="bg-white py-1 px-4 rounded-md">BlueHosting</div>
        </div>
        <br />

        <div className="grid grid-flow-col gap-2 lg:gap-4 grid-rows-2 lg:grid-rows-1 text-[13px] text-[#727D87]">
          <div className="flex gap-1">Home  <Image src={icon4} alt="" /></div>
          <div className="flex gap-1">Hosting for all <Image src={icon4} alt="" /></div>
          <div className="flex gap-1">Hosting <Image src={icon4} alt="" /></div>
          <div className="flex gap-1">Hosting6 <Image src={icon4} alt="" /></div>
          <div className="flex gap-1">Hosting5 <Image src={icon4} alt="" /></div>
        </div>
        <br />

        <ProductsSection />
        <br /><br />
        <FeaturedProduct />
        <br /><hr /><br />
        <AllSaleProducts />

        <div className="lg:flex justify-between">
          <div className="text-[3em] text-[#5C6874]">Sign up and get exclusive special deals</div>
          <div className="flex justify-center items-center">
            <button className="bg-[#1B88F4] text-white px-6 py-2 rounded-xl lg:rounded-r-xl">Sign Up</button>
          </div>
        </div>

      </div>
    </section>
  );
}
