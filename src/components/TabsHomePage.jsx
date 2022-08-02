import React, { useState } from 'react';
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


    return (
        <TabContainer>
            <Tab
                additionalText="5"
                icon="activity-individual"
                text="My Skills">
                <HomePage />
            </Tab>

            <TabSeparator />

            <Tab
                additionalText="20"
                icon="radar-chart"
                text="Team Skills"
                selected>
                <RadarChart />
            </Tab>

            <Tab
                additionalText="20"
                icon="work-history"
                text="My Projects">
                <Projects />
            </Tab>

        </TabContainer>
    )
}

export default TabsHomePage