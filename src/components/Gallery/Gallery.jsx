import React from "react";
import classes from './gallery.module.css'; // Corrected the import path

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
];

const Gallery = () => {
  return (
    <div>
      <h1 className={classes.title}>Gallery</h1> {/* Added title */}
      <div className={classes.gallery}>
        {imageFiles.map((image, index) => (
          <div className={classes.galleryItem} key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${image}`}
              alt={`Gallery item ${index + 1}`} // Updated alt text
              height={350}
              width={450}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
