import React, { useEffect, useState } from "react";
import axios from "axios";

function PeopleInSpace() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`http://planetor.strangled.net/api/getpeopleinspace`)
      .then((res) => {
        setPeople(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {people.map((p) => (
        <li>
          {p.name}
          {p.craft}
        </li>
      ))}
    </div>
  );
}

export default PeopleInSpace;
