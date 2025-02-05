import React from "react";

const ProductCard = ({ pro }) => {
  // Ustoz o'rgatgan yulduzcha qo'yish funksiyalari
  function calculateStar(n) {
    if (n === 0 || n.toString().length === 1) return n;

    let [whole, rest] = n.toString().split(".");

    return rest[0] < 3 ? +whole : rest[0] < 8 ? +whole + 0.5 : +whole + 1;
  }

  const setStar = (rating) => {
    let number = calcCulateStar(rating);
    let fill = Math.floor(number);
    let half = number - Math.floor(number) ? 1 : 0;
    let outlines = 5 - Math.ceil(number);

    return [
      ...Array(fill)
        .fill()
        .map((_, i) => <FaStar key={`fill-${i}`} />),
      ...Array(half)
        .fill()
        .map((_, i) => <FaStarHalfAlt key={`half-${i}`} />),
      ...Array(outlines)
        .fill()
        .map((_, i) => <FaRegStar key={`outline-${i}`} />),
    ];
  };

  // end

  const stars = Array.from({ length: 5 }, (_, index) => {
    return (
      <svg
        key={index}
        aria-hidden="true"
        className={`h-5 w-5 ${
          index < Math.round(pro.rating.rate)
            ? "text-yellow-300"
            : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  });

  const oldPrice = () => {
    if (pro.price < 600) {
      return (
        <span class="text-sm text-slate-900 line-through">{`$${Math.round(
          pro.price * 1.5
        ).toFixed()}`}</span>
      );
    }
    return "";
  };

  return (
    <div class="mt-2 mb-5 flex gap-2 items-center justify-between flex-col">
      <p>
        <span class="text-3xl font-bold text-slate-900">{`$${pro.price}`}</span>
        {oldPrice()}
      </p>
      <div className="flex">
        {stars}
        <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
          {pro.rating.rate}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
