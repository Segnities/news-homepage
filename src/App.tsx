import React from 'react';

import Header from "./components/Header/Header";

import styles from './App.module.css'
import { nanoid } from 'nanoid';
import Content from './components/Content/Content';

function App() {

  const menuOptions = [
    {
      id: nanoid(),
      title: "Home",
    },
    {
      id: nanoid(),
      title: "New",
    },
    {
      id: nanoid(),
      title: "Popular",
    },
    {
      id: nanoid(),
      title: "Trending",
    },
    {
      id: nanoid(),
      title: "Categories",
    },
  ];

  return (
    <div className={styles["App"]}>
      <Header menuOptions={menuOptions}/>
      <Content/>
    </div>
  )
}

export default App;
