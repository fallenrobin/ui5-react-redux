import React from 'react'
import { StandardListItem, Text } from '@ui5/webcomponents-react'


function NoteItem({ note }) {
    return (
        <StandardListItem>
            <Text
            wrapping='true'
            >
            {note.note}
            </Text>
            
        </StandardListItem>
    )
}

export default NoteItem