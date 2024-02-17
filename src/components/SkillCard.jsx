import React from 'react'
import Icons from './Icons'
import '../assets/css/SkillCard.css'
import '../assets/css/Media-SkillCard.css'

const SkillCard = (props) => {
  return (
    <div className='skill-card'>
        <Icons icon={props.technology}></Icons>
        <p className='skill-name'>{props.technology}</p>
    </div>
  )
}

export default SkillCard