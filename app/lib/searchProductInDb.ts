import { ProductWithId } from "../types/product";
export default async function searchProductInDb(
  id: string
): Promise<ProductWithId | null> {
  const res = await fetch(
    "https://store-juanp-vt.vercel.app/api/searchproduct",
    {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    }
  );
  const productList = await res.json();
  if (productList) {
    return productList;
  }
  return null;
}
