import style from './ContactsSection.module.scss'

export default function ContactsSection() {

    return(
        <div className={style.contactsSection_Container} >
            <h1>Tem algum evento que deseja fotografar?</h1>

            <p>Entre em contato em uma das minhas redes sociais abaixo.</p>

            <div>
                <img src="/svgs/logoinstagram.svg" alt="" />
                <img src="/svgs/logowhatsapp.svg" alt="" />
                <img src="/svgs/logotelegram.svg" alt="" />
            </div>
        </div>
    )
}
