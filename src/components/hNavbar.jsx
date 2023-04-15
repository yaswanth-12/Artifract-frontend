import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { useState } from "react";
import { ethers } from "ethers";


export default function Home_Navbar() {

  const [connectedAddress, setConnectedAddress] = useState(null);

  const connectToWallet = async () => {
    if (window.ethereum) {
      // use BrowserProvider to connect to wallet
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        // request access to the user's wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = provider.getSigner();
        // get the connected wallet's address
        const address = await signer.getAddress();
        setConnectedAddress(address);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('Metamask not installed.');
    }
  };


  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://github.com/yaswanth-12/Artifract-frontend/favicon.ico"></link>
      <div className={styles.hnav}>
        <ul>
          <li> <img src='/Artifract_Logo.png' ></img> </li>
          <img src='/search.png' className={styles.searchimage}></img>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search"
          />

          {/* <Link href="/profile"> */}
          {/* <button className={styles.glow_btn} >Connect wallet</button> */}
          <button className={styles.glow_btn} onClick={connectToWallet}>Connect wallet</button>
          {/* </Link> */}
        </ul>
      </div>
    </>
  )
}