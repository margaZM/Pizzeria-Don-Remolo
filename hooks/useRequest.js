import { useEffect, useState } from 'react'
import { productServices } from '../services/product-services/productServices';

export const useRequest = (params = {}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		switch (params.request) {
			case "promotions": {
				productServices.getPromotions().then(res => setData(res.data))
			}
				break;
			case "doughs": {
				productServices.getDoughs(params.id).then(res => setData(res.data))
			}
				break;
			case "sizes": {
				productServices.getSizes(params.id).then(res => setData(res.data))
			}
				break;
			default:
				break;
		}
	}, []);

	return data;
};