import React from 'react';
import './about.css';

class About extends React.Component {


    render() {
        return (
            <div className="about-section">
            <div className="row">
            <div class="column">
                <div className="card">
                <img src='../../profile_marcelo.jpg' alt="Marcelo" className="pic"/>
                <div className="container">
                    <h2 className="name">Marcelo Cueva</h2>
                    <p className="title">Early Talent</p>
                    <p> Marcelo recently graduated from the University of North Carolina at Charlotte with a 
                    Bachelor of Science in Computer Science. At UNC Charlotte, he worked as a Junior System 
                    Administrator. He interned with Ally last summer with the Enterprise Monitoring team. 
                    He will be joining the Cloud Enablement team and is excited to re-join the Ally family. 
                    In his free time, Marcelo enjoys hiking, watching soccer, and learning about personal finance.
                    </p>
                </div>
                </div>
            </div>
        

           
            <div class="column">
                <div className="card">
                <div className="container">
                    <h2 className="name">Harrison Ellis</h2>
                    <p className="title">Early Talent</p>
                    <p> Insert bio here..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim risus, non congue lacus. Duis in nulla vitae urna aliquet imperdiet non eget purus. Fusce ut nibh metus. Pellentesque nisi nisi, ullamcorper id pharetra vitae, luctus quis leo. Mauris sit amet rhoncus magna. Fusce lobortis dolor risus, ut malesuada nisi sodales vel. Aliquam ligula urna, auctor ut sapien sed, porttitor blandit arcu. Etiam aliquet a diam ac tincidunt. 
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div class="column">
                <div className="card">
                <img src='../../profile_jason.jpg' alt="Jason" className="pic"/>
                <div className="container">
                    <h2 className="name">Jason Jamil</h2>
                    <p className="title">Early Talent</p>
                    <p> Insert bio here..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim risus, non congue lacus. Duis in nulla vitae urna aliquet imperdiet non eget purus. Fusce ut nibh metus. Pellentesque nisi nisi, ullamcorper id pharetra vitae, luctus quis leo. Mauris sit amet rhoncus magna. Fusce lobortis dolor risus, ut malesuada nisi sodales vel. Aliquam ligula urna, auctor ut sapien sed, porttitor blandit arcu. Etiam aliquet a diam ac tincidunt. 
                    </p>
                </div>
                </div>
            </div>
          

            <div class="column">
                <div className="card">
                {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
                <div className="container">
                    <h2 className="name">Taylor Piot</h2>
                    <p className="title">Early Talent</p>
                    <p> Insert bio here..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac dignissim risus, non congue lacus. Duis in nulla vitae urna aliquet imperdiet non eget purus. Fusce ut nibh metus. Pellentesque nisi nisi, ullamcorper id pharetra vitae, luctus quis leo. Mauris sit amet rhoncus magna. Fusce lobortis dolor risus, ut malesuada nisi sodales vel. Aliquam ligula urna, auctor ut sapien sed, porttitor blandit arcu. Etiam aliquet a diam ac tincidunt. Nam nulla arcu, efficitur non elit quis, vestibulum euismod justo. 
                    </p>
                </div>
                </div>
            </div>
            </div>

            </div>
        )
    }
}

export default About