/**
 * This component will conditionally render  JSX if product has
 * discount on its price or not
 */

import PriceTag from "./PriceTag";

type Props = {
  price: number;
  discountPercentage: number;
};

function CardPrice({ price, discountPercentage }: Props) {
  if (discountPercentage > 0) {
    const realPrice = parseFloat(
      ((price * (100 - discountPercentage)) / 100).toFixed(2)
    );
    return (
      <div className="flex flex-col">
        <div className="flex">
          <span className="p-2 text-2xl font-extralight text-red-600">{`-${discountPercentage}%`}</span>
          <PriceTag price={realPrice} />
        </div>
        <div className="mb-2 text-xs text-slate-600">
          <span className="">List Price:</span>
          <span className="line-through">{`$${price}`}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <PriceTag price={price} />
    </div>
  );
}

export default CardPrice;
