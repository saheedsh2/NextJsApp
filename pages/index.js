import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'



export default function Home() {
  return (
    <>
    <Head> 
      <title>Verifed News | Home</title>
      <meta name='keywords' content='VerifedNews' />
    </Head>
   <div >

    <h2 className={styles.title}>Home Page</h2>
    <p className={styles.text}>The Quick Brown Fox Jumps Over The Lazy Dog</p>
    <p className={styles.text}>The Quick Brown Fox Jumps Over The Lazy Dog</p>
    <Link className={styles.btn} href="/ninjas">See Ninjas Listings</Link>
  
    </div>
    </>
  )
}
