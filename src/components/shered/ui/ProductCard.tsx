import { TProduct } from "@/types";
import Image from "next/image";

const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div
            className='px-3 pt-2.5 pb-5 bg-white rounded-lg shadow-xl border border-[#F4F6F6] cursor-pointer group'>
            <div className='bg-[#F4F6F6] rounded-lg'>
                <Image
                    src={product.images[0]}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className='  h-52 object-contain mx-auto bg-[#F4F6F6] '
                />
            </div>
            <div className='mt-3 text-center'>
                <h3 className='text-lg font-medium'>{product.productName}</h3>
                <p className='mt-2 text-[#4A4A52] text-lg font-secondary'>
                    ${product.price.toFixed(2)}/pcs
                </p>
                <button className='text-lg w-full  py-3 border rounded-lg mt-3 cursor-pointer group-hover:bg-primary group-hover:text-white duration-300'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
