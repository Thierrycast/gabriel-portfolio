import { StaticImageData } from 'next/image';

import futebol1 from '@/assets/jobsimages/futebol1.jpeg';
import futebol2 from '@/assets/jobsimages/futebol2.jpeg';
import futebol3 from '@/assets/jobsimages/futebol3.jpeg';

import batizado1 from '@/assets/jobsimages/batizado1.jpeg';
import batizado2 from '@/assets/jobsimages/batizado2.jpeg';
import batizado3 from '@/assets/jobsimages/batizado3.jpeg';

import nubarba1 from '@/assets/jobsimages/nubarba1.jpeg';
import nubarba2 from '@/assets/jobsimages/nubarba2.jpeg';
import nubarba3 from '@/assets/jobsimages/nubarba3.jpeg';
import nubarba4 from '@/assets/jobsimages/nubarba4.jpeg';

import cavalo1 from '@/assets/jobsimages/cavalo1.jpeg';
import cavalo2 from '@/assets/jobsimages/cavalo2.jpeg';
import cavalo3 from '@/assets/jobsimages/cavalo3.jpeg';

interface Job {
    id: number;
    title: React.ReactNode;
    images: StaticImageData[];
}

const jobs: Job[] = [
    {
        id: 1,
        title: (
            <>
                Campeonato de <span>futebol regional</span>
            </>
        ),
        images: [futebol1, futebol2, futebol3],
    },
    {
        id: 2,
        title: (
            <>
                <span>Batizado e festa</span> de melina
            </>
        ),
        images: [batizado1, batizado2, batizado3],
    },
    {
        id: 3,
        title: (
            <>
                Ensaio profissional <span>barbearia</span>
            </>
        ),
        images: [nubarba1, nubarba2, nubarba3, nubarba4],
    },
    {
        id: 4,
        title: (
            <>
                Evento <span>copa de marcha</span>
            </>
        ),
        images: [cavalo1, cavalo2, cavalo3],
    },
];

export default jobs;
