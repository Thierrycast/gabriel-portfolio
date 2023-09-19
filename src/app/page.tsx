"use client"

import styles from './page.module.css'

import Header from '@/components/Header'
import FirstSection from '@/components/FirstSection'
import About from '@/components/About'

export default function Home() {
  return (
      <>
        <Header/>
        <FirstSection/>
        <About/>
      </>
    
  )
}
