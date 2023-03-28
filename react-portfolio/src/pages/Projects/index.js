import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import PawPawls from '../../images/pawpals.jpeg';
import Writes from '../../images/writes.png';
import Carrot from "../../images/carrot.jpeg";
import PortPic from "../../images/sarahport.png";
import TimeTravel from "../../images/ttt.png";
import TextEditor from "../../images/texteditor.png";

function Projects () {
    const myProjects = [
        {
            id: 1,
            title: 'PawPals',
            image: PawPawls,
            link: 'https://pawpals.herokuapp.com/',
            github: 'https://github.com/thebobfather2/pawpals'
        },
        {
            id: 2,
            title: 'Sarah Jacobs Writes',
            image: Writes,
            link: 'https://sarahgjacobs.github.io/sarahjacobswrites/',
            github: 'https://github.com/sarahgjacobs/sarahjacobswrites'
        },
        {
            id: 3,
            title: 'Carrot Calendar',
            image: Carrot,
            link: 'https://github.com/thebobfather2/carrotcalendar',
            github: 'https://github.com/thebobfather2/carrotcalendar'
        },
        {
            id: 4,
            title: 'Portfolio',
            image: PortPic,
            link: 'https://sarahgjacobs.github.io/portfolio/',
            github: 'https://github.com/sarahgjacobs/portfolio'
        },
        {
            id: 5,
            title: 'Time to Travel',
            image: TimeTravel,
            link: 'https://sarahgjacobs.github.io/timetotravel/',
            github: 'https://github.com/sarahgjacobs/timetotravel'
        },
        {
            id: 6,
            title: 'Offline Text Editor',
            image: TextEditor,
            link: 'https://github.com/sarahgjacobs/pwa',
            github: 'https://github.com/sarahgjacobs/pwa'
        }
    ]
    return (
        <section>
            <h2>Projects</h2>
            <div style={{display:'flex', flexWrap:'wrap',
        height: "50vh",
        
      }}>
                {myProjects.map(project => {
                    return <ProjectCard key={project.id} title={project.title} image={project.image} />
                    })}
            </div>
        </section>
    )
}
export default Projects;