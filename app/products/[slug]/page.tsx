import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "../../components/AnnouncementBar";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { getProductBySlug, products } from "../../products";
import { ProductPdp } from "./ProductPdp";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Script & Soul",
    };
  }

  return {
    title: `${product.name} | Script & Soul`,
    description: `${product.concentration}. ${product.notes}`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main className="pdp-page pdp-v2" style={{ "--pdp-accent": product.accent } as CSSProperties}>
      <AnnouncementBar />
      <SiteHeader />
      <ProductPdp product={product} relatedProducts={relatedProducts} />
      <SiteFooter />
    </main>
  );
}
