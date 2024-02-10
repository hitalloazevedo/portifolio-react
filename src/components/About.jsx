import React from "react"
import '../assets/css/About.css'
import '../assets/css/Media-About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="content-about">
                <header>
                    <h2>About me</h2>
                </header>
                    <div className="about-content">
                        <div className="thanks">
                            <p>
                                At first, thank you for visiting my      website!
                                <br/>
                                let me talk a litte bit about me.
                            </p>
                        </div>
                        <p>
                            Hey there! I'm Hitallo Azevedo, and I'm 17 years old. I study web development with a focus on front-end, I chose this area because it's a world of opportunities where the only limit is your creativity. My first experience about programming was in 2020 with python, I fell in love, since then I have been studying and improving my skills every day, to be honest in my opinion to achieve success in this career it's too important be curious and have hungry about knowledge.
                        </p>
                    </div>
            </div>
        </section>
    )
}

export default About