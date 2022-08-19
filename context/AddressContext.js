import { createContext, useState } from 'react';

export const AddressContext = createContext();

export function AddressContextProvider({ children }) {
	const [address, setAddress] = useState(null);

	const handleAddress = (data) => {
		setAddress(data);
	};

	const value = {
		address,
		handleAddress,
	};
	return <AddressContext.Provider value={value}>{children}</AddressContext.Provider>;
}
