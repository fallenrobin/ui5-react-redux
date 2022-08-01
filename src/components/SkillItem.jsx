import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SkillDropdown from '../_widgets.js/SkillDropdown';
import { RatingIndicator } from '@ui5/webcomponents-react';

import {
    FlexBox,
    Label,
    TableRow,
    TableCell,
    Button,
    Dialog,
    Bar,
    Title,
    Text
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
                // onAfterClose={setOpen(false)}
                header=
                {<Bar>
                    <Title>
                        Edit Skill
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
                                onClick={() => { setOpen(false) }}
                            >
                                Cancel
                            </Button>
                        </>
                    } />}
            >
                <FlexBox
                    style=
                    {{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <SkillDropdown 
                    // disabled={true}
                    id={skill.id}
                    disabled={true}
                    value={skill.technology}
                    />
                    < Text
                        icon="information"
                        style={{ marginTop: '1em' }}
                    >
                        What is your level in this skill?
                    </Text>

                    <RatingIndicator
                    // onChange={(event) => setSelectedRating(event.target.value)}
                    // value={selectedRating}
                    />
                </FlexBox>
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
                        onClick={() => setOpen(true)}
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