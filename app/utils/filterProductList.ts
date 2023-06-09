import { Filter, ProductWithId } from "../types/product";

//This function takes as a list of products and a product filter object
//Returns a list  of products that meets the filter props
export default function filterProductList(
  productList: ProductWithId[],
  filter: Filter
): ProductWithId[] | [] {
  let list = [...productList];

  //Create different matches for the filter, if the product meets all matches it is returned by the function
  //All props in object Filter are optional therefore return true if a prop is not provided
  const filteredProduct = list.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(filter.name?.toLowerCase() ?? ""); // always return true if no name is provided
    const isCategoryMatch = product.category
      .toLowerCase()
      .includes(filter.category?.toLowerCase() ?? ""); // always returns true if category is not provided
    //For the real price we have to calculate the discount on the price
    let realPrice = product.price;
    if (product.discountPercentage > 0) {
      realPrice = parseFloat(
        ((product.price * (100 - product.discountPercentage)) / 100).toFixed(2)
      );
    }

    const minPriceMatch = filter.minPrice ? realPrice > filter.minPrice : true;
    const maxPriceMatch = filter.maxPrice ? realPrice < filter.maxPrice : true;
    const minStockMatch = filter.minStock
      ? product.stock > filter.minStock
      : true;
    const maxStockMatch = filter.maxStock
      ? product.stock < filter.maxStock
      : true;

    //Check if product discount is higher than 0
    let haveDiscount = true;
    if (filter.haveDiscount === true) {
      haveDiscount = product.discountPercentage > 0 ? true : false;
    }
    // return product object that meets all matches
    return (
      nameMatch &&
      isCategoryMatch &&
      minPriceMatch &&
      maxPriceMatch &&
      minStockMatch &&
      maxStockMatch &&
      haveDiscount
    );
  });
  return filteredProduct;
}
