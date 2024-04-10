"use client";
const { TypeAnimation } = require("react-type-animation");

export default function TypeAnimationComponent() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Kritóf",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Fullstack Dev",
        1000,
        "KIOSK Dev",
        1000,
        "Business Owner",
        1000,
      ]}
      wrapper="span"
      speed={70}
      repeat={Infinity}
    />
  );
}
