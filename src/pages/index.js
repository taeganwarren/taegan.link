import React from 'react';

import links from '../links.json';
import Container from '../components/Container';

export default function Home() {
  return (
    <div className="App">
      <Container links={links}/>
    </div>
  );
}
