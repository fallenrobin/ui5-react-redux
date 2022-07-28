import React from 'react'
import { useDispatch } from 'react-redux';

import {
    Label,
    TableRow,
    TableCell,
    Button,
    RatingIndicator
} from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/delete";


function SkillItem({ skill }) {

    const dispatch = useDispatch();

    return (
        <TableRow>
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
                    // onClick={trigger dialog open}
                />
            </TableCell>
            <TableCell>
                <Button
                    icon="delete"
                    // disabled={true}
                />
            </TableCell>
        </TableRow>

    )
}

export default SkillItem