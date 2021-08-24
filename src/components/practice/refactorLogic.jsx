const temp = Object.values(C);
  
  const value = temp[0].map((n, i) => {
    console.log(value);
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
    return (
     
      <li onClick={() => {
        return (setChord(n), ChordChanger(n));
      }
      } key={i}>
        {n}
      </li>
     
    );
  });
  console.log(value);

  return (
    <>
      {/* <h1>{chord}</h1> */}
      <ul>Value: {value}</ul>
      <ul>Clicked Chord: {array}</ul>
      {/* <div>{MyPlanet()}</div> */}
    </>
  );


}
