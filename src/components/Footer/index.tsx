import style from './Footer.module.scss'

import Image from 'next/image'
import Logo1 from '@/assets/svgs/logo1.svg'

export default function Footer() {

    return(
        <footer className={style.container_footer} >
           <div className={style.left_div_footer}>
                <Image src={Logo1} alt="" />
            </div> 
            <div className={style.right_div_footer}>
                <div>
                    <p>(33) 998833-1008</p>
                    <p>exemplo@email.com</p>
                    <p>Sardoá -  MG</p>
                </div>
            </div>
        </footer>
    )
}