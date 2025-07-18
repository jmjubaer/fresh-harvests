import Image from "next/image";
import aboutImage from "@/assets/aboutimage.png"
import SectionTag from "@/components/shered/ui/SectionTag";
import ButtonOutline from "@/components/shered/ui/ButtonOutline";
const About = () => {
    return (
        <div className="grid grid-cols-2 gap-10 container items-center">
            <div className="">
                <Image src={aboutImage} alt="About section image"/>
            </div>
            <div className="">
                <SectionTag tag="About us"/>
                <h2 className="text-5xl font-medium mt-4">About Fresh Harvest</h2>
                <p className="my-4 text-sm w-4/5 font-secondary">
                Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                <ButtonOutline>Read More</ButtonOutline>
            </div>
        </div>
    );
};

export default About;