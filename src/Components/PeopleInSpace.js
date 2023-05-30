import React, { useEffect, useState } from "react";
import axios from "axios";
import Styles from "./ComponentStyles/peopleinspace.module.css";

function PeopleInSpace() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`http://apiplanetor.strangled.net/getpeopleinspace`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={Styles.text}>
      {people.map((p) => (
        <li>
          {p.name} is currently on the spacecraft: {p.craft}
        </li>
      ))}
    </div>
  );
}

export default PeopleInSpace;
