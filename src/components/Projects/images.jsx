import React, { useEffect, useState } from "react";
import { BsChevronCompactRight } from "react-icons/bs";
import { BsChevronCompactLeft } from "react-icons/bs";


function Images({img1, img2, img3, img4}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([img1, img2, img3, img4]);

  useEffect(()=>{
    setInterval(()=>{
        setSelectedImage(selectedImage=>selectedImage < 3 ? selectedImage +1 : 0) 
    },3000)
    },[])
  

  return (
    <div className="container_projects">
      <button className="button"
        onClick={() => {
          if (selectedImage > 0) setSelectedImage(selectedImage - 1);
        }}
      >
        {" "}
        <BsChevronCompactLeft />
      </button>
      <img width={810} height={400} src={allImages[selectedImage]} />
      <button className="button"
        onClick={() => {
          if (selectedImage < allImages.length - 1)
          setSelectedImage(selectedImage + 1);
        }}
      >
        {" "}
        <BsChevronCompactRight></BsChevronCompactRight>
      </button>
    </div>
  );
}

export default Images;
