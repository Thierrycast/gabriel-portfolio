import { useMediaQuery } from 'react-responsive';
import style from './JobsSection.module.scss'
import Image, { StaticImageData } from 'next/image';

import PhotoWd1 from '@/assets/jobsimages/wd1.jpeg'
import PhotoWd2 from '@/assets/jobsimages/wd2.jpeg'
import PhotoWd3 from '@/assets/jobsimages/wd3.jpeg'


interface Job {
    id: number;
    title: React.ReactNode;
    images: StaticImageData[];
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
                PhotoWd1,
                PhotoWd2,
                PhotoWd3,
            ]
        },
        // {
        //     id: 2,
        //     title:(
        //         <>
        //             Ensaio fotográfico na <span>fazenda Macedônia</span> Ipaba
        //         </>
        //     ),

        //     images: [
        //         `/jobsimages/wd1.jpeg`,
        //         `/jobsimages/wd2.jpeg`,
        //         `/jobsimages/wd3.jpeg`,
        //     ]
        // },
        // {
        //     id: 3,
        //     title:(
        //         <>
        //             Ensaio fotográfico para <span>WD mecânica</span>
        //         </>
        //     ),

        //     images: [
        //         `/jobsimages/wd1.jpeg`,
        //         `/jobsimages/wd2.jpeg`,
        //         `/jobsimages/wd3.jpeg`,
        //     ]
        // },
    ]


export default function JobsSection() {

    const isSmallScreen = useMediaQuery({ maxWidth: 800 });

    return(
        <div className={style.Jobs_container} >
            <h1>TRABALHOS</h1>

            {
                jobs.map((job)=>{
                    return(
                        <div key={job.id} className={style.Job_item}>
                            
                            {
                                !isSmallScreen ? (
                                <div>
                                    <Image src={job.images[0]} alt='' />
                                    <Image src={job.images[1]} alt='' />
                                    <Image src={job.images[2]} alt='' />

                                </div>
                                ):(
                                    <div>
                                        <Image src={job.images[1]} alt='' />
                                    </div>
                                )
                            }

                            <h2>{job.title}</h2>
                            <span className={style.separator} />
                        </div>
                    )
                })
            }
        </div>
    )
} 