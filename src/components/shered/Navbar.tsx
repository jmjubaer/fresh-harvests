"use client";
import Link from "next/link";
import Logo from "./ui/Logo";
import { FaBars, FaCartShopping, FaHeart } from "react-icons/fa6";
import NavLink from "./ui/Navlink";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = ({ home }: { home?: boolean }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className='relative'>
            <div className='container  flex items-center justify-between py-7 z-20'>
                <Logo />
                <nav className='lg:flex items-center gap-10 font-secondary text-sm hidden'>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/"}>Shop</NavLink>
                    <NavLink href={"/"}>About us</NavLink>
                    <NavLink href={"/"}>Blog</NavLink>
                </nav>{" "}
                <nav
                    className={`lg:flex items-center gap-4 font-secondary text-sm hidden z-20 ${
                        home ? " text-white" : "text-secondary"
                    }`}>
                    <Link href={"/"} className='flex items-center gap-3'>
                        <FaHeart /> Favorites
                    </Link>
                    <Link href='/' className=' mt-2 flex items-center gap-3'>
                        <span className='relative'>
                            <FaCartShopping className='' />
                            <span className='absolute -top-3 -right-3 bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                {0}
                            </span>
                        </span>
                        Cart
                    </Link>
                    <button
                        className={`border py-3 px-6 font-semibold rounded ${
                            home ? " text-white" : "text-primary-text"
                        }`}>
                        Sign in
                    </button>
                </nav>
                {/* Mobile Menu */}
                <div className='flex items-center gap-5 z-20 text-white'>
                    <Link href='/' className=' flex items-center gap-3'>
                        <span className='relative'>
                            <FaCartShopping className='' />
                            <span className='absolute -top-3 -right-3 bg-red-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'>
                                {0}
                            </span>
                        </span>
                        Cart
                    </Link>
                    <button
                        onClick={() => setOpen(true)}
                        className='text-xl  z-20 block lg:hidden'>
                        <FaBars />
                    </button>
                </div>
                <div
                    className={`fixed h-screen bg-primary-text/90 text-xl text-center text-secondary top-0 overflow-hidden duration-500 transition-all left-0 z-50 flex flex-col gap-5 justify-center ${
                        open ? "w-full" : "w-0"
                    }`}>
                    <button
                        onClick={() => setOpen(false)}
                        className='absolute top-5 right-5 text-red-500'>
                        <FaTimes />
                    </button>
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/"}>Shop</NavLink>
                    <NavLink href={"/"}>About us</NavLink>
                    <NavLink href={"/"}>Blog</NavLink>
                    <Link
                        href={"/"}
                        className='flex items-center mx-auto gap-3'>
                        <FaHeart /> Favorites
                    </Link>
                    <button
                        className={`border w-fit mx-auto py-3 px-14 font-semibold rounded ${
                            home ? " text-white" : "text-primary-text"
                        }`}>
                        Sign in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
