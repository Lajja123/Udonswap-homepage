// pages/index.js
import Image from "next/image";
import styles from "./page.module.css";
import flower from './flower.png'
import star from './star.svg'
import udonswap from './Udonswap.gif'
import Navbar from './navbar'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <Navbar />
      <div className={styles.boxContainer1}>
        <div className={styles.text1}>
          Crafting Seamless Trades, <br />
          Bowl by Bowl <Image src={star} alt="shine" className={styles.star} />
       </div>
       <div className={styles.textsmall}>
          Crafting <br />Seamless <Image src={star} alt="shine" className={styles.star} /> 
          <br />Trades,
          Bowl <br /> by Bowl 
       </div>
      </div>

      <div className={styles.boxContainer2}>
        <div className={styles.left}>
        <Image src={udonswap} loading="lazy"  alt="logo" className={styles.tokenImg} />
        </div>

        <div className={styles.right}>
          <div className={styles.text2}>
            Experience Seamless Trading, <br /> Instant Liquidity, Unmatched <br />Security, Experience the Future of <br />Decentralized Finance.
          </div>
        </div>
      </div>

    </main>
    <div className={styles.flower}>
    {/* <Image src={flower} alt="Box Image" className={styles.img} /> */}
    </div>
    </>
  );
}
