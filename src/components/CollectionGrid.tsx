import { getProducts, mapShopifyToProduct } from "@/lib/shopify";
import CollectionGridClient from "./CollectionGridClient";

export default async function CollectionGrid() {
  const shopifyProducts = await getProducts(20);
  const products = shopifyProducts.map(mapShopifyToProduct);

  return <CollectionGridClient initialProducts={products} />;
}
