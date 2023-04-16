import React, { useEffect, useRef, useState } from 'react';
import styles from '../styles/navbar.module.css';
import { ethers } from "ethers";
import { parseEther } from "ethers/utils";

function WalletConnect() {
  const connectButton = useRef(null);
  const [transactionHash, setTransactionHash] = useState(null);


  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      connectButton.current.innerHTML = `Address: ${account.slice(0, 6)}...${account.slice(-4)}`;

      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
      }
    }
    connectButton.current.addEventListener("click", connectAccount);

    return () => {
      connectButton.current.removeEventListener("click", connectAccount);
    };
  }, [connectButton]);

  async function demo() {
    console.log("sdubcusdkcbukdbsb");
    await ethereum.request({
      method: "eth_sendTransaction",
      params : {
        from: "0xA42468079F9b7275C442253a86A9beC5F503eC5A",
        to: "0x0",
        data: "0x0",
        value: parseEther('0.01')
      }
    });
    // const account = accounts[0];
    // const provider = new ethers.BrowserProvider(window.ethereum);

    console.log("Connect");

    // const transactionHash = await provider.send('eth_sendTransaction', params)
    // setTransactionHash(transactionHash);
    // console.log('transactionHash is ' + transactionHash);

    console.log("Connected");
  }
  return (
    <>
      <button ref={connectButton} className={styles.glow_btn}> Connect wallet </button>
      <button onClick={demo}>Send Transaction</button>
      {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
    </>
  );
}

export default function Home_Navbar() {
  return (
    <>
      <title>Artifract ♥</title>
      <link rel="icon" href="https://yaswanth-12.github.io/Artifract-frontend/favicon.ico" />
      <div className={styles.hnav}>
        <ul>
          <li>
            <img src="https://yaswanth-12.github.io/Artifract-frontend/Artifract_Logo.png" />
          </li>
          <img src="https://yaswanth-12.github.io/Artifract-frontend/search.png" className={styles.searchimage} />
          <input className={styles.searchBar} type="text" placeholder="Search" />

          <WalletConnect />
        </ul>
      </div>
    </>
  );
}
