import React from 'react'
import TeamItem from './TeamItem';

import {
    FlexBox,
    Panel,
    Title,
    Text
} from '@ui5/webcomponents-react';

function ProjectItem({ project, team }) {
    return (
        <>
            <Panel
                headerText={project.projectName}
                onToggle={function noRefCheck() { }}
                style={{ width: '50%' }}
            >
                <Title level="H4">
                    Project dates: {project.startDate} - {project.endDate}
                </Title>
                <Text level="h5">
                    Team Members:
                </Text>
                <ul>
                    {team.map((teamMember) => {
                        return (
                            <TeamItem 
                            teamMember={teamMember}
                            key={teamMember.name}
                            />
                        )
                    })}
                </ul>
                <Text>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </Text>
            </Panel>
        </>
    )
}

export default ProjectItem