import { useMediaQuery } from 'react-responsive';
import style from './JobsSection.module.scss'
import Image from 'next/image';

import jobs from '@/data/jobsData'


export default function JobsSection() {

    const isSmallScreen = useMediaQuery({ maxWidth: 800 });

    return(
        <div id='jobs' className={style.Jobs_container} >
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