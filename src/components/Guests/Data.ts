import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpg";
import image4 from "../../assets/image4.jpg";

interface SliderTypes {
  data: {
    img?: string;
    title?: string;
  }[];
}

export const data: SliderTypes["data"] = [
  {
    img: image1,
    title: "THE DEAF",
  },
  {
    img: image2,
    title: "THE DEAF",
  },
  {
    img: image3,
    title: "THE DEAF",
  },
  {
    img: image4,
    title: "THE DEAF",
  },
];
