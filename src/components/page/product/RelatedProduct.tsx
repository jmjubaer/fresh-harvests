"use client";
import ProductCard from "@/components/shered/ui/ProductCard";
import SectionTag from "@/components/shered/ui/SectionTag";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Spin } from "antd";

const RelatedProduct = () => {
    const { data, isLoading } = useGetAllProductsQuery(undefined);

    return (
        <div className='my-32'>
            <div className='text-center'>
                <SectionTag tag='Our Products' />
                <h2 className='text-5xl font-medium mt-4'>Related products</h2>
            </div>
            <Spin tip='Loading' spinning={isLoading} size='large'>
                {" "}
                <div className='mt-8 grid grid-cols-4 gap-6'>
                    {data?.data?.slice(0, 4).map((product: TProduct) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </Spin>
        </div>
    );
};

export default RelatedProduct;
