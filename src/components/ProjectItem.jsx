import React from 'react'
import TeamItem from './TeamItem';
import NoteItem from './NoteItem';

import {
    FlexBox,
    Panel,
    Title,
    Text,
    Button
} from '@ui5/webcomponents-react';

function ProjectItem({ project, team, notes }) {
    return (
        <>
            <Panel
                headerText={project.projectName}
                onToggle={function noRefCheck() { }}
                style={{ width: '50%' }}
                collapsed
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
                    Notes:
                    <ul>
                        {notes.map((note) => {
                            return (
                                <NoteItem
                                    note={note}
                                    key={note.note}
                                />
                            )
                        })}
                    </ul>
                </Text>
            </Panel>
        </>
    )
}

export default ProjectItem