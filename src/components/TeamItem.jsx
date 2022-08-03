import React from 'react'
import { StandardListItem } from '@ui5/webcomponents-react';


function TeamItem({ teamMember }) {
    return (
        <>
            <StandardListItem>{teamMember.name}</StandardListItem>
        </>
    )
}

export default TeamItem;