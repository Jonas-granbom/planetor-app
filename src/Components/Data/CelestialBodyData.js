import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./celestialBodyData.module.css";

function CelestialBodyData(props) {
  const [celestialBody, setCelestialBody] = useState({});
  

  useEffect(() => {
    axios
      .get(`http://planetor.strangled.net/api/celestialbody/${props.id}`)
      .then((res) => {
        setCelestialBody(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);
  return (
    <div className={Styles.text}>
     

      <div>
        <ul>Planet: {celestialBody.name}</ul>
        <ul>Mass: {celestialBody.mass}</ul>
        <ul>Density: {celestialBody.density}</ul>
        <ul>Diameter: {celestialBody.diameter}</ul>
        <ul>Gravity: {celestialBody.gravity}</ul>
        <ul>Day in earth hours: {celestialBody.day_in_earth_hours}</ul>
        <ul> Year in earth years {celestialBody.year_in_earth_days}</ul>
        <ul>Moons: {celestialBody.moons}</ul>
        <ul> Average temperature: {celestialBody.average_temperature}</ul>
      </div>
    </div>
  );
}

export default CelestialBodyData;
