import About from "@/components/page/home/About";
import Banner from "@/components/page/home/Banner";
import Products from "@/components/page/home/Products";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Products />
            <About/>
        </div>
    );
};

export default HomePage;
