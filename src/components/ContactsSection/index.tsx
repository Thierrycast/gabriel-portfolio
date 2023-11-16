import style from './ContactsSection.module.scss'

import Image from 'next/image'
import LogoInstagram from '@/assets/svgs/logoinstagram.svg'
import LogoWhatsapp from '@/assets/svgs/logowhatsapp.svg'
import LogoTelegram from '@/assets/svgs/logotelegram.svg'

import IconPhone from '@/assets/svgs/iconphone.svg'

export default function ContactsSection() {

    return(
        <div className={style.contactsSection_Container} id='contacts'>
            <h1>Tem algum evento que deseja fotografar?</h1>

            <p>Clique nos ícones abaixo para entrar em contato pelas minhas redes sociais:</p>

            <div>
               <a target="_blank" href="https://instagram.com/ghenriqueft_?igshid=OGQ5ZDc2ODk2ZA=="><Image  src={LogoInstagram} alt="Logo Instagram"/></a>
               <a target="_blank" href="https://wa.me/5533988331008"><Image src={LogoWhatsapp} alt="Logo Whatsapp"/></a> 
                <a target="_blank" href="https://t.me/Gabriel_HFT"><Image src={LogoTelegram} alt="Logo Telegram"/></a>
            </div>
            <a href="tel:+55339988331008">
            <span><Image src={IconPhone} alt="" /> (33) 998833-1008</span>
            </a>
        </div>
    )
}