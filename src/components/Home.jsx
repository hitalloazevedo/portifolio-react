import React from 'react'
import '../assets/css/Home.css'
import Console from './Console'
import SocialIcons from './SocialIcons'

const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="content">
            <article>
                <h3>Hello World,</h3>
                <h2>I am a <br/>Web Devoloper</h2>
            </article>

            <Console/>

            <div className="social-icons-area">
              <SocialIcons icon={'github'} link={'https://github.com/hitalloazevedo'}/>
              <SocialIcons icon={'linkedin'} link={'https://www.linkedin.com/in/hitallo-azevedo-1a199a21a/'}/>
            </div>

            <aside>

            </aside>
        </div>
    </section>
  )
}

export default Home