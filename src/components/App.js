import { HashRouter as Router, Route } from "react-router-dom";

import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  Avatar
} from '@ui5/webcomponents-react';

import TabsHomePage from "./TabsHomePage";
import HomePage from './HomePage';
import RadarChart from "./RadarChart";
import Projects from './Projects'

function App() {
  return (
    <>
      <ShellBar
        // logo={<MDXCreateElement alt="SAP Logo" mdxType="img" originalType="img" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
        onLogoClick={function noRefCheck() { }}
        primaryTitle="Mindset Skill Tracker"
        profile={<Avatar></Avatar>}
        secondaryTitle=""
      />
      <TabsHomePage />
      <Router>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/chart'>
          <RadarChart />
        </Route>
        <Route path='/projects'>
          <Projects />
        </Route>
      </Router>
    </>
  );
}

export default App;
