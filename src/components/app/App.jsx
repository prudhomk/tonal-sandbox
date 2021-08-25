/* eslint-disable max-len */
import React, { useState } from 'react';
import { Planet } from 'react-planet';

import Chords from '../data/refactorChords';

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
  const [chord, setChord] = useState(Chords['C']);
  const [display, setDisplay] = useState([]);

  const chordialData = 'CHORDIAL_DATA';
  const chordArr = [];
  

  const ChordChanger = (temp) => {
    switch(temp) {
      case 'C':
        Chords['C'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['C']));
        break;
      case 'Db':
        Chords['Db'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Db'].chords));
        break;
      case 'D':
        Chords['D'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['D'].chords));
        break;
      case 'Dm':
        Chords['Dm'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Dm'].chords));
        break;
      case 'Eb':
        Chords['Eb'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Eb'].chords));
        break;
      case 'E':
        Chords['E'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['E'].chords));
        break;
      case 'Em':
        Chords['Em'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Em'].chords));
        break;
      case 'F':
        Chords['F'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['F'].chords));
        break;
      case 'Fm':
        Chords['Fm'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Fm'].chords));
        break;
      case 'Gb':
        Chords['Gb'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Gb'].chords));
        break;
      case 'G':
        Chords['G'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['G'].chords));
        break;
      case 'Gm':
        Chords['Gm'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Gm'].chords));
        break;
      case 'Ab':
        Chords['Ab'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Ab'].chords));
        break;
      case 'Abm':
        Chords['Abm'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Abm'].chords));
        break;
      case 'A':
        Chords['A'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['A'].chords));
        break;
      case 'Am':
        Chords['Am'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Am'].chords));
        break;
      case 'Bb':
        Chords['Bb'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Bb'].chords));
        break;
      case 'B':
        Chords['B'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['B'].chords));
        break;
      case 'Bm':
        Chords['Bm'].chords.map(n => console.log(n));
        setDisplay(display.concat(Chords['Bm'].chords));
        break;
      default:
        console.log('oops');
    }
  };
  
  
  
  const value = Chords['C'].chords.map((n, i) => {
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


  const array = display.map((n, i) => {
    console.log('array', array);
    return <li onClick={() => {
      return (setChord(n), ChordChanger(n));
    }
    } key={i}>
      {n}
    </li>;   
  });

  const ulGenerator = (arr) => {
    return (
      <ul >{arr}</ul>
    );
  };


  return (
    <div style={{ display: 'flex' }}>
      <div>
        {/* <h1>{chord}</h1> */}
            Value: {ulGenerator(value)}
          
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        New Arrays: {array}
      </div>
      {/* <ul>
        New Arrays: {array}
      </ul> */}
      {/* <div style={{ display: 'flex'}}>Clicked Chord: {array}</div> */}
      {/* <div>{MyPlanet()}</div> */}
    </div>
  );


}
