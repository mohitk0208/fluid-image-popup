import React from "react";
import ReactDOM from "react-dom";

import BackDrop from "./BackDrop";
import "./Modal.css";

const ModalOverlay = (props) => {
	const content = (
		<div className={`modal ${props.className}`} style={props.style}>
			<img src={props.full} alt="" />
			<p className="caption">{props.alt}</p>
		</div>
	);

	return ReactDOM.createPortal(content, document.getElementById("modal"));
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{props.show && <BackDrop onClick={props.onCancel} />}
			{props.show && <ModalOverlay {...props} />}
		</React.Fragment>
	);
};

export default Modal;
