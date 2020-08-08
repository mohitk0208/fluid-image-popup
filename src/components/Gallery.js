import React from "react";

import Image from "./Image";
import "./Gallery.css";

const images = [
	{
		id: "image1",
		imageP: "previews/image1.jpg",
		imageF: "full/image1-full.jpg",
		alt: "A Beautiful Tree.",
	},
	{
		id: "image2",
		imageP: "previews/image2.jpg",
		imageF: "full/image2-full.jpg",
		alt: "An Ant with a Fairy in bubble",
	},
	{
		id: "image3",
		imageP: "previews/image3.jpg",
		imageF: "full/image3-full.jpg",
		alt: "A lonely night sky",
	},
	{
		id: "image4",
		imageP: "previews/image4.jpg",
		imageF: "full/image4-full.jpg",
		alt: "A dear with fire on horns",
	},
	{
		id: "image5",
		imageP: "previews/image5.jpg",
		imageF: "full/image5-full.jpg",
		alt: "A grassland with mountains in the background",
	},
	{
		id: "image6",
		imageP: "previews/image6.jpg",
		imageF: "full/image6-full.jpg",
		alt: "A waterfall in the forest",
    },
    {
		id: "image7",
		imageP: "previews/image7.jpg",
		imageF: "full/image7-full.jpg",
		alt: "sub atomic particles",
	},
	{
		id: "image8",
		imageP: "previews/image8.jpg",
		imageF: "full/image8-full.jpg",
		alt: "A lonely path with leaves in the woods",
	},
];

const Gallery = (props) => {
	return (
		<div className="gallery">
			{images.map((image) => {
				return (
					<Image
						key={image.id}
						id={image.id}
						preview={image.imageP}
						full={image.imageF}
						alt={image.alt}
						showFull={(full, caption) => {
							props.showFull(full, caption);
						}}
					/>
				);
			})}
		</div>
	);
};

export default Gallery;
