import React from 'react'
import { HomeContent } from '../../data/content/HomeContent'
import Card from '../../../component/ui/Card'
import { CarsData } from '../../data/content/HomeContent'
function Hero2() {
  return (
    <div className='bg-blue flex items-center '>
        <h1>{HomeContent.aboutPage.title}</h1>
        <p>{HomeContent.aboutPage.text}</p>
{CarsData.map((card)=>
      (
      <Card
      key={card.id}
      id={card.id}
      title={card.description}
      />
      ))}
    </div>
  )
}

export default Hero2