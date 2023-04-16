import React from 'react'
import styles from '../styles/vault_cards.module.css'
import { Contract } from 'ethers';
import { VAULT_ADDRESS, VAULT_ABI } from '../../constants/index'
import { signer } from './hNavbar';
import { parseEther } from 'ethers/utils';
import {BigNumber} from 'ethers';

let tokenID;
let no_of_fragments;
let minimum_price;

async function deposit(e) {

    e.preventDefault();
    tokenID = document.getElementById('tokenID');
    no_of_fragments = document.getElementById('fract');
    minimum_price = document.getElementById('price');
    // console.log(signer)
    let contract = new Contract(VAULT_ADDRESS,VAULT_ABI,signer);

    let tx = await (contract.deposit(tokenID.value, no_of_fragments.value, parseEther(`${minimum_price.value}`)))
    console.log(tx);
}

function buyout(e) {
    e.preventDefault();
    tokenID = document.getElementById('tokenID1');
}

function bidNFT(e) {
    e.preventDefault();
    tokenID = document.getElementById('tokenID2');
}

function endBid(e) {
    e.preventDefault();
    tokenID = document.getElementById('tokenID3');
}

async function withdraw(e) {
    // console.log(signer);
    e.preventDefault();
    tokenID = document.getElementById('tokenID4');
    let contract = new Contract(VAULT_ADDRESS,VAULT_ABI,signer);
    let tx = await (contract.withdraw(tokenID.value));
    console.log(tx);

}



export default function Cards() {
    return (
        <>
            <div className={styles.heading}>
                <h3>BAYC Vault</h3>
            </div>

            <div className={styles.align_center}>
                <div className={styles.flip_container}>
                    <div className={styles.flipper}>
                        <img src="https://yaswanth-12.github.io/Artifract-frontend/BAYC_Collections.png" alt="Image" className={styles.front} />
                        <img src="https://yaswanth-12.github.io/Artifract-frontend/BAYC.png" alt="Image Flipped" className={styles.back} />
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.col1}>
                    <h3> Desposit </h3>
                    <p>
                        Deposit your BAYC
                        token into the vault.
                    </p>
                </div>
                <div className={styles.col2}>
                    <div className={styles.deposit}>
                        <form>
                            <input type="text" placeholder="Token ID" className={styles.inputbox} id='tokenID' ></input>
                            <input type="text" placeholder="No of fractions" className={styles.inputbox} id='fract'></input>
                            <input type="text" placeholder="minimum price" className={styles.inputbox} id='price'></input>
                            <button type='submit' className={styles.submitButton} onClick={deposit} > Deposit </button>
                        </form>
                    </div>
                </div>
            </div>

            <pre className={styles.white}>
                -----------------------------------   Or   -----------------------------------
            </pre>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> Initiate BuyOut </h3>
                    <p>
                        Initiate a buyout on
                        a Token ID.
                    </p>
                </div>
                <div className={styles.col22}>
                    <div className={styles.initiate_buyout}>
                        <input type="text" placeholder="TokenID" className={styles.inputbox} id='tokenID1'></input>
                        <button type='submit' className={styles.submitButton} onClick={buyout} >BuyOut</button>
                    </div>
                </div>
            </div>

            <pre className={styles.white}>
                -----------------------------------   Or   -----------------------------------
            </pre>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> Bid on NFT </h3>
                    <p>
                        Bid on a BAYC NFT.
                    </p>
                </div>
                <div className={styles.col22}>
                    <div className={styles.end_bid}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} id='tokenID2' ></input>
                        <button type='submit' className={styles.submitButton} onClick={bidNFT}>Bid on NFT </button>
                    </div>
                </div>
            </div>

            <pre className={styles.white}>
                -----------------------------------   Or   -----------------------------------
            </pre>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> End Bid  </h3>
                    <p>
                        End BAYC token bid.
                    </p>
                </div>
                <div className={styles.col22}>
                    <div className={styles.bid_onNFT}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} id='tokenID3' ></input>
                        <button type='submit' className={styles.submitButton} onClick={endBid}>End Bid</button>
                    </div>
                </div>
            </div>

            <pre className={styles.white}>
                -----------------------------------   Or   -----------------------------------
            </pre>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> Withdraw </h3>
                    <p>
                        Withdraw BAYC token.
                    </p>
                </div>
                <div className={styles.col22}>
                    <div className={styles.withdraw}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} id='tokenID4' ></input>
                        <button type='submit' className={styles.submitButton} onClick={withdraw}> Withdraw </button>
                    </div>
                </div>
            </div>
        </>
    )
}
