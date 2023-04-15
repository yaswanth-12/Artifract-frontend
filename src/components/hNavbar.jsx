import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { ethers } from 'ethers';

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);
  // console.log("checking.......");
  async function connectWallet() {
    // console.log("checking.......");
    if (typeof window.ethereum !== 'undefined') {
      // console.log("checking.......");
      try {
        console.log("checking.......");
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // console.log("checking.......");
        setWalletAddress(accounts[0]);
      } catch (err) {
        // console.log("checking.......");
        console.error(err);
      }

      // console.log("checking.......");
    }
  }

  return (
    <>
      {walletAddress ? (
        <div>{walletAddress}</div>
      ) : (
        <button onClick={connectWallet} className={styles.glow_btn}>
          Connect wallet
        </button>
      )}
    </>
  );
}

export default function Home_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico" />
      <div className={styles.hnav}>
        <ul>
          <li>
            <img src="https://github.com/yaswanth-12/Artifract-frontend/Artifract_Logo.png" />
          </li>
          <img src="https://github.com/yaswanth-12/Artifract-frontend/search.png" className={styles.searchimage} />
          <input className={styles.searchBar} type="text" placeholder="Search" />

          <WalletConnect />
        </ul>
      </div>
    </>
  );
}
