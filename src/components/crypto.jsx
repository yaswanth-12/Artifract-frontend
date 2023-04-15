// import { useEffect, useState } from "react";
// import provider from "../lib/ethers";
// import styles from '../styles/cards.module.css'

// export default function Showblock() {
//   const [blockNumber, setBlockNumber] = useState(null);
//   useEffect(() => {
//     provider.getBlockNumber().then((number) => setBlockNumber(number));
//   }, []);

//   return (
//     <div className={styles.alignment_crypto}>
//       <h1>Current Block Number</h1>
//       {blockNumber !== null ? (
//         <p>{blockNumber}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//       <p> <b>
//         2. Look into Account Abstraction and if there is any integrations required into nextjs.js functions <br />
//         3. Solidity and nextjs integrations.
//       </b> </p>
//     </div>
//   );
// }


// export default function CheckMetaMask() {
//   const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
//   const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

//   useEffect(() => {
//     if (window.ethereum) {
//       setIsMetaMaskInstalled(true);
//       const provider = new Web3Provider(window.ethereum);
//       provider
//         .getNetwork()
//         .then((network) => setIsMetaMaskConnected(true))
//         .catch((error) => console.log(error));
//     }
//   }, []);

//   return (
//     <div>
//       {isMetaMaskInstalled ? (
//         <>
//           {isMetaMaskConnected ? (
//             <p>MetaMask is connected to {networkName}</p>
//           ) : (
//             <p>Please connect to MetaMask to continue</p>
//           )}
//         </>
//       ) : (
//         <p>Please install MetaMask to continue</p>
//       )}
//     </div>
//   );
// }