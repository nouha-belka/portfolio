import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt=""/>
      <h1><span>I'm Nouha Belkacemi,</span> I'm a software Engineer and a Cybersecurity Consultant</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusamus eaque beatae nulla sed, blanditiis quos! Cumque porro perspiciatis ipsum beatae esse quis ad, aspernatur ullam laudantium. Recusandae, repellat deserunt?</p>
      <dic className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </dic>
    </div>
  )
}

export default Hero
