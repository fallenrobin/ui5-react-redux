import React from 'react'

import {
    ComboBox,
    ComboBoxGroupItem,
    ComboBoxItem,
    Input
} from '@ui5/webcomponents-react';


function SkillDropdown() {
    return (
        <ComboBox
            onChange={function noRefCheck() { }}
            onInput={function noRefCheck() { }}
            onOpenChange={function noRefCheck() { }}
            onSelectionChange={function noRefCheck() { }}
            placeholder={'Select technology'}
        >
            <ComboBoxGroupItem text="Front end" />
            <ComboBoxItem text="CSS" />
            <ComboBoxItem text="Tailwind" />
            <ComboBoxItem text="MUI" />
            <ComboBoxItem text="UI5" />
            <ComboBoxGroupItem text="Back end" />
            <ComboBoxItem text="Python" />
            <ComboBoxItem text="PHP" />
            <ComboBoxItem text="Java" />
            <ComboBoxItem text="C#" />
            <ComboBoxGroupItem text="Design" />
            <ComboBoxItem text="Figma" />
            <ComboBoxItem text="Mural" />
            <ComboBoxItem text="Adobe Illustrator" />
            <ComboBoxItem text="ProofHub" />
            <ComboBoxGroupItem text="Create new skill" />
            <ComboBoxItem
                text="Create new skill"
                valueState="Error"
            />

        </ComboBox>
    )
}

export default SkillDropdown