import Image from "next/image";
import logo from "@/assets/logo.png";

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <Image src={logo} alt='Logo' />
            <h2 className='text-3xl font-bold'>Fresh Harvests</h2>
        </div>
    );
};

export default Logo;
