"use client";

import { useState } from 'react';
import styles from './Header.module.scss';
import ButtonMenu from './buttonMenu/index';
import Sidebar from '../Sidebar';
import Image from 'next/image';
import Logo1 from '@/assets/svgs/logo1.svg';
import LogoMobile from '@/assets/svgs/logomobile.svg';
import scrollToSection from '@/utils/scrollToSection'; 

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <Image onClick={() => scrollToSection('home')} src={Logo1} alt="logo" className={styles.logo_desktop} />
      <Image onClick={() => scrollToSection('home')} src={LogoMobile} alt="logo" className={styles.logo_mobile} priority />

      <ul className={styles.menuDesktop}>
        <li><a onClick={() => scrollToSection('home')}>Início</a></li>
        <li><a onClick={() => scrollToSection('about')}>Sobre</a></li>
        <li><a onClick={() => scrollToSection('jobs')}>Trabalhos</a></li>
        <li><a onClick={() => scrollToSection('contacts')}>Contatos</a></li>
      </ul>

      <div className={styles.menuMobile}>
        <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}
