import CollapseArrow from "../../../assets/icons/collapse-arrow.svg";
import MenuItemCard from "./MenuItemCard";

const RestaurantMenuCategory = ({
  data,
  subMenuSection = false,
  style = "",
  showMenu,
  setShowMenu,
  dispatcherFn,
}) => {
  const toggleAccordion = (title) => {
    setShowMenu(showMenu === title ? null : title);
    if (showMenu !== title) {
      document.getElementById(showMenu)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`my-4 pb-2 ${style} ${
        !subMenuSection ? "px-2 border-b-10 border-theme-base-50" : ""
      }`}
    >
      <div
        className={`flex items-center ${
          data?.itemCards ? "cursor-pointer" : ""
        }`}
        onClick={data?.itemCards ? () => toggleAccordion(data?.title) : null}
      >
        <h2
          id={data?.title}
          className={`${subMenuSection ? "text-base" : "font-bold text-lg"} `}
        >
          {data?.title}{" "}
          {data?.itemCards?.length && <>({data?.itemCards?.length})</>}
        </h2>
        {data?.itemCards && (
          <CollapseArrow
            className={`w-3 h-4 ml-auto transform transition-transform duration-200 ${
              data?.title === showMenu ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>
      {data?.categories?.map((categoryList, catIndex) => (
        <RestaurantMenuCategory
          style={
            catIndex !== data?.categories?.length - 1
              ? "border-b-1 border-theme-base-100"
              : ""
          }
          key={`menu_cat_${categoryList?.categoryId}`}
          subMenuSection={true}
          data={categoryList}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          dispatcherFn={dispatcherFn}
        />
      ))}
      {data?.title === showMenu && (
        <div>
          {data?.itemCards?.map((item, index) => {
            return (
              <MenuItemCard
                style={
                  index < data?.itemCards?.length - 1
                    ? "border-b-1 border-theme-base-100 pb-8"
                    : ""
                }
                key={item?.card?.info?.id}
                data={item?.card?.info}
                dispatcherFn={dispatcherFn}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantMenuCategory;
