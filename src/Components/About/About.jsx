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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, maxime. Id, vero dicta? Accusantium repudiandae dolorem possimus blanditiis quia aspernatur aut deleniti vitae? Nemo minus quaerat, porro voluptatum corrupti earum.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, maxime. Id, vero dicta? Accusantium repudiandae dolorem possimus blanditiis quia aspernatur aut deleniti vitae? Nemo minus quaerat, porro voluptatum corrupti earum.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo, veritatis aspernatur illum perferendis officia aut porro soluta accusamus reiciendis quisquam sint deserunt at quae rerum perspiciatis nisi voluptatem placeat.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nemo, veritatis aspernatur illum perferendis officia aut porro soluta accusamus reiciendis quisquam sint deserunt at quae rerum perspiciatis nisi voluptatem placeat.
                </p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML&CSS</p><hr style={ {width:"50%"} }/></div>
                <div className="about-skill"><p>React Js</p><hr style={ {width:"70%"} }/></div>
                <div className="about-skill"><p>JavaScript</p><hr style={ {width:"60%"} }/></div>
                <div className="about-skill"><p>PHP</p><hr style={ {width:"40%"} }/></div>
            </div>
        </div>
      </div>
        <div class="about-achievments">
            <div class="about-achievment">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div class="about-achievment">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div class="about-achievment">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
