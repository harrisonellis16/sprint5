import React from 'react';
import './about.css';
import jason from '../../profile_jason.jpg'
import marcelo from '../../profile_marcelo.jpg'
import harrison from '../../profile_harrison.jpg'
import taylor from '../../profile_taylor.jpg'
class About extends React.Component {


    render() {
        return (
            <div className="about-section">

                <div class="about-box">
                    <div className="card-about">
                        <img src={marcelo} alt="Marcelo" className="pic" />
                        <div className="container">
                            <h2 className="name">Marcelo Cueva</h2>
                            <p className="title">Cloud Governance</p>
                            <p> Marcelo recently graduated from the University of North Carolina at Charlotte with a
                            Bachelor of Science in Computer Science. At UNC Charlotte, he worked as a Junior System
                            Administrator. He interned with Ally last summer with the Enterprise Monitoring team.
                            He will be joining the Cloud Enablement team and is excited to re-join the Ally family.
                            In his free time, Marcelo enjoys hiking, watching soccer, and learning about personal finance.
                    </p>
                        </div>
                    </div>
                </div>

                <div class="about-box">
                    <div className="card-about">
                        <img src={harrison} alt="Harrison" className="pic" />
                        <div className="container">
                            <h2 className="name">Harrison Ellis</h2>
                            <p className="title">Early Talent</p>
                            <p>
                                Harrison graduated from Virginia Tech in May 2020 with a Bachelor of Science in Computer Science.
                                He gained fullstack web development experience over the course of two summer internships during college.
                                Harrison will be working for the Developer Experience team, creating tools to simplify cloud migration for other teams.
                                During his freetime, Harrison enjoys snowboarding, fishing, and playing FIFA.
                                </p>
                        </div>
                    </div>
                </div>

                <div class="about-box">
                    <div className="card-about">
                        <img src={jason} alt="Jason" className="pic" />
                        <div className="container">
                            <h2 className="name">Jason Jamil</h2>
                            <p className="title">Auto and Insurance (Advantage)</p>
                            <p> Jason Jamil graduated from Oakland University in Rochester MI with a Bachelors of Science in Information Technology. During his college carrer Jason was the Lead Genius at his local Apple Store. During the summer of 2016 he also Interned at Google at their HQ in Mountain View CA. In his free time, Jason loves to be outside and on the lake. Jason will be on the Auto and Insurance team with Ally
                    </p>
                        </div>
                    </div>
                </div>


                <div class="about-box">
                    <div className="card-about">
                        <img src={taylor} alt="Taylor" className="pic" />
                        <div className="container">
                            <h2 className="name">Taylor Piot</h2>
                            <p className="title">iWarranty - IT Insurance</p>
                            <p> Taylor graduated from Oakland University in Rochester Michigan with a Bachelor of Science in Computer Science. She interned with Ally last summer with the iWarranty Team in IT Auto & Insurance. She started back full time with the same team this January. In her free time, Taylor enjoys spending time with her friends, family, and her dog Splash.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About