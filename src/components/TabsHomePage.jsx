import React from 'react';
import {
    TabContainer,
    Tab,
    TabSeparator
} from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/radar-chart";
import "@ui5/webcomponents-icons/dist/work-history";
import "@ui5/webcomponents-icons/dist/activity-individual";



function TabsHomePage() {
    return (
        <TabContainer
            className=""
            onTabSelect={function noRefCheck() { }}
        >
            <Tab
                additionalText="5"
                icon="activity-individual"
                selected
                text="My Skills"
            >
                My Skills
            </Tab>
            <TabSeparator />
            <Tab
                additionalText="20"
                icon="radar-chart"
                text="Team Skills"
            >
                Team Skills
            </Tab>
            <Tab
                additionalText="20"
                icon="work-history"
                text="My Projects"
            >
                My Projects
            </Tab>
        </TabContainer>
    )
}

export default TabsHomePage