import getAllProduct from "@/lib/getAllProduct";
import Product from "./Product";

async function ProductsSection(props) {
    const products = await getAllProduct();
    return (
        <div>
            {products.map(product => {
                console.log(product); // Move console.log outside of JSX
                return <Product key={product.id} product={product} />;
            })}
        </div>
    );
}

export default ProductsSection;
