"use client"

import style from './About.module.scss'
import Image from 'next/image'

import ProfilePic from '@/assets/images/profile.jpeg'
import scrollToSection from '@/utils/scrollToSection';

export default function About() { 

    return(
        <div id='about' className={style.about_container}>
           <div className={style.about_wrap}>
            <Image src={ProfilePic} alt="foto de perfil" />
            <div>
                <div>
                  <h1>Gabriel Henrique</h1>
                  <p>Aos 16 anos conheci a fotografia e me apaixonei por ela completamente. <br/><br/>Conhecendo o mundo pelas lentes aprendi que imagens falam muito mais que palavras e que imortalizam histórias, por isso escolhi a câmera como forma de tornar os momentos mais únicos e especiais.</p>
                </div>

                <a onClick={()=> scrollToSection('jobs')} >Meus trabalhos</a>
            </div>
           </div>
        </div>
    )
}