import React from 'react'

import { 
    MultiComboBox,
    MultiComboBoxGroupItem,
    MultiComboBoxItem
} from '@ui5/webcomponents-react';


function SkillDropdown() {
    return (
        <MultiComboBox
            onChange={function noRefCheck() { }}
            onInput={function noRefCheck() { }}
            onOpenChange={function noRefCheck() { }}
            onSelectionChange={function noRefCheck() { }}
            placeholder={'Select technology'}
        >
            <MultiComboBoxGroupItem text="Front end" />
            <MultiComboBoxItem text="CSS" />
            <MultiComboBoxItem text="Tailwind" />
            <MultiComboBoxItem text="MUI" />
            <MultiComboBoxItem text="UI5" />
            <MultiComboBoxGroupItem text="Back end" />
            <MultiComboBoxItem text="Python" />
            <MultiComboBoxItem text="PHP" />
            <MultiComboBoxItem text="Java" />
            <MultiComboBoxItem text="C#" />
            <MultiComboBoxGroupItem text="Design" />
            <MultiComboBoxItem text="Figma" />
            <MultiComboBoxItem text="Mural" />
            <MultiComboBoxItem text="Adobe Illustrator" />
            <MultiComboBoxItem text="ProofHub" />
        </MultiComboBox>
    )
}

export default SkillDropdown