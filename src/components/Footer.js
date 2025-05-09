import { Link } from "react-router-dom";
import LOGO from "../../assets/icons/logo.svg";
import CopyRightsIcon from "../../assets/icons/copyright.svg";

const Footer = () => {
  return (
    <>
      <div className="bg-zinc-100 opacity-90">
        <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto">
          <div className="py-5 lg:py-10">
            <div className="text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
              <div className="py-5">
                <div className="flex items-center pb-3">
                  <LOGO className="w-10 h-10 lg:w-15 lg:h-15 cursor-pointer" />
                  <h3 className="text-base sm:text-lg md:text-lg lg:text-2xl mx-1 font-semibold text-stone-900">
                    Good
                    <span className="ml-0.5 font-bold text-theme-orange">
                      Food
                    </span>
                  </h3>
                </div>
                <p className="text-sm sm:px-0 md:px-1 lg:px-3 text-theme-base-700">
                  Join us for exclusive updates, tasty offers, and fresh meals
                  delivered straight to your doorstep.
                </p>
              </div>
              <div className="flex md:justify-center sm:justify-center px-3 md:px-0 py-5">
                <div>
                  <h3 className="text-base lg:text-lg py-2 font-semibold text-theme-base-900">
                    Explore
                  </h3>
                  <ul className="text-theme-base-700">
                    <Link to="/">
                      <li className="py-2">Home</li>
                    </Link>
                    <Link to="/restaurants">
                      <li className="py-2">Restaurants</li>
                    </Link>
                    <Link to="/about">
                      <li className="py-2">About</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex md:justify-center sm:justify-start px-3 md:px-0 py-5">
                <div>
                  <h3 className="text-lg py-2 font-semibold text-theme-base-900">
                    Help
                  </h3>
                  <ul className="text-theme-base-700">
                    <li className="py-2">Support Center</li>
                    <li className="py-2">Privacy Policy</li>
                    <li className="py-2">Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className="flex md:justify-center sm:justify-center px-3 md:px-0 py-5">
                <div>
                  <h3 className="text-lg py-2 font-semibold text-theme-base-900">
                    Contact
                  </h3>
                  <ul className="text-theme-base-700">
                    <li className="py-2">Address</li>
                    <li className="py-2">Phone Number</li>
                    <li className="py-2">Email</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-theme-orange py-3 ">
        <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-4/5 mx-auto text-white text-xs flex items-center">
          <CopyRightsIcon className="w-2 h-2 mr-1" />
          <p> GoodFood | All Rights Reseverd</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
