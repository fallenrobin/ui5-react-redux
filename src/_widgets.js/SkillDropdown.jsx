import React from 'react'

import {
    ComboBox,
    ComboBoxGroupItem,
    ComboBoxItem,
    Input
} from '@ui5/webcomponents-react';


function SkillDropdown() {

    const selectSkill = () => {
        console.log('skill selected:');
    }

    return (
        <ComboBox
            onChange={selectSkill}
            placeholder={'Select technology'}
        >
            <ComboBoxGroupItem text="Front end" />
            <ComboBoxItem text="CSS"/>
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
        </ComboBox>
    )
}

export default SkillDropdown