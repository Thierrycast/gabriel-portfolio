
import styles from './Header.module.scss'
import ButtonMenu from './buttonMenu/index'
import Sidebar from  '../Sidebar'
import { useState } from 'react';
import {useMediaQuery} from 'react-responsive'


import Image from 'next/image';
import Logo1 from '@/assets/svgs/logo1.svg'
import LogoMobile from '@/assets/svgs/logomobile.svg' 


export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });


  const scrollToSection = (sectionId : string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 90; 
      const yOffset = section.getBoundingClientRect().top - headerHeight;

      window.scrollBy({
        top: yOffset,
      });
    }
  };
  
    return(
        <header className={styles.header} >
            {
                !isSmallScreen ? (
                    <Image src={Logo1} alt="logo" />
                ):(
                    <Image src={LogoMobile} alt="logo" />
                )
            }

            <ul className={styles.menuDesktop}>
                <li><a onClick={()=> scrollToSection('home')}>Início</a></li>
                <li><a onClick={()=> scrollToSection('about')}>Sobre</a></li>
                <li><a onClick={()=> scrollToSection('jobs')}>Trabalhos</a></li>
                <li><a onClick={()=> scrollToSection('contacts')}>Contatos</a></li>
            </ul>

           <div className={styles.menuMobile} >
            <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
           </div>
            

        </header>
    )
}

