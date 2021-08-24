/* eslint-disable max-len */
import React, { useState } from 'react';
import { Planet } from 'react-planet';

import { C, Db, D, Dm, E, Em, Eb, F, Fm, Gb, G, Gm, Ab, Abm, A, Am, Bb, B, Bm } from '../data/chords';

export function MyPlanet() {
  return (
    <Planet
      centerContent={
        <div
          style={{
            height: 100,
            width: 100,
            borderRadius: '50%',
            backgroundColor: 'red',
          }}
        >C</div>
      }
      open
      autoClose
    >
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: 'blue',
        }}
      />
      <div
        style={{
          height: 70,
          width: 70,
          borderRadius: '50%',
          backgroundColor: 'orange',
        }}
      />
    </Planet>
  );
}

export default function App() {
  const [chord, setChord] = useState(C);
  const [display, setDisplay] = useState([]);

  const chordialData = 'CHORDIAL_DATA';
  const chordArr = [];


  const ChordChanger = (temp) => {
    switch (temp) {
      case 'C':
        C.map(n => console.log(n));
        setDisplay(display.concat(C));
        break;
      case 'Db':
        Db.map(n => console.log(n));
        setDisplay(display.concat(Db));
        break;
      case 'D':
        D.map(n => console.log(n));
        setDisplay(display.concat(D));
        break;
      case 'Dm':
        Dm.map(n => console.log(n));
        setDisplay(display.concat(Dm));
        break;
      case 'Eb':
        Eb.map(n => console.log(n));
        setDisplay(display.concat(Eb));
        break;
      case 'E':
        E.map(n => console.log(n));
        setDisplay(display.concat(E));
        break;
      case 'Em':
        Em.map(n => console.log(n));
        setDisplay(display.concat(Em));
        break;
      case 'F':
        F.map(n => console.log(n));
        setDisplay(display.concat(F));
        break;
      case 'Fm':
        Fm.map(n => console.log(n));
        setDisplay(display.concat(Fm));
        break;
      case 'Gb':
        Gb.map(n => console.log(n));
        setDisplay(display.concat(Gb));
        break;
      case 'G':
        G.map(n => console.log(n));
        setDisplay(display.concat(G));
        break;
      case 'Gm':
        Gm.map(n => console.log(n));
        setDisplay(display.concat(Gm));
        break;
      case 'Ab':
        Ab.map(n => console.log(n));
        setDisplay(display.concat(Ab));
        break;
      case 'Abm':
        Abm.map(n => console.log(n));
        setDisplay(display.concat(Abm));
        break;
      case 'A':
        A.map(n => console.log(n));
        setDisplay(display.concat(A));
        break;
      case 'Am':
        Am.map(n => console.log(n));
        setDisplay(display.concat(Am));
        break;
      case 'Bb':
        Bb.map(n => console.log(n));
        setDisplay(display.concat(Bb));
        break;
      case 'B':
        B.map(n => console.log(n));
        setDisplay(display.concat(B));
        break;
      case 'Bm':
        Bm.map(n => console.log(n));
        setDisplay(display.concat(Bm));
        break;
      default:
        console.log('oops');
    }
  };



  const value = C.map((n, i) => {
    console.log('value', value);
    return (

      <li onClick={() => {
        return (setChord(n), ChordChanger(n));
      }
      } key={i}>
        {n}
      </li>

    );
  });

<<<<<<< HEAD
  const array = ({ display }) => {
    const displayElements = display.map((n, i) => {
      <li onClick={() => {
        return (setChord(n), ChordChanger(n));
      }
      } key={i}>
        {n}
      </li>;
    });
    return <ul>{displayElements}</ul>;
  };

=======

  const array = display.map((n, i) => {
    console.log('array', array);
          const listItem = <li onClick={() => {
            return (setChord(n), ChordChanger(n));
          }
          } key={i}>
            {n}
          </li>;
    return <ul>{listItem}</ul>
  });

>>>>>>> 0ae312f450d5764ddb68ffac1df0ad90b6bd0906

  return (
    <div style={{ display: 'flex' }}>
      {/* <h1>{chord}</h1> */}
      <ul >
        Value: {value}
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        New Arrays: {array}
      </div>
      {/* <div style={{ display: 'flex'}}>Clicked Chord: {array}</div> */}
      {/* <div>{MyPlanet()}</div> */}
    </div>
  );


}
