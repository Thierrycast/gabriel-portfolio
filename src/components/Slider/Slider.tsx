"use client"

import {Swiper, SwiperProps} from 'swiper/react'
import 'swiper/css'
import { ReactNode } from 'react'
import { A11y, Autoplay, EffectCoverflow, } from 'swiper/modules'

import 'swiper/css/effect-coverflow'


import'./slider.scss'

interface SliderProps {
  settings: SwiperProps 
  children: ReactNode
}

export default function Slider({settings, children}: SliderProps) {
  return (

     <Swiper modules={[A11y,Autoplay, EffectCoverflow]} {...settings} >
        {children}
     </Swiper>
  )
}
