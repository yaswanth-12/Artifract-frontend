import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link';
import { ethers } from 'ethers';

async function connectToWallet() {
  try {
    // Check for provider (MetaMask)
    if (window.ethereum) {
      // Use MetaMask provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      // Request account access from user
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Get signer
      const signer = provider.getSigner();
      // Get accounts
      const accounts = await provider.listAccounts();
      // Log accounts
      console.log(accounts);
    } else {
      console.log('No web3 provider detected');
    }
  } catch (err) {
    console.error(err);
  }
}



export default function Home_Navbar() {
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