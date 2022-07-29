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
        >
            <MultiComboBoxGroupItem text="Asia" />
            <MultiComboBoxItem text="Afghanistan" />
            <MultiComboBoxItem text="China" />
            <MultiComboBoxItem text="India" />
            <MultiComboBoxItem text="Indonesia" />
            <MultiComboBoxGroupItem text="Europe" />
            <MultiComboBoxItem text="Austria" />
            <MultiComboBoxItem text="Bulgaria" />
            <MultiComboBoxItem text="Germany" />
            <MultiComboBoxItem text="Italy" />
            <MultiComboBoxGroupItem text="North America" />
            <MultiComboBoxItem text="Canada" />
            <MultiComboBoxItem text="Granada" />
            <MultiComboBoxItem text="Haiti" />
            <MultiComboBoxItem text="United States" />
        </MultiComboBox>
    )
}

export default SkillDropdown