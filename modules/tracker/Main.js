import React from 'react';
import { Stepper } from './components/Stepper';
import { Local } from './components/Local';
import { Order } from './components/Order';
import { Rate } from './components/Rate';
import { TrackOtherOrder } from './components/TrackOtherOrder';

export const Main = ({}) => {
	return (
		<div className="p-4 md:w-[88%] md:mx-auto flex flex-col gap-4 items-center">
			<Stepper />
			<div className="w-full flex flex-col gap-4 md:flex-row md:justify-between">
				<Local />
				<Order />
				<Rate />
			</div>
			<TrackOtherOrder />
		</div>
	);
};
