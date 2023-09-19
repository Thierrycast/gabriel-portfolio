import styles from './Home.module.scss'

export default function FirstSection() {

    return(
        <div className={styles.home_container} >
            
            <div>
                <img src="/svgs/logo2.svg" alt="" />
                <p>Recordando momentos únicos através da fotografia</p>
                <button>entre em contato</button> 
            </div>
        </div> 
        
    )

}