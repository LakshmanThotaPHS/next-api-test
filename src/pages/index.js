import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Home page</title>
    </Head>
    <div className='content'>
       <h1>HOME</h1>
    </div>
    </>
  )
}
