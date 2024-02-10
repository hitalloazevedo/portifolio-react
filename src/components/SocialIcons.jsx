import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/SocialIcons.css'

const SocialIcons = ({ icon, link }) => {
  return (
  <>
    <a href={link} target='_blank'><FontAwesomeIcon className='icon' icon={icon === 'github' ? faGithub : icon === 'linkedin' ? faLinkedin : ''} /></a>
  </>
  )
}

export default SocialIcons