import { Dispatch, SetStateAction } from "react"
import { FaTimes } from 'react-icons/fa'
import styles from './Sidebar.module.scss'


interface SidebarProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
}

export default function Sidebar(props : SidebarProps) {

    const {isOpen, setIsOpen} = props

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };


    return(
        <div className={isOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu}>
          <div>
          
                <a href="/">Início</a>
                <a href="/sobre">Sobre</a>
                <a href="/trabalhos">Trabalhos</a>
                <a href="/contatos">Contatos</a>
               
          </div>
        </div>
  );
    
}