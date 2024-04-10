"use client";
const { TypeAnimation } = require("react-type-animation");

export default function TypeAnimationComponent() {
  return (
    <TypeAnimation
      sequence={[
        "Kritóf",
        1000,
        "Fullstack Dev",
        1000,
        "KIOSK Dev",
        1000,
        "Business Owner",
        1000,
      ]}
      wrapper="span"
      speed={20}
      repeat={Infinity}
    />
  );
}
