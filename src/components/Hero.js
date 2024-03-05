import WomenImg from "../images/woman.png";
import { Link } from "react-router-dom";
function Hero(){
    return(
        <section className=" h-[800px] bg-hero bg-no-repeat bg-cover bg-center
        py-24">
            <div className="container mx-auto flex justify-around h-full">
                {/* text */}
                <div className="flex flex-col justify-center">
                    <div className="font-semibold flex items-center uppercase">
                        <div className="w-5 h-[2px] mr-2 bg-red-400"></div>New Trend
                    </div>
                    <h1 className="flex flex-col text-[70px] leading-[1.1] font-light mb-4">AUTUMN SALE STYLISH<br />
                    <span className="font-semibold">WOMENS</span>
                    </h1>
                    <Link to={'/'} className="self-start uppercase font-semibold
                    underline-content relative cursor-default">
                        Discover More
                    </Link>
                </div>
                {/* image */}
                <div className="hidden lg:block">
                    <img src={WomenImg} alt=""/>
                </div>
            </div>
        </section>
    );
}

export default Hero;