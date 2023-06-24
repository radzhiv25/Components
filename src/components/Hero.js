// import React from 'react'
import {Card} from './Card'
import {Button} from './button'

export const Hero = () => {
  return (
    <div className="hero p-5 grid grid-cols-4">
        <div className="card1 p-2 flex flex-col border shadow-lg rounded-md ">
        <Button/>
        <Card 
        name='Button' 
        bio='The component consists of minor button effects'
        link="https://github.com/radzhiv25/components/blob/main/src/components/button.js"
        />
        </div>
    </div>
  )
}
