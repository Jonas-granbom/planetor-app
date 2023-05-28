import React from "react";
import CelestialBodyData from "./Data/CelestialBodyData";
import Styles from "./ComponentStyles/celestialBody.module.css";
import Mercury from ".././Assets/mercury.webp";
import Venus from ".././Assets/venus.webp";
import Earth from ".././Assets/earth.webp";
import Mars from ".././Assets/mars.webp";
import Jupiter from ".././Assets/jupiter.webp";
import Saturn from ".././Assets/saturn.png";
import Uranus from ".././Assets/uranus.webp";
import Neptune from ".././Assets/neptune.webp";

function CelestialBody() {
  return (
    <ul>
      <li className={Styles.Planets}>
        <img src={Mercury} />

        <CelestialBodyData id={1} />
      </li>
      <li className={Styles.Planets}>
        <img src={Venus} />

        <CelestialBodyData id={2} />
      </li>
      <li className={Styles.Planets}>
        <img src={Earth} />

        <CelestialBodyData id={3} />
      </li>
      <li className={Styles.Planets}>
        <img src={Mars} />

        <CelestialBodyData id={4} />
      </li>
      <li className={Styles.Planets}>
        <img src={Jupiter} />

        <CelestialBodyData id={5} />
      </li>
      <li className={Styles.Planets}>
        <img src={Saturn} />

        <CelestialBodyData id={6} />
      </li>
      <li className={Styles.Planets}>
        <img src={Uranus} />

        <CelestialBodyData id={7} />
      </li>
      <li className={Styles.Planets}>
        <img src={Neptune} />

        <CelestialBodyData id={8} />
      </li>
    </ul>
  );
}

export default CelestialBody;
