import React from 'react';

const AlarmIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="currentColor"
    >
      <path
        fill="url(#a)"
        d="M0 0h30v30H0z"
      />
      <defs>
        <pattern
          id="a"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref="#b"
            transform="scale(.01111)"
          />
        </pattern>
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAACy0lEQVR4nO3cTYscVRQG4ENM1LjQEIMRPzCCyUb8CdmoGxN07cKlqJtoCLjwLyh+K44koD9DEKMoIaMi6EYSXOpOoiYTFb/ySDEVEcFkuqZ76p7q80BD03RX3ftyuaeKe6sjSimllFJKKaUMh+vxDD7Fxf61iqdx3SYOXS7DHfjK//uy+84/PyiDR/KVQv532DWyh+qni406MvhEy876nLxRp8dub1pYmyHotbHbmxL2mN3NY7c7BdyIp/AJ/hwQdPebj/Fkd6yx+9Mc7MULM04VV9Md63ncEssOO3AMFyzO+f4c22MZYR9O2TqfY38sExxe8Ci+0ug+FMsATwwsdPPSnfvxmDLrVwOXjO/SZMPGQyOP5P/q2vJITAkOjDQnX82FyRRIXIsvtKu7GtkR2eE57Xs2MsNt/WpI67q7yFsjK7wmjxcjI+zGr/L4GbsiGxyVz5HIpq/m2axGJri9kTvAWf2VqijiMXk9GlngVXm9HFngfXm9F1ngG3mdjSzwk7zORRb4XV6/RRaSiywkF1lILrKQXGQhuchCcpGF5CKDbo+b/LZHkpWV7HZF63CX/O6M1uE++d0brcPD8jsUres2o8jvWLQOJ+T3drQOn8lvNVqGmxrbmjvUH00/1dXtNzYdh6NVeMV0vBQtwjZ8azq+wzXRGjxoeu6P1uBd0/PO2LmWUkoppSwYbsCbyTcyDvUj3sDOrQh6ZXAzp2NlK26zfxm7l408Kretgs4edD+qa+rgrYWG3Ae9E6/3hWHZ/NA/dr34YrhoOD6HQI6P3Y/m4ewcgj4zdj+aZ73QbNbFsfvRPPP5N8fzY/ejeTgzh6C/Hrsfy1IMV8buR/PMZ+2xvbW+FuGDTYT80djtTwN34/sBIZ/DPWO3PxUc7IObJeSDY7c7JezHhxsI+WSN5PkE/kC3lba7bOuvs9f6991nVfhKKaWUUuKyvwGZ4fgjGUFBIwAAAABJRU5ErkJggg=="
          id="b"
          width="90"
          height="90"
        />
      </defs>
    </svg>
  );
};

export default AlarmIcon;
