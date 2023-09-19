import style from './About.module.scss'

export default function About() { 

    return(
        <div className={style.about_container}>
           <div className={style.about_wrap}>
            <img src="/images/profile.jpeg" alt="foto de perfil" />
            <div>
                <div>
                <h1>Gabriel Henrique</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id ante a neque tincidunt vehicula non nec nulla. Nulla facilisi. Sed eget ultrices turpis. Cras vestibulum consequat lorem, non sollicitudin nulla tincidunt</p>
                </div>

                <button>Meus trabalhos</button>
            </div>
           </div>
        </div>
    )
}