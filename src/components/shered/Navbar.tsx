import Link from "next/link";
import Logo from "./ui/Logo";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import NavLink from "./ui/Navlink";

const Navbar = () => {
    return (
        <div className='container flex items-center justify-between py-7'>
            <Logo />
            <nav className='flex items-center gap-10 font-secondary text-sm'>
                <NavLink href={"/"}>Home</NavLink>
                <NavLink href={"/"}>Shop</NavLink>
                <NavLink href={"/"}>About us</NavLink>
                <NavLink href={"/"}>Blog</NavLink>
            </nav>{" "}
            <nav className='flex items-center gap-4 font-secondary text-sm text-white'>
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
