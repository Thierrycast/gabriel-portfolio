import style from './ContactsSection.module.scss'

import Image from 'next/image'
import LogoInstagram from '@/assets/svgs/logoinstagram.svg'
import LogoWhatsapp from '@/assets/svgs/logowhatsapp.svg'
import LogoTelegram from '@/assets/svgs/logotelegram.svg'

import IconPhone from '@/assets/svgs/iconphone.svg'

export default function ContactsSection() {

    return(
        <div className={style.contactsSection_Container} >
            <h1>Tem algum evento que deseja fotografar?</h1>

            <p>Entre em contato em uma das minhas redes sociais abaixo.</p>

            <div>
                <Image src={LogoInstagram} alt="Logo Instagram" />
                <Image src={LogoWhatsapp} alt="Logo Whatsapp" />
                <Image src={LogoTelegram} alt="Logo Telegram" />
            </div>
            <span><Image src={IconPhone} alt="" /> (33) 998833-1008</span>
        </div>
    )
}
