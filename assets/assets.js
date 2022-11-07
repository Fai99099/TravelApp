export const Icons = {
  back: require("./icons/arrow.png"),
};
export const Thumbnails = {
  1: require("./image/1.jpg"),
  2: require("./image/2.jpg"),
};

export const Random_Thumbnail = () => {
  const rand = Math.floor(Math.random() * 10);
  return Thumbnails[rand];
};
