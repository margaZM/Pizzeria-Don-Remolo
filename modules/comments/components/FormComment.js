import React, { useState } from 'react';
import { StarRatings } from '../../shared/StarRatings/StarRatings';
import { useRouter } from 'next/router';
import { useRating } from '/hooks/useRating';
import { ErrorMessage } from '/modules/shared/ErrorMessage';
import { categories, validators } from '../constants';

export const FormComment = (props) => {
	const router = useRouter();
	const { rating, setRating, hover, setHover } = useRating(Number(router.query.rate));
	const [selected, setSelected] = useState([]);
	const [touched, setTouched] = useState({});
	const [state, setstate] = useState({
		fields: {
			email: '',
			opinion: '',
		},
		errors: {
			email: validators.email(),
			opinion: validators.opinion(),
		},
	});

	const { email, opinion } = state.fields;
	const { errors } = state;

	const handleSelected = (button) => {
		if (selected.includes(button)) {
			setSelected((prevSelected) => prevSelected.filter((s) => s !== button));
		} else {
			setSelected((prevSelected) => [...prevSelected, button]);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(email, opinion, rating, selected);
	};

	const handleFieldChange = (e) => {
		const { name, value } = e.target;
		console.log(value);
		setstate((prevState) => ({
			fields: {
				...prevState.fields,
				[name]: value,
			},
			errors: {
				...prevState.errors,
				[name]: validators[name](value),
			},
		}));
	};

	const onBlur = (value) => {
		setTouched((prevTouched) => ({
			...prevTouched,
			[value]: false,
		}));
	};

	const onFocus = (value) => {
		setTouched((prevTouched) => ({
			...prevTouched,
			[value]: true,
		}));
	};

	return (
		<form className="p-4 md:w-[88%] flex flex-col gap-8" onSubmit={handleSubmit}>
			<section>
				<div className="flex flex-col md:flex-row gap-2 md:gap-4">
					<h4 className="font-semibold">¿Cómo calificas tu experiencia?</h4>
					<span className="text-primary text-xxs">Requerido</span>
				</div>
				<StarRatings
					rating={rating}
					setRating={setRating}
					hover={hover}
					setHover={setHover}
				/>
			</section>
			<section>
				<div className="flex flex-col md:flex-row gap-2 md:gap-4">
					<h4 className="font-semibold">¿En qué podemos mejorar?</h4>
					<span className="text-gray-dark text-xxs">Opcional</span>
				</div>
				<div className="mt-2 flex gap-2 flex-wrap">
					{categories.map((category, index) => (
						<button
							className={`p-2 px-4  ${
								selected.includes(category)
									? 'bg-primary text-white border-primary rounded-full'
									: 'button-border-gray'
							}`}
							type="button"
							key={index}
							onClick={() => handleSelected(category)}
						>
							{category}
						</button>
					))}
				</div>
			</section>
			<section>
				<div className="flex flex-col md:flex- gap-2 md:gap-4">
					<h4 className="font-semibold">
						¿Qué te gustaría decirnos sobre tu experiencia?
					</h4>
					<span className="text-primary text-xxs">Requerido</span>
				</div>
				<div className="mt-2 flex flex-col gap-2 md:gap-4">
					<textarea
						className="w-full h-44"
						name="opinion"
						value={opinion}
						placeholder="Cuéntanos qué te gustó de tu experiencia"
						onChange={handleFieldChange}
						onBlur={onBlur}
						onFocus={onFocus}
					></textarea>
					{errors.opinion && (
						<ErrorMessage message={'Tu mensaje no puede superar los 256 caracteres'} />
					)}
				</div>
			</section>
			<section>
				<div className="flex flex-col md:flex- gap-2 md:gap-4">
					<p className="font-semibold">
						Si deseas tener una respuesta de nosotros, por favor deja tu correo
						electrónico
					</p>
					<span className="text-gray-dark text-xxs">Opcional</span>
				</div>

				<div className="flex flex-col md:flex-row gap-2">
					<div className="max-w-[32rem] flex flex-col gap-2 md:gap-4">
						<input
							type="email"
							name="email"
							value={email}
							placeholder="Correo electrónico"
							onChange={handleFieldChange}
							onBlur={onBlur}
							onFocus={onFocus}
							className="pl-4 mt-2"
						/>
						{errors.email && (
							<ErrorMessage
								message={'Introduce un correo electrónico válido por favor'}
							/>
						)}
					</div>

					<div className="w-28 self-end">
						<button
							type="submit"
							className="button-primary disabled:bg-gray disabled:cursor-not-allowed"
							disabled={rating === 0 || !opinion.length}
						>
							Enviar
						</button>
					</div>
				</div>
			</section>
		</form>
	);
};

FormComment.propTypes = {};
