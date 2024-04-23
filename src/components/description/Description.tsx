import "./description.css";

type DescriptionProps = {
  title: string;
  body: string;
  position: "left" | "right" | "center";
};

export default function Description({
  title,
  body,
  position,
}: DescriptionProps) {
  return (
    <div
      className="description"
      style={{
        marginLeft: position === "left" ? "10rem" : undefined,
        marginRight: position === "right" ? "10rem" : undefined,
      }}
    >
      <h2
        className="josefin_sans_bold"
        style={{ textAlign: position === "center" ? "center" : undefined }}
      >
        {title}
      </h2>
      <div
        className="description__underline"
        style={{
          transform:
            position === "left"
              ? "translateX(-10rem)"
              : position === "center"
              ? "translateX(-5rem)"
              : "translateX(0)",
        }}
      />
      <p style={{ maxWidth: position === "center" ? "50ch" : undefined }}>
        {body}
      </p>
    </div>
  );
}
