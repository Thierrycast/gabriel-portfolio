"use client"

import styles from './page.module.css'

import Header from '@/components/Header'
import FirstSection from '@/components/FirstSection'
import About from '@/components/About'
import JobsSection from "@/components/JobsSection";
import ContactsSection from '@/components/ContactsSection'

export default function Home() {
  return (
      <>
        <Header/>
        <FirstSection/>
        <About/>
        <JobsSection/>
        <ContactsSection/>
      </>
    
  )
}
