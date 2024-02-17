import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGit, faHtml5, faCss3, faJs, faPython, faLetterboxd } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Icons.css'
import { faCopy, faDatabase, faEnvelope, faLanguage, faLink } from '@fortawesome/free-solid-svg-icons';

const Icons = ({ icon, link }) => {
  const [relation, setRelation] = useState({
      git: faGit,
      linkedin: faLinkedin,
      html: faHtml5,
      css: faCss3,
      javascript: faJs,
      python: faPython,
      github: faGithub,
      mysql: faDatabase,
      english: faLanguage,
      email: faEnvelope,
      copiar: faCopy,
      link: faLink
    })

  return (
  <>
    <a href={link} target='_blank'><FontAwesomeIcon className='icon' icon={relation[icon]} /></a>
  </>
  )
}

export default Icons