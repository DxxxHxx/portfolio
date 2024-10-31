import { IProjectList } from "../../types/interface";

export default function ProjectImg({
  previewImg,
  title,
}: Pick<IProjectList, "previewImg" | "title">) {
  return (
    <picture>
      <source style={imgStyle} srcSet={previewImg.webp} type="image/webp" />
      <source style={imgStyle} srcSet={previewImg.png} type="image/png" />
      <img style={imgStyle} src={previewImg.png} alt={`${title} image`} />
    </picture>
  );
}

const imgStyle = {
  width: "400px",
  height: "400px",
  borderRadius: "10px",
  marginBottom: "20px",
};
