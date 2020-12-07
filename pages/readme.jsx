import React from 'react';
import Link from 'next/link';
// https://developerhandbook.com/react/how-to-set-up-nextjs-material-ui/

export default function GJApp() {

  return (
    <>
      <h1>Hola mundo desde readme</h1>
      <h2> This is my readme</h2>




      <h2>
        <Link href="/">
          <a>Take me to Index</a>
        </Link>
      </h2>
    </>
  );
}