
import styles from './Header.module.scss'
import ButtonMenu from './buttonMenu/index'
import Sidebar from  '../Sidebar'
import { useState } from 'react';
import {useMediaQuery} from 'react-responsive'




export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const isSmallScreen = useMediaQuery({ maxWidth: 800 });
  
    return(
        <header className={styles.header} >
            {
                !isSmallScreen ? (
                    <img src="/svgs/logo1.svg" alt="logo" />
                ):(
                    <img src="/svgs/logomobile.svg" alt="logo" />
                )
            }

            <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/trabalhos">Trabalhos</a></li>
                <li><a href="/contatos">Contatos</a></li>
            </ul>

           <div className={styles.menuMobile} >
            <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
           </div>
            

        </header>
    )
}

