/* eslint-disable max-len */
import React, { useState } from 'react';

import { C, Db, D, Dm, E, Em, Eb, F, Fm, Gb, G, Gm, Ab, Abm, A, Am, Bb, B, Bm }  from '../data/chords';

export default function App() {
  const [chord, setChord] = useState(C);

  const ChordChanger = (temp) => {
    switch(temp) {
      case 'Db':
        Db.map(n => console.log(n));
        break;
      case 'D':
        D.map(n => console.log(n));
        break;
      default:
        console.log('oops');
    }
  };

  const value = C.map((n, i) => {
    return (
      <li onClick={() => {
        return (setChord(n), ChordChanger(n));
      }
      } key={i}>
        {n}
      </li>
    );

  });

 

  return (
    <>
      <h1>Chords</h1>
      <ul>{value}</ul>
    </>
  );


}
