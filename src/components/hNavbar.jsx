import React, { useEffect, useRef } from 'react';
import styles from '../styles/navbar.module.css';
import { ethers } from "ethers";
import { parseEther } from "ethers/utils";

let account;

function WalletConnect() {
  const connectButton = useRef(null);

  useEffect(() => {
    // Web3 Browswer Detection
    if (typeof window.ethereum !== "undefined") {
      console.log("Injected Web3 Wallet is installed!");
    }

    //Click Event
    connectButton.current.addEventListener("click", () => {
      connectAccount();
    });

    //Connect Account Function
    async function connectAccount() {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      account = accounts[0];
      connectButton.current.innerHTML = "Address: " +
        account[0] +
        account[1] +
        account[2] +
        account[3] +
        account[4] +
        account[5] +
        "..." +
        account[38] +
        account[39] +
        account[40] +
        account[41];
      if (typeof window.ethereum !== "undefined") {
        const provider = new ethers.BrowserProvider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();

        // console.log(await signer);
        const tx = await signer.sendTransaction({
          to: "0x0",
          value: parseEther("0.001")
        });
      };

    }
  }, [connectButton]);

  return (
    <button ref={connectButton} className={styles.glow_btn}> Connect wallet </button>
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
