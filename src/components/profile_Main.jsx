import React from 'react'
import styles from '../styles/profile_main.module.css'
import { useState } from 'react';
import styles1 from '../styles/PopupMenu.module.css';

function CopyButton() {
    const [buttonText, setButtonText] = useState('Copy Address');
    const textToCopy = 'Hello World!';

    const copyText = async () => {
        await navigator.clipboard.writeText(textToCopy);
        setButtonText('Copied!');
        setTimeout(() => {
            setButtonText('Copy Address');
        }, 2000);
    };

    return (
        <button className={styles.button1} onClick={copyText}>{buttonText}</button>
    );
}


function PopupMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.popup}>
            <button className={styles.button2} onClick={toggleMenu}>
                Social Media
            </button>
            {isOpen && (
                <div className={styles1.popupContent}>
                    <a href="https://www.facebook.com">Facebook</a>
                    <a href="https://www.twitter.com">Twitter</a>
                    <a href="https://www.instagram.com">Instagram</a>
                    <a href="https://www.linkedin.com">LinkedIn</a>
                </div>
            )}
        </div>
    );
}

export default function Main() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <img src="https://yaswanth-12.github.io/Artifract-frontend/2.avif"></img>
                </div>

                <div className={styles.col2}>
                    <p> <span className={styles.orange}> Address: </span> <span className={styles.blue}> 0x86d...1672 </span> </p>
                    <div className={styles.alignment}>
                        <CopyButton />
                        <PopupMenu />
                    </div>

                </div>
            </div>

            <div className={styles.eligibile_NFTs}>
                    <h3>Eligibile NFTs</h3>
            </div>

        </>
    )
}
