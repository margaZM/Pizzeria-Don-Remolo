import Image from 'next/image';

export const ProductCard = ({ title, desc, oldPrice, newPrice, image }) => {
	return (
		<article className="flex flex-col gap-3 min-w-[200px] w-full max-w-[250px] min-h-[200px] h-full max-h-[340px] rounded-lg shadow-md lg:grid lg:gap-2">
			<section className="w-full h-max">
				<Image src={image || require('../../public/assets/combo-para-2.svg')} alt="s" />
			</section>
			<h5 className="max-h-[24px] font-bold px-2"> {title} </h5>
			<p className="h-[50px] px-2 text-[11px] sm:text-[.7rem] lg:text-[.8rem]"> {desc} </p>
			<section className="grid grid-cols-2 grid-rows-2 justify-items-end px-2">
				<p className="text-gray line-through"> ${oldPrice} </p>
				<p className="font-bold"> ${newPrice} </p>
				<button
					className="w-full max-w-[200px] col-start-1 col-end-3 justify-self-center h-8 text-white bg-primary rounded-[50px] active:shadow-xl"
					type="button"
				>
					Agregar al carrito
				</button>
			</section>
			<section className="flex justify-center px-3 lg:p-0 lg:self-end">
			</section>
		</article>
	);
};
