import { useSelectedProducts } from '/hooks/useSelectedProducts.js';
import { ProductDetailCard } from '/modules/shared/PromotionsDetailsModal/components/ProductDetailCard.js';

export const SelectedProduct = () => {
	const { currentState } = useSelectedProducts();
	return <ProductDetailCard product={currentState?.selectedProduct} />;
};
