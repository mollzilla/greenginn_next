import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout'
import AppContainer from '../../components/AppContainer';

export default function GJApp() {

  return (
    <Layout>
      <h1>Hola mundo desde GJAPP</h1>
      <h2>
        <Link href="/">
          <a>Take me to Index</a>
        </Link>
      </h2>
      <AppContainer />
    </Layout>

  );
}