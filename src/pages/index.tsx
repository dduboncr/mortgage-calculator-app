import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Calculator from './calculator'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>


      <main className={styles.main}>
        <Calculator/>
      </main>
    </div>
  )
}



export default Home
