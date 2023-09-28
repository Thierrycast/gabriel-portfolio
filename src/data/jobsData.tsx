import  { StaticImageData } from 'next/image';

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
        {
            id: 2,
            title:(
                <>
                    Ensaio fotográfico na <span>fazenda Macedônia</span> Ipaba
                </>
            ),

            images: [
                PhotoWd1,
                PhotoWd2,
                PhotoWd3,
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
                PhotoWd1,
                PhotoWd2,
                PhotoWd3,
            ]
        },
    ]

    export default jobs