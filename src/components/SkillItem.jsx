import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import {
    Label,
    TableRow,
    TableCell,
    Button,
    RatingIndicator
} from '@ui5/webcomponents-react';

function SkillItem({ skill }) {

    const dispatch = useDispatch();

const [technology, setTechnology] = useState('');
const [date, setDate] = useState('');
const [rating, setRating] = useState('');

    // const editedSkill =
    // {
    //     technology: technology,
    //     date: date,
    //     rating: rating,
    // }

    const handleSkillEdit = () => {
        console.log('clicked edit!');
        // dispatch({
        //     type: 'EDIT_SKILL',
        //     payload: 
        // })
    };

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
                    onClick={handleSkillEdit}
                />
            </TableCell>
            <TableCell>
                <Button
                    icon="delete"
                    disabled={true}
                />
            </TableCell>
        </TableRow>

    )
}

export default SkillItem