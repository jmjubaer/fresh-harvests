"use client";

import SectionHeading from "@/components/shered/ui/SectionHeading";
import SectionTag from "@/components/shered/ui/SectionTag";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

const Products = () => {
    const { data, isError } = useGetAllProductsQuery(undefined);
    console.log(data);
    // console.log(isError);
    return (
        <div className='container pt-40'>
            <SectionHeading
                tag='Our Products'
                title='Our Fresh Products'
                description='We pride ourselves on offering a wide variety of fresh and
                flavorful fruits, vegetables, and salad ingredients.'></SectionHeading>
            <div className='mt-8'></div>
        </div>
    );
};

export default Products;
