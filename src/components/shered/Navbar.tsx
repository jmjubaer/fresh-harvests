import Link from "next/link";
import Logo from "./ui/Logo";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='container flex items-center justify-between py-7'>
            <Logo />
            <nav className='flex items-center gap-10'>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Shop</Link>
                <Link href={"/"}>About us</Link>
                <Link href={"/"}>Blog</Link>
            </nav>{" "}
            <nav className='flex items-center gap-4'>
                <Link href={"/"} className='flex items-center gap-3'>
                    <FaHeart /> Favorites
                </Link>
                <Link
                    href='/'
                    className=' mt-2 flex items-center gap-3'>
                    <span className="relative">
                        <FaCartShopping className='' />
                        <span className='absolute -top-3 -right-3 bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                            {0}
                        </span>
                    </span>
                    Cart
                </Link>
                <button className="border py-3 px-6 rounded">Sign in</button>
            </nav>
        </div>
    );
};

export default Navbar;
