import Container from "react-bootstrap/Container";
import CelestialBody from "./CelestialBody";
import { useState } from "react";
import PeopleInSpace from "./PeopleInSpace";
import Styles from "./ComponentStyles/planetorNavStyle.module.css";
import Home from "./Home";

function PlanetorNav() {
  const [displayPlanets, setDisplayPlanets] = useState(false);
  const [displayPeople, setDisplayPeople] = useState(false);
  const [displayHome, setDisplayHome] = useState(true);

  const handleDisplayPlanet = () => {
    setDisplayPlanets((isVisible) => !isVisible);
    setDisplayPeople(false);
    setDisplayHome(false);
  };
  const handleDisplayPeople = () => {
    setDisplayPeople((isVisible) => !isVisible);
    setDisplayPlanets(false);
    setDisplayHome(false);
  };
  const handleDisplayHome = () => {
    setDisplayHome((isVisible) => !isVisible);
    setDisplayPlanets(false);
    setDisplayPeople(false);
  };

  return (
    <div className={Styles.navbar}>
      <Container className={Styles.navigation}>
        <button
          className={Styles.logo}
          onClick={() => {
            handleDisplayHome();
          }}
        >
          <strong1>PLANETOR</strong1>
          <div id={Styles.containerstars}>
            <div id={Styles.stars}></div>
          </div>

          <div id={Styles.glow}>
            <div class={Styles.circle}></div>
            <div class={Styles.circle}></div>
          </div>
        </button>
        <button className={Styles.btn2} onClick={handleDisplayPlanet}>
          PLANETS
        </button>
        <button className={Styles.btn2} onClick={handleDisplayPeople}>
          PEOPLE IN SPACE
        </button>
      </Container>

      {displayPlanets && <CelestialBody />}
      {displayPeople && <PeopleInSpace />}
      {displayHome && <Home />}
    </div>
  );
}

export default PlanetorNav;
