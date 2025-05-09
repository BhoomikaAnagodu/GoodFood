import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";
import BulletIcon from "../../assets/icons/dot-square.svg";
import Info from "../../assets/icons/info.svg";
import { decrementItemQuanity, incrementItemQuanity } from "../store/cartSlice";

const Cart = () => {
  const { items, restaurantDetails } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleIncrementItemQuantity = (data) => {
    dispatch(incrementItemQuanity(data));
  };

  const handleDecrementItemQuantity = (data) => {
    dispatch(decrementItemQuanity(data));
  };

  const extractItemPrice = (item) => {
    return (
      item?.finalPrice ||
      item?.price ||
      (item?.variantsV2?.pricingModels?.length &&
        Math.min(
          ...item?.variantsV2?.pricingModels?.map(
            (priceModel) => priceModel.price
          )
        ))
    );
  };

  const itemTotal = items.reduce(
    (acc, item) => acc + (extractItemPrice(item) * item.quantity) / 100,
    0
  );

  return (
    <div className="bg-theme-base-50 h-[89.5vh]">
      {items?.length > 0 ? (
        <div className="w-3/4 flex gap-10 justify-between mx-auto py-5 relative">
          <div className="w-3/5 p-4 bg-white rounded-sm">
            <div className="flex py-3">
              <img
                src={IMG_CDN_URL + restaurantDetails?.cloudinaryImageId}
                className="w-25 h-25 rounded-sm"
              />
              <div className="px-3">
                <h2 className="text-2xl m-0 font-semibold">
                  {restaurantDetails.name}
                </h2>
                <p className="text-base opacity-80">
                  {restaurantDetails.areaName}
                </p>
              </div>
            </div>
            <div>
              <ul className="my-5">
                {items.map((item) => {
                  return (
                    <li className="flex items-center my-2">
                      <div className="flex basis-2/4">
                        <BulletIcon className="max-w-[20px]! max-h-[20px]! mt-0.5" />
                        <p className="px-2 flex-wrap">{item.name}</p>
                      </div>
                      <div className="basis-1/4 flex justify-center">
                        <div className="border-1 border-theme-base-200 w-fit">
                          <button
                            className="cursor-pointer p-2 text-theme-base-700 font-bold rounded-l-sm"
                            onClick={() => handleDecrementItemQuantity(item)}
                          >
                            -
                          </button>
                          <span className="cursor-default py-2 px-3">
                            {item.quantity}
                          </span>
                          <button
                            className="cursor-pointer p-2 text-theme-green transform hover:scale-125 duration-300 font-bold rounded-r-sm"
                            onClick={() => handleIncrementItemQuantity(item)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="basis-1/4 text-end">
                        <p>
                          &#8377;
                          {(extractItemPrice(item) * item.quantity) / 100}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="my-3">
                <p className="font-semibold">Bill Details</p>
                <table className="w-full">
                  <tr>
                    <td className="py-2">Item Total</td>
                    <td className="text-end">&#8377;{itemTotal}</td>
                  </tr>
                  <tr className="border-b-2 border-b-theme-base-800">
                    <td className="flex pb-4 items-center">
                      Delivery Fee | 1.3 kms{" "}
                      <div className="tooltip-div relative cursor-pointer">
                        <Info className="w-5 h-5 mx-2 " />
                        <div className="w-[260px] tooltip bottom-6 inline-block px-3 py-2 text-xs font-medium transition-opacity duration-300 rounded-lg shadow-sm ">
                          <p>Delivery Fee breakup for this order</p>
                          <div className="flex justify-between">
                            <p>Standard Fee</p>
                            <p>&#8377;50</p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">&#8377;50</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">TO PAY</td>
                    <td className="text-end font-semibold">
                      &#8377;{itemTotal + 50}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-white p-4 h-fit rounded-sm">
            <h2 className="font-semibold">
              Review your order and address details to avoid cancellations
            </h2>
            <p className="py-2">
              <b>Note:</b> Please ensure your address and order details are
              correct. This order, if cancelled, is non-refundable.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-[83vh] flex justify-center items-center">
          <div className="text-center">
            <h2 className="py-2">Your cart is empty </h2>
            <p className="py-2">
              You can go to home page to view more restaurants
            </p>

            <Link to={"/"} className="btn-primary my-2">
              Go to Homepage
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
