import React from 'react'

import {
  FlexBox,
  Panel,
  Title,
  Text
} from '@ui5/webcomponents-react';


function Projects() {
  return (
    <FlexBox>
      <Panel
        headerText="Novacure"
        onToggle={function noRefCheck() { }}
        style={{ width: '50%' }}
      >
        <Title level="H4">
          Project dates: 01/01/2020 - 02/01/2021
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Panel>
      <Panel
        headerText="Novacure"
        onToggle={function noRefCheck() { }}
        style={{ width: '50%' }}
      >
        <Title level="H4">
          Project dates: 01/01/2020 - 02/01/2021
        </Title>
        <Text>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Text>
      </Panel>
    </FlexBox>
  )
}

export default Projects;