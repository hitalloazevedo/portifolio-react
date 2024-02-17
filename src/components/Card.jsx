import '../assets/css/Card.css'
import '../assets/css/Media-Card.css'
import Icons from './Icons'

import React from 'react'

export const Card = ({ title, description, imageUri, githubLink, projectLink }) => {
  return (
    <div className="card">
        <div className="image-content">
            <div className="overlay">

            </div>
            <div className="card-image">
                <img src={imageUri} className="card-img" alt="" />
            </div>
        </div>
        <div className="card-content">
            <h2 className="name">{title}</h2>
            <p className='description'>{description}</p>
            <div className="links">
                <Icons icon={'github'} link={githubLink}></Icons>
                <Icons icon={'link'} link={projectLink}></Icons>
            </div>
        </div>
    </div>
  )
}
