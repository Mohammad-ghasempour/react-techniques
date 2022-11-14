import React, { useState } from "react";
import "./imageSlider.css";
import { ImagePreview } from "./ImagePreview";
import { IterateButton } from "./IterateButton";
import { BulletSlider } from "./BulletSlider";

const imagesList = [
  {
    imageUrl:
      "https://media.istockphoto.com/id/1366255168/photo/grandfather-and-grandson-fishing-at-sunset-in-summer-quebec-canada.jpg?s=612x612&w=0&k=20&c=1VR4ptl9399GMAsUTM_OyXBPQnN33z6_J7tv3_XjHmQ=",
    id: 1,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/912871196/photo/portrait-of-a-fly-fisherman-looking-for-sea-trout.jpg?s=612x612&w=0&k=20&c=f7tARo7O2y9aRwHE8D_P14b-lu9s2dyxgDNPnrdEFdk=",
    id: 2,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1342441625/photo/fishing-tackle-spinning-rod-with-box-of-lures-and-equipment-on-wooden-background-copy-space.jpg?s=612x612&w=0&k=20&c=RrG-xUGP3KSBDfhRUgdawyqLh7C1A7mpWgz4hudLZ1I=",
    id: 3,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/598804342/photo/kids-catching-fish.jpg?s=612x612&w=0&k=20&c=mYXA65W3kDNsoqwGgNBXNTnexKXumaizDtNgP3UJo3g=",
    id: 4,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1306308972/photo/portrait-of-an-young-woman-fishing-while-camping-next-to-beautiful-lake.jpg?s=612x612&w=0&k=20&c=Fyn50bjm7TUbF8L6LwdQwHf5kLVvIO5GVewmtul3vhU=",
    id: 5,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1340128751/photo/angler.jpg?s=612x612&w=0&k=20&c=iYJvJxRstyCp53ePu1G-pj26DbuNn5Cay2tYChvzdSE=",
    id: 6,
  },
  {
    imageUrl:
      "https://media.istockphoto.com/id/1092160614/photo/fisherman-with-rod-spinning-reel-on-the-river-bank-sunrise-fishing-for-pike-perch-carp-fog.jpg?s=612x612&w=0&k=20&c=lzfYEQLvEEgbmPD7tiWQufp5tXVUquoOozdUyQCzJG4=",
    id: 7,
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/190294/pexels-photo-190294.jpeg?auto=compress&cs=tinysrgb&w=600",
    id: 8,
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/1143921/pexels-photo-1143921.jpeg?auto=compress&cs=tinysrgb&w=600",
    id: 9,
  },
];
const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(imagesList[3]);

  const iterateImages = (actionName) => {
    const currentIndex = imagesList.indexOf(currentImage)
  

    switch (actionName) {
      case "Previous":
        currentIndex !== 0 ? setCurrentImage(imagesList[(currentIndex - 1)]) : setCurrentImage(imagesList[(currentIndex)])
        


      // setCurrentImage(imagesList[(currentIndex - 1)]);             
        break;
      case "Next":
        //setCurrentImage(imagesList[(currentIndex + 1)]);
        currentIndex !== (imagesList.length-1) ? setCurrentImage(imagesList[(currentIndex + 1)]) : setCurrentImage(imagesList[(currentIndex)])
        break;
    }
 
  };
  const sliderChange =(index)=>{
    setCurrentImage(imagesList[index])
  }

  return (
    <div>
      <div className="flex">
        <IterateButton type={"Previous"} action={iterateImages} />
        <ImagePreview image={currentImage} />
        <IterateButton type={"Next"} action={iterateImages} />
      </div>
      <div>
        <BulletSlider imageLength={imagesList.length} changeImage={sliderChange} />
      </div>
    </div>
  );
};

export default ImageSlider;
