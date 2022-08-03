import React from 'react'
import TeamItem from './TeamItem';
import NoteItem from './NoteItem';

import {
    FlexBox,
    Panel,
    Toolbar,
    ToolbarSpacer,
    Title,
    Text,
    Button,
    List,
    StandardListItem
} from '@ui5/webcomponents-react';

function ProjectItem({ project, team, notes }) {
    return (
        <>
            <Panel
                header=
                {<Toolbar>
                    <Title>
                        {project.projectName}
                    </Title>
                    <ToolbarSpacer />
                    <Button icon="edit" />
                    <Button
                        icon="delete"
                        design='Negative'
                    />
                </Toolbar>}
                headerText={project.projectName}
                onToggle={function noRefCheck() { }}
                style={{ width: '50%' }}
                collapsed
            >
                <StandardListItem>
                    Project dates: {project.startDate} - {project.endDate}
                </StandardListItem>
                <Text level="h5">
                    Team Members:
                </Text>
                <List>
                    {team.map((teamMember) => {
                        return (
                            <TeamItem
                                teamMember={teamMember}
                                key={teamMember.name}
                            />
                        )
                    })}
                </List>
                <Text>
                    Notes:
                    <List>
                        {notes.map((note) => {
                            return (
                                <NoteItem
                                    note={note}
                                    key={note.note}
                                />
                            )
                        })}
                    </List>
                </Text>
            </Panel>
        </>
    )
}

export default ProjectItem