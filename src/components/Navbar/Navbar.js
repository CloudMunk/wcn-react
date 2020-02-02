import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
      return (
        <div className="navbar">
            <div class="logoHeader">
                <h1>When Crypto News</h1>
            </div>
            <div class="navbar--list">
                <p class="listItem">
                    Stories
                </p>
                <p class="listItem">
                    About
                </p>
                <p class="listItem">
                    Scams & Hacks
                </p>
                <p class="listItem">
                    Guides
                </p>
            </div>
            <div class="cryptos">
                <h2 class="listItem">BTC</h2>
                <h2 class="listItem">ETH</h2>
                <h2 class="listItem">FNT</h2>
            </div>
        </div>
      );
    }
  }

export default Navbar;