import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1rUg7H8zOjJ8hwDXPl_x7Pmxc0x8Ivg45/view?usp=sharing", "_blank", "noopener,noreferrer");
  };
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Nouha Belkacemi,</span> I'm a software Engineer and a Cybersecurity Consultant</h1>
      <p>Building robust, scalable digital products and securing systems through practical cybersecurity solutions, combining development skills with hands-on penetration testing and auditing.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={handleResumeClick}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
