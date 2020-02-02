import React from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './Home.css';


class Home extends React.Component {
    render() {
      return (
        <div className="fold">
            <Navbar />
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
        </div>
      );
    }
  }

export default Home;