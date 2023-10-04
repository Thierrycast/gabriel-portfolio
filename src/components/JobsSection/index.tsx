
import style from './JobsSection.module.scss'
import Image from 'next/image';

import jobs from '@/data/jobsData'
import { useEffect, useState } from 'react';


export default function JobsSection() {

    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 767px)');
      setIsScreenSmall(mediaQuery.matches);
      
    }, []);
      
      
      

    return(
        <div id='jobs' className={style.Jobs_container} >
            <h1>TRABALHOS</h1>

            {
                jobs.map((job)=>{
                    return(
                        <div key={job.id} className={style.Job_item}>
                            
                            {
                                !isScreenSmall ? (
                                <div>
                                    <Image src={job.images[0]} alt='' priority />
                                    <Image src={job.images[1]} alt='' priority />
                                    <Image src={job.images[2]} alt='' priority />

                                </div>
                                ):(
                                    <div>
                                        <Image src={job.images[1]} alt='' priority />
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