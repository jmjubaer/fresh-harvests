"use client";

import ButtonOutline from "@/components/shered/ui/ButtonOutline";
import ProductCard from "@/components/shered/ui/ProductCard";
import SectionHeading from "@/components/shered/ui/SectionHeading";
import SectionTag from "@/components/shered/ui/SectionTag";
import {
    useGetAllCategoryQuery,
    useGetAllProductsQuery,
} from "@/redux/features/product/productApi";
import { TCategory, TProduct } from "@/types";
import { Spin } from "antd";
import Image from "next/image";
import { useState } from "react";

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const { data, isLoading } = useGetAllProductsQuery(undefined);
    const { data: categoryData, isLoading: isCategoryLoading } =
        useGetAllCategoryQuery(undefined);
    console.log(categoryData);
    // console.log(isError);
    return (
        <div className='container pt-40'>
            <SectionHeading
                tag='Our Products'
                title='Our Fresh Products'
                description='We pride ourselves on offering a wide variety of fresh and
                flavorful fruits, vegetables, and salad ingredients.'></SectionHeading>

            <Spin
                tip='Loading'
                spinning={isLoading || isCategoryLoading}
                size='large'>
                {" "}
                <div className='mx-auto w-fit mt-4 flex items-center gap-6'>
                    <button
                        onClick={() => setSelectedCategory("All")}
                        className={`${
                            selectedCategory === "All"
                                ? "bg-secondary text-white "
                                : ""
                        } px-6 py-3 text-[#A6A6A6] rounded-md  text-lg border cursor-pointer`}>
                        All
                    </button>
                    {categoryData?.data?.map((category: TCategory) => (
                        <button
                            key={category?.id}
                            onClick={() =>
                                setSelectedCategory(category?.categoryName)
                            }
                            className={`${
                                selectedCategory === category?.categoryName
                                    ? "bg-secondary text-white "
                                    : ""
                            } px-6 py-3 text-[#A6A6A6] rounded-md  text-lg border cursor-pointer capitalize`}>
                            {category?.categoryName}
                        </button>
                    ))}
                </div>
                <div className='mt-8 grid grid-cols-4 gap-6 min-h-screen'>
                    {data?.data?.slice(0, 8).map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
            <div className='text-center mt-8'>
                <ButtonOutline>See All Products</ButtonOutline>
            </div>
        </div>
    );
};

export default Products;
