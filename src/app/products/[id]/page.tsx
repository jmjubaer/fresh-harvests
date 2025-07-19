import SingleProduct from "@/components/page/product/SingleProduct";
import Navbar from "@/components/shered/Navbar";
import React from "react";

const SingleProductPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    console.log(id);
    return (
        <div>
            <Navbar />
            <SingleProduct id={id} />
        </div>
    );
};

export default SingleProductPage;
