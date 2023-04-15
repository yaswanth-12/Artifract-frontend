import React from 'react'
import styles from '../styles/vault_cards.module.css'
import Image from 'next/image'

export default function Cards() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.flip_container}>
                        <div className={styles.flipper}>
                            <img src="/2.avif" alt="Image" className={styles.front} />
                            <img src="/1.avif" alt="Image Flipped" className={styles.back} />
                        </div>
                    </div>

                </div>

                <div className={styles.col2}>
                    <div className={styles.deposit}>
                        tokenID, no of fractions, minimum buyout wait time, minimum price.
                    </div>
                    <div className={styles.initiate_buyout}>
                            tokenID
                    </div>
                    <div className={styles.bid_onNFT}>
                            tokenID
                    </div>
                    <div className={styles.end_bid}>
                            tokenID
                    </div>
                    <div className={styles.withdraw}>
                            tokenID
                    </div>
                </div>
            </div>
        </>
    )
}
