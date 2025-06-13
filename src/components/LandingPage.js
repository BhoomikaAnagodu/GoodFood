import { Link } from "react-router-dom";
import landingPageImage2 from "../../assets/Images/landingpage_img_2.jpg";
import Tick from "../../assets/icons/tick-circle.svg";
import ArrowRightUp from "../../assets/icons/arrow-right-up.svg";

const LandingPage = () => {
  return (
    <>
      <div className="main-container mx-auto">
        <div className="h-[60dvh] flex flex-col place-content-center lg:h-[90dvh] py-10 lg:py-30">
          <div className="font-poppins flex items-center text-theme-base-800">
            <p className="border-t-2 border-t-theme-base-800 w-10 mx-2"> </p>
            <p className="uppercase xxs:text-xs md:text-sm lg:text-base">
              Fresh & delicious
            </p>
          </div>
          <div className="my-5">
            <h1 className="xxs:text-3xl md:text-4xl lg:text-7xl leading-10 lg:leading-20">
              Delicious Meals <br />{" "}
              <span className="text-theme-orange">Delivered</span> to Your Door
            </h1>
            <p className="xxs:text-sm md:text-base lg:text-xl w-1/2 text-theme-base-800 my-4 lg:my-8">
              Enjoy fresh, flavourful meals made with the finest ingredients,
              delivered straight to your door, every time.
            </p>
            <Link to={"/restaurants"}>
              <button className="btn-primary xxs:text-xs md:text-sm lg:text-base bg-theme-orange">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="mx-auto md:mt-4 py-12 sm:py-15 lg:py-20 xl:py-30">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-4 ">
            <img
              src={landingPageImage2}
              className="rounded-3xl py-5 md:py-0 object-cover h-full"
            />
            <div className="md:mx-3 lg:mx-5 py-5 md:py-0">
              <div className="font-poppins flex items-center text-theme-base-800 md:text-sm lg:text-base xl:text-xl">
                <p className="border-t-2 border-t-theme-base-800 w-8 mx-1 md:mx-2">
                  {" "}
                </p>
                <p className="uppercase xxs:text-xs md:text-sm lg:text-base">
                  About Us
                </p>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-8.5 sm:leading-9 md:leading-10 lg:leading-13 xl:leading-15">
                  Inspired by Taste, <br /> Built on{" "}
                  <span className="text-theme-orange">Quality</span>
                </h1>
                <p className="text-sm md:text-base xl:text-lg text-theme-base-800 my-2">
                  Passionate about quality, our restaurant partners create
                  delicious meals with fresh ingredients and care.
                </p>
                <ul className="text-sm md:text-base my-1.5 md:my-2 lg:my-4 xl:text-lg">
                  <li className="flex items-center">
                    <div className="w-[20px] lg:w-[25px]">
                      <Tick className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5 mr-1" />{" "}
                    </div>
                    <div>Fresh Food, Fast Delivery</div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-[20px] lg:w-[25px]">
                      <Tick className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] xl:w-5 xl:h-5 mr-1" />{" "}
                    </div>
                    <div>Taste the Freshness in Every Bite</div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-[20px] lg:w-[25px] mt-1">
                      <Tick className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] xl:w-5 xl:h-5 mr-1" />
                    </div>
                    <div>
                      <span>Deal</span>,{" "}
                      <span className="text-theme-green">Free Delivery </span>{" "}
                      and more from our restaurant partners
                    </div>
                  </li>
                </ul>
                <Link to={"/about"}>
                  <button className="cursor-pointer flex items-center text-theme-orange border-b-1 border-b-theme-orange text-sm md:text-base xl:text-lg">
                    Learn More
                    <ArrowRightUp className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px] xl:w-5 xl:h-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
