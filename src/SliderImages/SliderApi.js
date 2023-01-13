import img1 from "../asserts/slider2.webp";
import img2 from "../asserts/sileder1.jpg";
import img3 from "../asserts/slider3.webp";
export const SliderApi = [
  {
    src: `${img1}`,
    active: true,
    content: {
      h2: "Geeto or la jao",
      p: "Your favourite items you dont want to miss",
    },
    background: " bg-[#FFFFFF]",
    color: "black",
  },
  {
    src: `${img2}`,
    content: {
      h2: "Spend Less Get More",
      p: "Win your favourite products and save money",
    },
    background: " bg-[#528c1b]",
    color: "white",
  },
  {
    src: `${img3}`,
    active: true,
    content: {
      h2: "Amazing Deals througout the year",
      p: "Win as much as you can",
    },
    background: " bg-[#9F9CDD]",
    color: "white",
  },
];
