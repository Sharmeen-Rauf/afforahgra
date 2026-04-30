import { getProduct, mapShopifyToProduct, getProducts } from "@/lib/shopify";
import ProductDetailClient from "@/components/ProductDetailClient";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // In Shopify, we usually use handles for URLs. 
  // If the 'id' in URL is actually a handle (e.g. 'siyah-resham-jora'):
  const shopifyProduct = await getProduct(id);
  
  if (!shopifyProduct) {
    notFound();
  }

  const product = mapShopifyToProduct(shopifyProduct);
  
  // Fetch related products
  const relatedShopify = await getProducts(4);
  const related = relatedShopify
    .map(mapShopifyToProduct)
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  return (
    <ProductDetailClient 
      product={product} 
      related={related} 
    />
  );
}
