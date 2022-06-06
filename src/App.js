import './App.css';

import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

import { zodiac } from './data.js';



function App() {
  return (
    <div className="App">
      <Header props={name} />
      <Main zodiacs={zodiac} />
      <Footer year='1994' />
    </div>
  );
}

export default App;
