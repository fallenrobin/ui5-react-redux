import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
    Label,
    TableRow,
    TableCell,
    Button,
    RatingIndicator,
    Dialog
} from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/delete";


function SkillItem({ skill }) {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)


    const handleClickEdit = () => {
        dispatch({ type: 'EDIT_DIALOG_OPEN' })
        dispatch({ type: 'OPEN_DIALOG' })
    }

    return (
        <TableRow
            key={skill.id}>
            <TableCell>
                <Label>
                    {skill.technology}
                </Label>
            </TableCell>
            <TableCell>
                <RatingIndicator
                    value={skill.rating}
                    readonly='true'
                />
            </TableCell>
            <TableCell>
                <Label>
                    {skill.date}
                </Label>
            </TableCell>
            <TableCell>
                <Button
                    icon="edit"
                    onClick={handleClickEdit}
                />
            </TableCell>
            <TableCell>
                <Button
                    icon="delete"
                />
            </TableCell>
        </TableRow>

    )
}

export default SkillItem