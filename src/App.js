import React from "react";
import { gsap } from "gsap";

export const App = () => {
  gsap.fromTo(
    "#h1",
    { color: "red" },
    { color: "blue", duration: 2 }
  );

  return <h1 id="h1">Hello world 12343</h1>;
};
