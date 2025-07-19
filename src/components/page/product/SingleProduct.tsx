"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
import {
    useGetSingleCategoryQuery,
    useGetSingleProductsQuery,
} from "@/redux/features/product/productApi";
import { TProduct } from "@/types";
import { Spin } from "antd";
import SectionTag from "@/components/shered/ui/SectionTag";
import { useState } from "react";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import DetailsSection from "./DetailsSection";
import RelatedProduct from "./RelatedProduct";
const SingleProduct = ({ id }: { id: string }) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { data, isLoading, isFetching } = useGetSingleProductsQuery(id);
    const { data: productCategory } = useGetSingleCategoryQuery(
        data?.data?.categoryId,
        {
            skip: isFetching,
        }
    );
    console.log(data);
    return (
        <div className='mt-8 container'>
            <Spin tip='Loading' spinning={isLoading} size='large'>
                <div className='grid grid-cols-2 gap-12'>
                    <div className='h-full'>
                        <Swiper
                            pagination={true}
                            loop={true}
                            modules={[Pagination]}
                            className='mySwiper h-full'>
                            {data?.data?.images.map((image: string) => (
                                <SwiperSlide key={image}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={image}
                                        alt='Product image'
                                        className='w-full h-full object-contain mx-auto rounded-lg border-2 border-[#F4F6F6] '
                                    />
                                </SwiperSlide>
                            ))}{" "}
                            {data?.data?.images.map((image: string) => (
                                <SwiperSlide key={image}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={image}
                                        alt='Product image'
                                        className='w-full h-full object-contain mx-auto bg-[#F4F6F6] rounded-lg '
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className=''>
                        <SectionTag tag={productCategory?.data?.categoryName} />
                        <h2 className='text-5xl mt-4 font-medium'>
                            {data?.data?.productName}
                        </h2>
                        <div className='flex items-center gap-1 mt-4'>
                            <Rating
                                style={{ maxWidth: 80 }}
                                readOnly
                                orientation='horizontal'
                                value={5}
                            />
                            <p className='text-lg font-medium '>
                                5.0 <span className='text-xs '>(1 review)</span>
                            </p>
                        </div>
                        <h3 className='text-[32px] font-semibold mt-4 text-primary'>
                            ${data?.data?.price}/kg
                        </h3>
                        <p className='mt-4 font-secondary text-lg'>
                            {data?.data?.description?.slice(0, 300)}...
                        </p>

                        <div className='flex items-center gap-5 mt-4'>
                            <h4 className=' text-lg font-medium'>Quantity</h4>
                            <div className='flex border items-center w-fit'>
                                <button
                                    className='py-2 px-4 text-2xl cursor-pointer'
                                    onClick={() =>
                                        setQuantity(
                                            quantity > 1 ? quantity - 1 : 1
                                        )
                                    }>
                                    -
                                </button>
                                <p className='px-5 border-x py-2 text-2xl'>
                                    {quantity}
                                </p>
                                <button
                                    className='py-2 px-4 text-2xl cursor-pointer'
                                    onClick={() => setQuantity(quantity + 1)}>
                                    +
                                </button>
                            </div>
                            <p>/kg</p>
                        </div>
                        <div className='grid grid-cols-2 gap-7 mt-10'>
                            <button className='text-lg py-4 font-semibold cursor-pointer flex items-center gap-2.5 bg-[#F4F6F6] text-center rounded-lg justify-center'>
                                <FaHeart className='text-2xl' /> Save as
                                favorite
                            </button>{" "}
                            <button className='text-lg py-4 font-semibold cursor-pointer flex items-center gap-2.5 bg-primary text-center rounded-lg justify-center'>
                                <FaCartShopping className='text-2xl' /> Add to
                                cart
                            </button>
                        </div>
                    </div>
                </div>
                {/* Details section */}
                <div className='mt-16'>
                    <DetailsSection description={data?.data?.description} />
                </div>
                {/* Related product  */}
                <RelatedProduct />
            </Spin>
        </div>
    );
};

export default SingleProduct;
