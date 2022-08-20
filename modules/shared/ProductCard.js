import Image from 'next/image';

export const ProductCard = ({ title, desc, oldPrice, newPrice, image, id, ...props }) => {
	return (
		<article className="flex flex-col gap-3 min-w-[200px] w-full max-w-[250px] min-h-[200px] h-full max-h-[320px] rounded-lg shadow-md border border-gray-light mb-4">
			<section className="w-full h-full max-h-[130px] relative">
				{image && (
					<Image
						loader={() => image}
						src={image}
						alt="category-food-image"
						layout="fill"
						className="rounded-lg"
					/>
				)}
			</section>
			<h5 className="max-h-[24px] font-bold px-2 truncate"> {title} </h5>
			<p className="h-[50px] px-2 text-[11px] sm:text-[.7rem] lg:text-[.8rem]">{desc}</p>
			<section className="flex justify-end gap-4 px-2">
				<p className="text-gray line-through">${oldPrice}</p>
				<p className="font-bold">${newPrice} </p>
			</section>
			<section className="px-2">
				<button
					className="button-primary translate-y-4"
					type="button"
					data-id={id}
					data-modal="productDetails"
					{...props}
				>
					Agregar al carrito
				</button>
			</section>
		</article>
	);
};
