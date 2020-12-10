import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>My React App</h1>
        <Footer />
      </div>
    )
  }
  
}

export default App;
