import React from 'react';
import { useSelector } from 'react-redux';
import {
    TabContainer,
    Tab,
    TabSeparator
} from '@ui5/webcomponents-react';

import HomePage from './HomePage';
import RadarChart from './RadarChart';
import Projects from './Projects';

import "@ui5/webcomponents-icons/dist/radar-chart";
import "@ui5/webcomponents-icons/dist/work-history";
import "@ui5/webcomponents-icons/dist/activity-individual";



function TabsHomePage() {

    const skills = (useSelector(store => store.employeeSkillReducer))
    const projects = (useSelector(store => store.projectReducer))

    return (
        <TabContainer>
            <Tab
                additionalText={skills.length}
                icon="activity-individual"
                text="My Skills">
                <HomePage />
            </Tab>

            <TabSeparator />

            <Tab
                icon="radar-chart"
                text="Team Skills">
                <RadarChart />
            </Tab>

            <Tab
                additionalText={projects.length}
                icon="work-history"
                text="My Projects">
                <Projects />
            </Tab>

        </TabContainer>
    )
}

export default TabsHomePage