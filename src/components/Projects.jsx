import React from 'react'
import projectReducer from '../Redux/projectReducer';
import ProjectItem from './ProjectItem';

import {
  FlexBox,
} from '@ui5/webcomponents-react';
import { useSelector } from 'react-redux';


function Projects() {

  const projectData = (useSelector(store => store.projectReducer));

  console.log(projectData);

  return (
    <FlexBox>
      {projectData.map((project) => {
        return (
          <ProjectItem
            project={project}
          />
        )
      })}

    </FlexBox>
  )
}

export default Projects;