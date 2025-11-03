import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/about_profile.svg"

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>
                    I build modern, scalable web and mobile applications that prioritize performance, usability, and maintainability. My experience spans full-stack web development with React, Redux, jQuery, Laravel, and MySQL, as well as cross-platform app development using React Native and Flutter. I enjoy turning ideas into polished products, from designing intuitive interfaces to implementing secure backend systems and integrating APIs, while maintaining clean, efficient, and version-controlled code.
                </p>
                <p>
                    I specialize in assessing and securing digital systems through hands-on penetration testing, vulnerability research, and security auditing. I have developed custom platforms for simulating real-world attacks and gained practical experience using Python, PHP, Metasploit, Nmap, Burp Suite, and Wireshark. My work also includes conducting security audits and ensuring compliance with industry standards such as NIST and PCI DSS, combining automated and manual techniques to identify weaknesses, exploit vulnerabilities safely, and provide actionable recommendations to strengthen security posture.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML&CSS</p><hr style={ {width:"80%"} }/></div>
                <div className="about-skill"><p>React Js</p><hr style={ {width:"40%"} }/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={ {width:"50%"} }/></div>
                <div className="about-skill"><p>PHP</p><hr style={ {width:"60%"} }/></div>
                <div className="about-skill"><p>Python</p><hr style={ {width:"70%"} }/></div>
            </div>
        </div>
      </div>
        <div class="about-achievments">
            <div class="about-achievment">
                <h1>4+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div class="about-achievment">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div class="about-achievment">
                <h1>+10</h1>
                <p>Workshops Delivered</p>
            </div>
        </div>
    </div>
  )
}

export default About
