import { ProductCounter } from '../../ProductCounter';
import { selectedProductStyles } from '../styles/productDetailsStyles';

export const SelectedProduct = ({ img, title, description, price }) => {
	return (
		<article className={selectedProductStyles}>
			<img className="w-full h-[180px]" src={img} alt={title} />
			<div className="flex flex-col gap-1 p-3">
				<h3 className="font-bold">{ title }</h3>
				<p className="font-bold">{ price }</p>
				<p>{ description }</p>
				<ProductCounter />
			</div>
		</article>
	);
};