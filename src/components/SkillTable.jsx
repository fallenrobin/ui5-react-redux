import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Table,
    TableColumn,
    Label,
    FlexBox,
    Button,
    Dialog,
    FlexBoxJustifyContent,
    Bar,
    RatingIndicator,
    Icon,
    Title,
    Text,
    ComboBox,
    ComboBoxGroupItem,
    ComboBoxItem
}
    from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/information";


import SkillItem from './SkillItem';
// TODO: import GenericDialog from './GenericDialog';
import SkillDropdown from '../_widgets.js/SkillDropdown';



function SkillTable() {

    const [selectedSkill, setSelectedSkill] = useState('');
    const [selectedRating, setSelectedRating] = useState('');

    const employeeSkillData = (useSelector(store => store.skillReducer));
    const isOpen = (useSelector(store => store.dialogReducer));
    const newSkillData =
    {
        technology: selectedSkill,
        rating: selectedRating,
        // date: { {Date.now} }
    }

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_SKILLS'
        });
    }, []);

    const handleSave = () => {
        dispatch({
            type: 'SET_SKILL',
            payload: newSkillData
        })
    }

    const handleOpenDialog = () => {
        console.log('clicked Add Skill');
        dispatch({ type: 'OPEN_DIALOG' });
    }

    const handleCloseDialog = () => {
        dispatch({ type: 'CLOSE_DIALOG' });
    }

    return (
        <>
            <FlexBox
                style=
                {{
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Table
                    columns={<>
                        <TableColumn style={{ width: '30rem' }}>
                            <Label>Technology</Label>
                        </TableColumn>
                        <TableColumn minWidth={800} popinText="Supplier">
                            <Label>Rating</Label>
                        </TableColumn>
                        <TableColumn demandPopin minWidth={400} popinText="Dimensions">
                            <Label>Date Modified</Label>
                        </TableColumn>
                        <TableColumn demandPopin minWidth={400} popinText="Weight">
                            <Label>Edit</Label>
                        </TableColumn>
                        <TableColumn>
                            <Label>Delete</Label>
                        </TableColumn></>}
                    onLoadMore={function noRefCheck() { }}
                    onPopinChange={function noRefCheck() { }}
                    onRowClick={function noRefCheck() { }}
                    onSelectionChange={function noRefCheck() { }}
                    style={{ width: "50%" }}
                >
                    {employeeSkillData.map((skill) => {
                        return (
                            <SkillItem
                                skill={skill}
                                key={skill.technology}
                            />
                        )
                    })}
                </Table >
                <Button
                    icon="add"
                    design="Positive"
                    style={{ width: "10em", marginLeft: "1em", marginTop: "1em" }}
                    onClick={handleOpenDialog}
                >
                    Add a Skill
                </Button>
                <Dialog
                    open={isOpen}
                    header=
                    {<Bar>
                        <Title>
                            Add Skill
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
                                    onClick={handleSave}
                                >
                                    Save
                                </Button>
                                <Button
                                    design="transparent"
                                    onClick={handleCloseDialog}
                                    open
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
                        <ComboBox
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
                        {/* FIXME: info icon */}
                        < Text
                            icon="information"
                            style={{ marginTop: '1em' }}
                        >
                            What is your level in this skill?
                        </Text>

                        <RatingIndicator
                            onChange={(event) => setSelectedRating(event.target.value)}
                        />

                    </FlexBox>
                </Dialog>
            </FlexBox>
        </>
    )
}

export default SkillTable;
