import React, { useState } from 'react'

import {
    ComboBox,
    ComboBoxGroupItem,
    ComboBoxItem,
    Input
} from '@ui5/webcomponents-react';


function SkillDropdown({ newSkillData }) {

    const [selectedSkill, setSelectedSkill] = useState('');

    const selectSkill = () => {
        console.log('skill selected:', selectedSkill);
    }

    return (
        <ComboBox
            // onChange={selectSkill}
            onChange={(event) => setSelectedSkill(event.target.value)}
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
        </ComboBox>
    )
}

export default SkillDropdown