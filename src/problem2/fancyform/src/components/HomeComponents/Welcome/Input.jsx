import { useState } from "react";
import "./Input.css";

const FormInput = (props) => {
	const [focused, setFocused] = useState(false);
	const {
		placeholder,
		name,
		type,
		value,
		handleChange,
		errorMessage,
		label,
		...inputProps
	} = props;

	const handleFocus = (e) => {
		setFocused(true);
	};

	return (
		<div className='my-2 w-full rounded-sm p-2 outline-none text-black text-sm blue-glassmorphism bg-transparent hover:bg-[#2546bd]'>
			<input
				{...inputProps}
				onChange={handleChange}
				onBlur={handleFocus}
				placeholder={placeholder}
				onFocus={() =>
					inputProps.name === "confirmPassword" && setFocused(true)
				}
				focused={focused.toString()}
			/>
			<span>{errorMessage}</span>
		</div>
	);
};

export default FormInput;
