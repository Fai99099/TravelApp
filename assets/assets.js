// export const Icons = {
//   back: require("./icons/arrow.png"),
// };
export const Thumbnails = {
  1: require("./image/1t.jpg"),
  2: require("./image/2t.jpg"),
  3: require("./image/3t.jpg"),
  4: require("./image/4t.jpg"),
  5: require("./image/5t.jpg"),
  6: require("./image/7t.jpg"),
};

export const Random_Thumbnail = () => {
  const rand = Math.floor(Math.random() * 5);
  return Thumbnails[rand];
};
