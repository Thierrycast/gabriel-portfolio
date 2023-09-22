import style from './Footer.module.scss'

export default function Footer() {

    return(
        <footer className={style.container_footer} >
           <div className={style.left_div_footer}>
                <img src="/svgs/logo1.svg" alt="" />
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