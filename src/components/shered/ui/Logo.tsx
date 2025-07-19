import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className='flex items-center gap-2'>
            <Image src={logo} alt='Logo' />
            <span className='text-3xl font-bold'>Fresh Harvests</span>
        </Link>
    );
};

export default Logo;
