import style from './JobsSection.module.scss'


interface Job {
    id: number;
    title: React.ReactNode;
    images: string[];
  }

const jobs: Job[] = [
        {
            id: 1,
            title:(
                <>
                    Ensaio fotográfico para <span>WD mecânica</span>
                </>
            ),

            images: [
                `/jobsimages/wd1.jpeg`,
                `/jobsimages/wd2.jpeg`,
                `/jobsimages/wd3.jpeg`,
            ]
        },
        {
            id: 2,
            title:(
                <>
                    Ensaio fotográfico na <span>fazenda Macedônia</span> Ipaba
                </>
            ),

            images: [
                `/jobsimages/wd1.jpeg`,
                `/jobsimages/wd2.jpeg`,
                `/jobsimages/wd3.jpeg`,
            ]
        },
        {
            id: 3,
            title:(
                <>
                    Ensaio fotográfico para <span>WD mecânica</span>
                </>
            ),

            images: [
                `/jobsimages/wd1.jpeg`,
                `/jobsimages/wd2.jpeg`,
                `/jobsimages/wd3.jpeg`,
            ]
        },
    ]


export default function JobsSection() {

    

    return(
        <div className={style.Jobs_container} >
            <h1>TRABALHOS</h1>

            {
                jobs.map((job)=>{
                    return(
                        <div key={job.id} className={style.Job_item}>
                            <div>
                            <img src={job.images[0]} alt='' />
                            <img src={job.images[1]} alt='' />
                            <img src={job.images[2]} alt='' />
                            </div>
                            <h2>{job.title}</h2>
                            <span className={style.separator} />
                        </div>
                    )
                })
            }
        </div>
    )
} 