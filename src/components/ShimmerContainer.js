export const ShimmerCard = () => {
  return (
    <div className="w-70">
      <div className="w-full h-60 rounded-xl bg-neutral-200"></div>
      <p className="w-1/2 bg-neutral-200 text-neutral-200 my-2">shimmer</p>
      <p className="w-3/4 bg-neutral-200 text-neutral-200">shimmer</p>
      <p className="w-4/5 bg-neutral-200 text-neutral-200 my-2">shimmer</p>
      <p className="w-1/3 bg-neutral-200 text-neutral-200">shimmer</p>
    </div>
  );
};

const ShimmerContainer = () => {
  return (
    <>
      <button className="btn-primary bg-neutral-200 text-neutral-200 mr-5">
        shimmer button
      </button>
      <button className="btn-primary bg-neutral-200 text-neutral-200 px-14">
        shimmer button
      </button>
      <div className="flex flex-wrap grid-rows-3 gap-4 py-5">
        {[...Array(21).keys()].slice(1).map((i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </>
  );
};

export default ShimmerContainer;
