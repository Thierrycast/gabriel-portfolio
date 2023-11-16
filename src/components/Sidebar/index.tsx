"use client";
import { Dispatch, SetStateAction } from "react";
import styles from './Sidebar.module.scss';
import scrollToSection from '@/utils/scrollToSection';

interface SidebarProps {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}

export default function Sidebar(props: SidebarProps) {
    const { isOpen, setIsOpen } = props;

    const hadleScroll = (sectionId: string) =>{
        setIsOpen(false)
        setTimeout(() => scrollToSection(sectionId), 500);
    }

    return (
        <div className={isOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu}>
            <ul>
                <li><a onClick={() => hadleScroll('home')}>Início</a></li>
                <li><a onClick={() => hadleScroll('about')}>Sobre</a></li>
                <li><a onClick={() => hadleScroll('jobs')}>Trabalhos</a></li>
                <li><a onClick={() => hadleScroll('contacts')}>Contatos</a></li>
            </ul>
        </div>
    );
}
