import React, { useState } from "react";
import Modal from "./Modal";

import "./Image.css";

const Image = (props) => {
	const [isFullImage, setIsFullImage] = useState(false);

	const showFullImage = () => {
		setIsFullImage(true);
	};

	const removeFullImage = () => {
		setIsFullImage(false);
	};

	return (
		<>
			<Modal
				show={isFullImage}
				full={props.full}
				alt={props.alt}
				onCancel={removeFullImage}
			/>
			<div className="image">
				<img src={props.preview} alt={props.alt} onClick={showFullImage} />
			</div>
		</>
	);
};

export default Image;
