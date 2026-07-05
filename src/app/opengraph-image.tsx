import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jude Clottey - Fullstack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #12141d 0%, #1a1d2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 32,
            color: "#6244c5",
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          JC
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Jude Clottey
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#ffc448",
            textAlign: "center",
          }}
        >
          Fullstack Web Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
