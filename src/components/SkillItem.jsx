import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CreateSkillInput from '../_widgets.js/CreateSkillInput';
import {
    Label,
    TableRow,
    TableCell,
    Button,
    RatingIndicator,
    Dialog,
    Bar, 
    Title
} from '@ui5/webcomponents-react';

import "@ui5/webcomponents-icons/dist/delete";


function SkillItem({ skill }) {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)


    // const handleClickEdit = () => {
    //     setOpen(true);
    // }

    return (
        <>
            <Dialog
                open={open}
                header=
                {<Bar>
                    <Title>
                        Create New Skill
                    </Title>
                </Bar>
                }
                footer=
                {<Bar
                    design="Footer"
                    endContent={
                        <>
                            <Button
                                design="Emphasized"
                                icon="accept"
                                open
                                // onClick={handleSave}
                            >
                                Save
                            </Button>
                            <Button
                                design="transparent"
                                // onClick={handleCloseDialog}
                                open
                            >
                                Cancel
                            </Button>
                        </>
                    } />}
            >
                <CreateSkillInput/>
            </Dialog>
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
                        onClick={()=>setOpen(true)}
                    />
                </TableCell>
                <TableCell>
                    <Button
                        icon="delete"
                    />
                </TableCell>
            </TableRow>
        </>
    )
}

export default SkillItem