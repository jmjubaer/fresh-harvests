import About from "@/components/page/home/About";
import Banner from "@/components/page/home/Banner";
import Blogs from "@/components/page/home/Blogs";
import Offer from "@/components/page/home/Offer";
import Products from "@/components/page/home/Products";
import Testimonial from "@/components/page/home/Testimonial";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About/>
            <Offer />
            <Testimonial/>
            <Blogs/>
        </div>
    );
};

export default HomePage;
