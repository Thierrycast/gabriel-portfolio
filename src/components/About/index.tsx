import style from './About.module.scss'
import Image from 'next/image'

import ProfilePic from '@/assets/images/profile.jpeg'

export default function About() { 

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
        <div id='about' className={style.about_container}>
           <div className={style.about_wrap}>
            <Image src={ProfilePic} alt="foto de perfil" />
            <div>
                <div>
                <h1>Gabriel Henrique</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante a neque tincidunt vehicula non nec nulla. Nulla facilisi. Sed eget ultrices turpis. Cras vestibulum consequat lorem, non sollicitudin nulla tincidunt</p>
                </div>

                <a onClick={()=> scrollToSection('jobs')} >Meus trabalhos</a>
            </div>
           </div>
        </div>
    )
}