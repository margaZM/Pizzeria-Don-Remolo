import { CloseBtn } from '../CloseBtn';
import { Details } from '/modules/shared/ProductDetails/sections/DetailsProducts.js';
import { SelectedProduct } from './sections/SelectedProduct.js';
import Modal from '/modules/shared/Modal.js';

const Main = () => {
	return (
		<Modal>
			<section className="w-full pt-4 flex flex-col">
				<header className="bg-transparent mb-6 self-end pr-4">
					<CloseBtn modal="productDetails" />
				</header>
				<div className="grid grid-cols-5 max-h-[700px]">
					<SelectedProduct />
					<Details />
				</div>
			</section>
		</Modal>
	);
};

export default Main;
