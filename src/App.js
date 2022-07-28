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


import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <>
      <ShellBar
        // logo={<MDXCreateElement alt="SAP Logo" mdxType="img" originalType="img" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
        onLogoClick={function noRefCheck() { }}
        onMenuItemClick={function noRefCheck() { }}
        onProfileClick={function noRefCheck() { }}
        primaryTitle="Mindset Skill Tracker"
        profile={<Avatar></Avatar>}
        secondaryTitle=""
      />
      {/* <FlexBox
        style={{ width: '100%', height: '100vh' }}
        direction={FlexBoxDirection.Column}
        justifyContent={FlexBoxJustifyContent.Center}
        alignItems={FlexBoxAlignItems.Center}
      > */}
        <HomePage />
      {/* </FlexBox> */}
    </>
  );
}

export default App;
