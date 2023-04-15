import React from 'react'
import styles from '../styles/vault_cards.module.css'
import Image from 'next/image'

export default function Cards() {
    return (
        <>
            <div className={styles.align_center}>
                <div className={styles.flip_container}>
                    <div className={styles.flipper}>
                        <img src="/2.avif" alt="Image" className={styles.front} />
                        <img src="/1.avif" alt="Image Flipped" className={styles.back} />
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.col1}>
                    <h3> Desposit </h3>
                </div>
                <div className={styles.col2}>
                    <div className={styles.deposit}>
                        <form>
                            <input type="text" placeholder="tokenID" className={styles.inputbox} ></input> <br />
                            <input type="text" placeholder="No of fractions" className={styles.inputbox} ></input> <br />
                            <input type="text" placeholder="minimum buyout wait time" className={styles.inputbox} ></input> <br />
                            <input type="text" placeholder="minimum price" className={styles.inputbox} ></input>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> Initiate_buyout </h3>
                </div>
                <div className={styles.col22}>
                    <div className={styles.initiate_buyout}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} ></input>
                    </div>
                </div>
            </div>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> End_bid </h3>
                </div>
                <div className={styles.col22}>
                    <div className={styles.end_bid}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} ></input>
                    </div>
                </div>
            </div>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> bid_onNFT </h3>
                </div>
                <div className={styles.col22}>
                    <div className={styles.bid_onNFT}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} ></input>
                    </div>
                </div>
            </div>

            <div className={styles.container1}>
                <div className={styles.col11}>
                    <h3> Withdraw </h3>
                </div>
                <div className={styles.col22}>
                    <div className={styles.withdraw}>
                        <input type="text" placeholder="tokenID" className={styles.inputbox} ></input>
                    </div>
                </div>
            </div>
        </>
    )
}
