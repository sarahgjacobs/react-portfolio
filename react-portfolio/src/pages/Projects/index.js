import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import PawPawls from '../../images/pawpals.jpeg';
import Writes from '../../images/writes.png';
import Carrot from "../../images/carrot.jpeg";

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
        // {
        //     id: 4,
        //     title: 'Project 4',
        //     image: '',
        //     link: '',
        //     github: ''
        // },
        // {
        //     id: 5,
        //     title: 'Project 5',
        //     image: '',
        //     link: '',
        //     github: ''
        // },
        // {
        //     id: 6,
        //     title: 'Project 6',
        //     image: '',
        //     link: '',
        //     github: ''
        // }
    ]
    return (
        <section>
            <h2>Projects</h2>
            <div style={{display:'flex', flexWrap:'wrap'}}>
                {myProjects.map(project => {
                    return <ProjectCard key={project.id} title={project.title} image={project.image} />
                    })}
            </div>
        </section>
    )
}
export default Projects;