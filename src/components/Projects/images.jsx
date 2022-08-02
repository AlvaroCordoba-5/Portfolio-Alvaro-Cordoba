import React, { useEffect, useState } from "react";

function Images({img1, img2, img3, img4}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [allImages, setAllImages] = useState([img1, img2, img3, img4]);

  useEffect(()=>{
    setInterval(()=>{
        setSelectedImage(selectedImage=>selectedImage < 3 ? selectedImage +1 : 0) 
    },3000)
    },[])
  

  return (
    <div>
      <img width={810} height={400} src={allImages[selectedImage]} />
      <button
        onClick={() => {
          if (selectedImage > 0) setSelectedImage(selectedImage - 1);
        }}
      >
        {" "}
        Prev
      </button>
      <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1);
        }}
      >
        {" "}
        Next
      </button>
    </div>
  );
}

export default Images;
