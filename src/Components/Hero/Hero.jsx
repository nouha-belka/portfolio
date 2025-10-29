import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Nouha Belkacemi,</span> I'm a software Engineer and a Cybersecurity Consultant</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus eaque beatae nulla sed, blanditiis quos! Cumque porro perspiciatis ipsum beatae esse quis ad, aspernatur ullam laudantium. Recusandae, repellat deserunt?</p>
      <dic className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </dic>
    </div>
  )
}

export default Hero
