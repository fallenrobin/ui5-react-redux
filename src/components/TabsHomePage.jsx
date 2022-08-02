import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

    const [selectedTab, setSelectedTab] = useState('');
    const dispatch = useDispatch();

    const handleMySkills = () => {
        console.log('click');
        // dispatch({type: 'HOME'})
    }

    const handleChart = () => {
        console.log('click chart');
        // dispatch({type: 'CHART'})
    }
    const handleProjects = () => {
        console.log('click projects');
        // dispatch({type: 'PROJECTS'})
    }


    return (
        <TabContainer
            onTabSelect={handleMySkills}
        >

            <Tab
                additionalText="5"
                icon="activity-individual"
                text="My Skills"
            // onTabSelect={setSelectedTab}
            >
                <HomePage />
            </Tab>

            <TabSeparator />

            <Tab
                additionalText="20"
                icon="radar-chart"
                text="Team Skills"
                selected
            // onTabSelect={handleChart}
            >
                <RadarChart />
            </Tab>

            <Tab
                additionalText="20"
                icon="work-history"
                text="My Projects"
            // onTabSelect={handleProjects}
            >
                <Projects />
            </Tab>
        </TabContainer>
    )
}

export default TabsHomePage