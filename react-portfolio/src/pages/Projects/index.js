import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import PawPawls from '../../images/pawpals.jpeg';

function Projects () {
    const myProjects = [
        {
            id: 1,
            title: 'Project 1',
            image: PawPawls,
            link: '',
            github: ''
        },
        {
            id: 2,
            title: 'Project 2',
            image: '',
            link: '',
            github: ''
        },
        {
            id: 3,
            title: 'Project 3',
            image: '',
            link: '',
            github: ''
        },
        {
            id: 4,
            title: 'Project 4',
            image: '',
            link: '',
            github: ''
        },
        {
            id: 5,
            title: 'Project 5',
            image: '',
            link: '',
            github: ''
        },
        {
            id: 6,
            title: 'Project 6',
            image: '',
            link: '',
            github: ''
        }
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