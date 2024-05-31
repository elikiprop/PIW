import React, { useState } from "react";
import classes from './gallery.module.css'; 

const imageFiles = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.jpg',
  'images/19.jpg',
  'images/20.jpg',
  'images/21.jpg',
];

const Gallery = () => {
  const [clickedImageIndex, setClickedImageIndex] = useState(null);

  const handleClickImage = (index) => {
    setClickedImageIndex(index === clickedImageIndex ? null : index);
  };

  return (
    <div>
      <h1 className={classes.title}>Welcome To 2023 Pwani-Innovation Week Gallery</h1>
      <div className={classes.gallery}>
        {imageFiles.map((image, index) => (
          <div
            className={`${classes.galleryItem} ${index === clickedImageIndex ? classes.zoomed : ''}`}
            key={index}
            onClick={() => handleClickImage(index)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={`Gallery item ${index + 1}`}
              height={350}
              width={450}
            />
          </div>
        ))}
      </div>
      <div className={classes.footer}>
        End of 2023 PIW Pictures
      </div>
    </div>
  );
};

export default Gallery;
