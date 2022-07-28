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
        <HomePage />
    </>
  );
}

export default App;
