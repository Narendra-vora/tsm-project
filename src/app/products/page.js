// Server Component — exports metadata for SEO
import ProductsPageClient from './ProductsPageClient';

export const metadata = {
  title: 'Products – Medical Gas Pipeline Systems | Technik Spirits MedTech',
  description:
    'Explore our comprehensive range of medical gas pipeline system equipment including Medical Air Compressors, Medical Vacuum Pumps, Oxygen Concentrators, and AGSS systems.',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
