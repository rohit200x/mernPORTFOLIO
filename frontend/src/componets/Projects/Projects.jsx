// src/components/Projects/Projects.jsx

import React from 'react';
import './Projects.css';
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from 'react-icons/ai';
import { Delete } from '@mui/icons-material';
// import { FaRegSmileWink } from 'react-icons/fa';

const ProjectCard = ({ url, projectImage, projectTitle, description, technologies, isAdmin = false }) => {
    return (
        <>
            <a href={url} className='projectCard' target='black'>
                <div>
                    <img src={projectImage} alt='projectimage' height='150px' width='150px' />
                    <Typography variant='h5'>{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin && (
                <Button style={{ color: 'red' }}>
                    <Delete />
                </Button>
            )}
        </>
    );
};

const Projects = () => {
    const projects = [1];
    return (
        <div className='projects'>
            <Typography variant='h3'>
                Projects <AiOutlineProject />
            </Typography>
            <div className='projectWrapper'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        url='https://github.com/rohit200x'
                        projectImage='https://res.cloudinary.com/dmlswmzg6/image/upload/v1720363859/duoioin9b52uw5ty3ylq.png'
                        projectTitle='MERN stack Portfolio'
                        description="A MERN stack portfolio website represents a cutting-edge approach to building dynamic and responsive online portfolios."
                        technologies='MongoDB,Node.JS,Express.JS,HTML,CSS,JavaScript,THREE.JS'
                    />
                    
                ))}
                
            </div>
        </div>
    );
};

export { ProjectCard };
export default Projects;
