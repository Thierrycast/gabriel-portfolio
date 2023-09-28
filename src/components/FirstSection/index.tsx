import styles from './Home.module.scss'
import Image from 'next/image'
import Logo2 from '@/assets/svgs/logo2.svg'

export default function FirstSection() {

    return(
        <div className={styles.home_container} >
            
            <div>
                <Image src={Logo2} alt="Logo" />
                <p>Recordando momentos únicos através da fotografia</p>
                <button>entre em contato</button> 
            </div>
        </div> 
        
    )

}