export const ShimmerCard = () => {
  return (
    <div>
      <div className="w-full h-60 rounded-xl bg-theme-base-50"></div>
      <p className="w-1/2 bg-theme-base-50 text-theme-base-50 my-2">shimmer</p>
      <p className="w-3/4 bg-theme-base-50 text-theme-base-50">shimmer</p>
      <p className="w-4/5 bg-theme-base-50 text-theme-base-50 my-2">shimmer</p>
      <p className="w-1/3 bg-theme-base-50 text-theme-base-50">shimmer</p>
    </div>
  );
};

const ShimmerContainer = () => {
  return (
    <>
      <div className="fixed top-20 left-0 shadow-top z-110 bg-white py-5 w-full">
        <div className="main-container mx-auto flex justify-end gap-4">
          <button className="btn-primary bg-theme-base-50 text-theme-base-50 px-14">
            shimmer button
          </button>
          <button className="btn-primary bg-theme-base-50 text-theme-base-50">
            shimmer button
          </button>
        </div>
      </div>
      <div className="pt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-5">
        {[...Array(21).keys()].slice(1).map((i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </>
  );
};

export default ShimmerContainer;
