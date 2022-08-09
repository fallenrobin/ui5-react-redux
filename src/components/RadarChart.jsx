import React from 'react'
import { RadarChart } from '@ui5/webcomponents-react-charts';

function RadarSkillChart() {
  return (
    <RadarChart
      dataset={[
        {
          name: 'React',
          one: 10,
          two: 12,
          three: 5,
          four: 2,
          five: 1
        },
        {
          name: 'UI5',
          one: 3,
          two: 3,
          three: 8,
          four: 7,
          five: 2
        },
        {
          name: 'ABAP RAP',
          one: 4,
          two: 2,
          three: 2,
          four: 4,
          five: 4
        },
        {
          name: 'OData',
          one: 7,
          two: 3,
          three: 5,
          four: 1,
          five: 1
        },
        {
          name: 'PostgreSql',
          one: 1,
          two: 2,
          three: 4,
          four: 5,
          five: 2
        },
        {
          name: 'S4/HANA',
          one: 2,
          two: 4,
          three: 3,
          four: 5,
          five: 2
        },
        {
          name: 'ABAP',
          one: 2,
          two: 4,
          three: 4,
          four: 6,
          five: 2
        },
        {
          name: 'Figma',
          one: 1,
          two: 4,
          three: 7,
          four: 2,
          five: 0
        },
        {
          name: 'Tailwind',
          one: 0,
          two: 0,
          three: 2,
          four: 4,
          five: 0
        },
        {
          name: 'MUI',
          one: 2,
          two: 4,
          three: 3,
          four: 5,
          five: 2
        },
        {
          name: 'Django',
          one: 2,
          two: 4,
          three: 3,
          four: 5,
          five: 2
        },
        {
          name: 'NoSQL',
          one: 2,
          two: 4,
          three: 3,
          four: 5,
          five: 2
        }
      ]}
      dimensions={[
        {
          accessor: 'name',
          label:'name',
          interval: 0
        }
      ]}
      measures={[
        {
          accessor: 'one',
          hideDataLabel: true,
          label: '1 star'
        },
        {
          accessor: 'two',
          hideDataLabel: true,
          label: '2 stars'
        },
        {
          accessor: 'three',
          hideDataLabel: true,
          label: '3 stars'
        },
        {
          accessor: 'four',
          hideDataLabel: true,
          label: '4 stars'
        },
        {
          accessor: 'five',
          hideDataLabel: true,
          label: '5 stars'
        }
      ]}
      onClick={function noRefCheck() { }}
      onDataPointClick={function noRefCheck() { }}
      onLegendClick={function noRefCheck() { }}
      style={{
        width: '100%'
      }}
    />
  )
}

export default RadarSkillChart;