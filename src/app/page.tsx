import About from "@/components/page/home/About";
import Banner from "@/components/page/home/Banner";
import Products from "@/components/page/home/Products";
import Testimonial from "@/components/page/home/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About/>
            <Testimonial/>
        </div>
    );
};

export default HomePage;
