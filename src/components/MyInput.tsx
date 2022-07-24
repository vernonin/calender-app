import React, { useState } from "react";

const MyInput: React.FC<{defaultValue?: string}> = ({defaultValue}) => {
	const [value, setValue] = useState<string>(defaultValue || '')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const handleFocus = () => {
		setValue('')
	}

	return (
		<input value={value} onChange={handleChange} onFocus={handleFocus} />
	)
}

export default MyInput;