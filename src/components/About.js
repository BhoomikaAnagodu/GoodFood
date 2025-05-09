// import Parent from "./ClassComponent/Parent.js";
import AboutImg1 from "../../assets/Images/about_1.jpg";
import Slide1 from "../../assets/Images/slide_1.jpg";
import Slide2 from "../../assets/Images/slide_2.jpg";
import Slide3 from "../../assets/Images/slide_3.jpg";
import Slide4 from "../../assets/Images/slide_4.jpg";
import Slide5 from "../../assets/Images/slide_5.jpg";
import Slide6 from "../../assets/Images/slide_6.jpg";
import Slide7 from "../../assets/Images/slide_7.jpg";
import Slide8 from "../../assets/Images/slide_8.jpg";
import Slide9 from "../../assets/Images/slide_9.jpg";
import Slide10 from "../../assets/Images/slide_10.jpg";
import Slide11 from "../../assets/Images/slide_11.jpg";
import Slide12 from "../../assets/Images/slide_12.jpg";
import Slide13 from "../../assets/Images/slide_13.jpg";

const About = () => {
  return (
    <>
      <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto">
        <div className="grid grid-cols-2 gap-8 py-10 items-center">
          <div className="px-10">
            <p className="w-1/6 border-t-2 border-t-theme-orange"></p>
            <h1 className="text-5xl my-5">
              We are here to help amazing restaurants get great customers
            </h1>
            <p className="text-theme-base-800">
              We partner with top-tier restaurants to connect them with hungry
              customers who crave quality and convenience. Our platform helps
              great food find its way to the right tables—quickly, reliably, and
              with a personal touch.
            </p>
          </div>
          <div className="relative px-10">
            <img src={AboutImg1} className="rounded-3xl " />
          </div>
        </div>
      </div>
      <div className="bg-theme-green-400 py-20">
        <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto">
          <div className="grid grid-cols-4 text-center">
            <div>
              <p className="text-5xl font-extrabold">25</p>
              <p className="text-theme-base-800">Countries</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">120K</p>
              <p className="text-theme-base-800">Monthly couriers</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">100K</p>
              <p className="text-theme-base-800">Monthly local stores</p>
            </div>
            <div>
              <p className="text-5xl font-extrabold">2K</p>
              <p className="text-theme-base-800">Employees</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto my-10">
        <div className="text-center">
          <h1 className="text-4xl text-theme-orange uppercase font-bold">
            Our Mission
          </h1>
          <p className="py-3 text-lg text-theme-base-800 px-5 mx-auto">
            Our mission is to champion local restaurants by making it easier for
            them to grow, compete, and thrive in the digital age—through smart
            tools, dependable delivery, and a community of food lovers ready to
            discover their flavors.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 text-center my-10">
          <div className="p-10 shadow-lg border-t-1 border-t-theme-base-100 rounded-xl transform hover:scale-105 duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold my-3">Community-Focused</h3>
            <p className="text-theme-base-800 text-sm">
              Our mission is to help great restaurants thrive by making it
              easier for people to discover, enjoy, and support local food—from
              neighborhood favorites to hidden gems.
            </p>
          </div>
          <div className="p-10 shadow-lg border-t-1 border-t-theme-base-100 rounded-xl transform hover:scale-105 duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold my-3">Growth-Oriented</h3>
            <p className="text-theme-base-800 text-sm">
              Our mission is to drive growth for amazing restaurants by
              providing a powerful platform that simplifies delivery, expands
              their reach, and builds lasting customer relationships.
            </p>
          </div>
          <div className="p-10 shadow-lg border-t-1 border-t-theme-base-100 rounded-xl transform hover:scale-105 duration-500 ease-in-out">
            <h3 className="text-2xl font-semibold my-3">Human-Centered</h3>
            <p className="text-theme-base-800 text-sm">
              We’re on a mission to bring people closer to the food they love,
              by helping restaurants do what they do best—serve amazing
              meals—while we handle the rest.
            </p>
          </div>
        </div>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
           let ul = $refs.logos;
           ul.insertAdjacentHTML('afterend', ul.outerHTML);
           ul.nextSibling.setAttribute('aria-hidden', 'true');
       })"
        className="py-15 w-full inline-flex flex-nowrap overflow-hidden"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center [&_img]:max-w-none [&_li]:mx-4 animate-infiniteScroll"
        >
          <li>
            <img
              src={Slide1}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide2}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide3}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide4}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide5}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide6}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide7}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide8}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide9}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide10}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide11}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide12}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
          <li>
            <img
              src={Slide13}
              className="w-[350px] h-[280px] object-cover rounded-xl"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default About;
