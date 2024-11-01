import { IProjectImg } from "../../types/interface";

export default function ProjectImg({
  previewImg,
  title,
  isDetail = false,
}: IProjectImg) {
  const imgSize = isDetail ? "100%" : "400px";
  const imgStyle = {
    width: imgSize,
    height: imgSize,
    borderRadius: "10px",
    marginBottom: "20px",
  };

  return (
    <picture>
      <source srcSet={previewImg.webp} type="image/webp" />
      <source srcSet={previewImg.png} type="image/png" />
      <img
        loading="lazy"
        style={imgStyle}
        src={previewImg.png}
        alt={`${title} image`}
      />
    </picture>
  );
}
