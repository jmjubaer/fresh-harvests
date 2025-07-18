"use client";

import SectionTag from "@/components/shered/ui/SectionTag";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

const Products = () => {
    const { data, isError } = useGetAllProductsQuery(undefined);
    // console.log(data);
    // console.log(isError);
    return (
        <div className="container pt-40">
            <div className='w-[40%] mx-auto text-center'>
                <SectionTag tag='Our Products' />
                <h2 className="mt-4 text-5xl font-medium">Our Fresh Products</h2>
                <p className="mt-4 text-sm font-secondary">We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
            </div>
            <div className="mt-8"></div>
        </div>
    );
};

export default Products;
