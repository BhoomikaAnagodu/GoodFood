export const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>
      <p className="shimmer-title">shimmer</p>
      <p className="shimmer-caption">shimmer</p>
      <p className="shimmer-caption1">shimmer</p>
      <p className="shimmer-caption2">shimmer</p>
    </div>
  );
};

const ShimmerContainer = () => {
  return (
    <>
      <button className="shimmer-btn">shimmer button</button>
      <div className="shimmer-container">
        {[...Array(21).keys()].slice(1).map((i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </>
  );
};

export default ShimmerContainer;
