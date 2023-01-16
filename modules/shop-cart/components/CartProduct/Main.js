import Image from 'next/image';
import { ProdAdditional } from './components/ProdAdditional';
import { ProdButtons } from './components/ProdButtons';
import { ProdDetails } from './components/ProdDetails';
import { ProdTitle } from './components/ProdTitle';

const Main = ({ product, id }) => {
	const { img, title, quantity, productPrice, context, additional } = product;
	return (
		<article
			className="grid grid-cols-product_cart_mobile h-[200px] p-3 sm:p-5 sm:grid-cols-product_cart_desktop mb-2"
			data-id={id}
		>
			<section className="flex justify-center w-full max-h-[100px] rounded-xl relative">
				<Image loader={() => img} src={img} alt="product-cart" layout="fill" />
			</section>
			<section className="description-section flex flex-col sm:pl-4">
				<ProdTitle title={title} productPrice={productPrice} quantity={quantity} />
				<ProdDetails product={product} />
				{additional?.map((additional) => (
					<ProdAdditional
						key={additional.length + Math.random()}
						additional={additional.productName || additional.ingredientName}
						additionalPrice={additional.ingredientPrice || additional.price}
						quantity={props.quantity}
					/>
				))}
				<article className="flex flex-col sm:pl-4">
					<ProdButtons product={product} />
				</article>
			</section>
		</article>
	);
};

export default Main;
