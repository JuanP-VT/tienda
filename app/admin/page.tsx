import AdminProductCard from "../components/product card/admin product card/AdminProductCard";
import { ProductWithId } from "../types/product";
export const dynamic = "force-dynamic";
type Props = {};

async function Page({}: Props) {
  const res = await fetch("https://store-juanp-vt.vercel.app/api/products");
  const data = (await res.json()) as ProductWithId[];

  return (
    <div>
      {data.map((item, index) => (
        <AdminProductCard product={item} key={`aItm${index}`} />
      ))}
    </div>
  );
}

export default Page;
