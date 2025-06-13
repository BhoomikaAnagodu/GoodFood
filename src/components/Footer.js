import { NavLink } from "react-router-dom";
import LOGO from "../../assets/icons/logo.svg";
import CopyRightsIcon from "../../assets/icons/copyright.svg";
import { FOOTER_ITEMS } from "../utils/constants";

const Footer = () => {
  return (
    <>
      <div className="bg-zinc-100 opacity-90">
        <div className="main-container mx-auto">
          <div className="py-5 lg:py-10">
            <div className="text-sm grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-8 md:gap-x-5 lg:gap-2">
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
                <p className="text-sm px-1 lg:px-3 text-theme-base-700">
                  Join us for exclusive updates, tasty offers, and fresh meals
                  delivered straight to your doorstep.
                </p>
              </div>
              {FOOTER_ITEMS.map((item) => (
                <div className="flex md:justify-center px-3 md:px-0 py-5">
                  <div>
                    <h3 className="text-base lg:text-lg py-2 font-semibold text-theme-base-900">
                      {item.heading}
                    </h3>
                    <ul className="text-theme-base-700">
                      {item.list.map((listItem) => (
                        <li className="py-1 lg:py-2">
                          <NavLink to={`/${listItem.value}`}>
                            {listItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-theme-orange py-3 ">
        <div className="main-container mx-auto text-white text-xs flex items-center">
          <CopyRightsIcon className="w-2 h-2 mr-1" />
          <p> GoodFood | All Rights Reseverd</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
