import Image from 'next/image';
import { useSelectProduct } from '/hooks/useSelectProduct';
import { ProductDetailCard } from '/modules/shared/PromotionsDetailsModal/components/ProductDetailCard.js';

export const SelectedProduct = () => {
	const { currentState } = useSelectProduct();
	return <ProductDetailCard product={currentState?.selectedProduct} />;
};
