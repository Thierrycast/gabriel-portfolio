"use client";

import React from 'react';
import style from './JobsSection.module.scss';
import Image from 'next/image';
import jobs from '@/data/jobsData';
import { Slide, SliderProps, Slider } from '../Slider';

export default function JobsSection() {
  const settings: SliderProps = {
    effect: 'coverflow',
    spaceBetween: 100,
    slidesPerView: 1,
    speed: 2000,
    navigation: false,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      waitForTransition: false,
    },
    coverflowEffect: {
      depth: 100,
      modifier: 1,
      rotate: 20,
      scale: 1,
      slideShadows: true,
      stretch: 0,
    },
  };

  return (
    <div id='jobs' className={style.Jobs_container}>
      <h1>TRABALHOS</h1>

      {jobs.map((job) => (
        <div key={job.id} className={style.Job_item}>
          <div className={style.jobs_images_desktop}>
            <Image src={job.images[0]} alt='' priority />
            <Image src={job.images[1]} alt='' priority />
            <Image src={job.images[2]} alt='' priority />
          </div>

          <div className={style.jobs_images_mobile}>
            <Slider settings={settings}>
              <Slide>
                <Image src={job.images[0]} priority alt='' />
              </Slide>
              <Slide>
                <Image src={job.images[1]} priority alt='' />
              </Slide>
              <Slide>
                <Image src={job.images[2]} priority alt='' />
              </Slide>
            </Slider>
          </div>

          <h2>{job.title}</h2>
          <span className={style.separator} />
        </div>
      ))}
    </div>
  );
}
