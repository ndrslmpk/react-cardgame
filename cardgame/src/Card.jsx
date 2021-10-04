import * as React from 'react';

import './Card.css';
import PropTypes from 'prop-types';
import Animal from './Animal';

export default function Card({ animal, uncovered }) {
  const front = (
    <div className="card">
      <h1>{animal.name ? animal.name : 'Unbekannt'}</h1>
      {animal.image && (
        <img
          alt="Elefant"
          height="200"
          width="200"
          src={`${process.env.PUBLIC_URL}/${animal.image}`}
        />
      )}
      <table>
        <tbody>
          {Object.keys(Animal.properties).map((property) => {
            const animalProp = Animal.properties[property];
            return (
              <tr key={property}>
                <td>{animalProp.label}</td>
                <td>
                  {animal[property]}&nbsp;
                  {animalProp.unit}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  const back = <div className="card back" />;
  if (uncovered) {
    return front;
  }
  if (!uncovered) {
    return back;
  }
}

Card.propTypes = {
  uncovered: PropTypes.bool.isRequired,
  animal: PropTypes.instanceOf(Animal).isRequired,
};
