import { ImageResponse } from "next/og";

import { socialImageAlt } from "@/lib/site-metadata";

export const alt = socialImageAlt;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f5f2eb",
          color: "#142731",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid #d8d4cb",
            display: "flex",
            height: "100%",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#142731",
              bottom: 0,
              display: "flex",
              height: "38%",
              position: "absolute",
              right: 0,
              width: "31%",
            }}
          />
          <div
            style={{
              background: "#b78045",
              display: "flex",
              height: "28%",
              position: "absolute",
              right: "31%",
              top: 0,
              width: "20%",
            }}
          />
          <div
            style={{
              border: "2px solid #855a30",
              borderRadius: "999px",
              display: "flex",
              height: 116,
              position: "absolute",
              right: "23%",
              top: "22%",
              width: 116,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "72px",
              width: "68%",
            }}
          >
            <div
              style={{
                color: "#855a30",
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Yapı ve Mimarlık
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginTop: 28,
              }}
            >
              İkizler Yapı
            </div>
            <div
              style={{
                color: "#626d72",
                display: "flex",
                fontSize: 27,
                lineHeight: 1.4,
                marginTop: 28,
              }}
            >
              İşlevi, bağlamı ve yaşamı birlikte düşünen hayalî portföy
              projesi.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
