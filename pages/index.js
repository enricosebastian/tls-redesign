import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>The LaSallian - Next.js version</h1>
      <Link href='/presents/1'>Article</Link><br/>
      <Link href='/by/sebastian'>by Sebastian</Link><br/>
      <Link href='/section/university'>Section</Link><br/>
    </>
  )
}
