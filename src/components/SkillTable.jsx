import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Table,
    TableColumn,
    Label,
    FlexBox,
    Button,
    Dialog,
    Bar,
    RatingIndicator,
    Title,
    ComboBox,
    ComboBoxGroupItem,
    ComboBoxItem,
    Input,
}
    from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/add";
import "@ui5/webcomponents-icons/dist/information";


import SkillItem from './SkillItem';
// TODO: import GenericDialog from './GenericDialog';


function SkillTable() {

    const [selectedSkill, setSelectedSkill] = useState('');
    const [selectedRating, setSelectedRating] = useState('');
    const [selectCustom, setSelectCustom] = useState(false);
    const [inputValueState, setInputValueState] = useState('');
    const [inputString, setInputString] = useState('');

    const allSkills = (useSelector(store => store.allSkillsReducer))
    const frontEndSkills = allSkills.filter(oneSkill => oneSkill.type === 1)
    const backEndSkills = allSkills.filter(oneSkill => oneSkill.type === 2)
    const designSkills = allSkills.filter(oneSkill => oneSkill.type === 3)
    const employeeSkillData = (useSelector(store => store.employeeSkillReducer));
    const isOpen = (useSelector(store => store.dialogReducer));

    const newSkillData =
    {
        skillID: 5,
        date: '8/1/2022',
        rating: selectedRating,
        id: 20
        // TODO: date: { {Date.now} }
    }

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_SKILLS'
        });
    }, []);

    const handleSave = () => {
        if ((
            (selectedSkill === ''
            ||
            selectedSkill === 'Create custom skill')
            &&
            inputString === ''
        )
            && selectedRating === '') {
            setInputValueState('Error')
            alert('Please pick or create a skill and rating')
        } else if (selectedSkill === '' && selectedRating !== '') {
            alert('Please pick or create a skill')
        } else if (selectedSkill !== '' && selectedRating === '') {
            alert('Please pick a rating for this skill')
        } else {
            setInputValueState('None')
            dispatch({
                type: 'SET_EMPLOYEE_SKILL',
                payload: newSkillData
            })
            handleCloseDialog();
            setSelectedRating('');
            setSelectedSkill('');
        }
    }

    const handleOpenDialog = () => {
        console.log('clicked Add Skill');
        dispatch({ type: 'OPEN_DIALOG' });
        setSelectCustom(false);
    }

    const handleCloseDialog = () => {
        dispatch({ type: 'CLOSE_DIALOG' });
        setSelectCustom(false)
        setSelectedSkill('');
        setInputValueState('None')
        setSelectedRating('')
    }

    const handleSelect = (event) => {
        if (event === 'Create custom skill') {
            setSelectCustom(true)
            setInputValueState('None')
        } else {
            setSelectedSkill(event)
        }
        if (selectedSkill !== '') {
            setInputValueState('None')
        }
    }

    const handleInput = (event) => {
        setInputString(event);
        if (event === '') {
            setInputValueState('Warning')
        } else {
            setInputValueState('Success')
        }
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
                    style={{ width: "50%" }}
                >
                    {employeeSkillData.map((skill) => {
                        return (
                            <SkillItem
                                skill={skill}
                                key={skill.id}
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
                        {
                            !selectCustom ?

                                <ComboBox
                                    onChange={(event) => handleSelect(event.target.value)}
                                    placeholder={'Select technology'}
                                    value={selectedSkill}

                                >
                                    <ComboBoxGroupItem text="Front end" />
                                    {frontEndSkills.map((oneSkill) => {
                                        return (
                                            <ComboBoxItem 
                                            text={oneSkill.name} 
                                            key={oneSkill.id}
                                            />
                                        )
                                    })}
                                    <ComboBoxGroupItem text="Back end" />
                                    {backEndSkills.map((oneSkill) => {
                                        return (
                                            <ComboBoxItem 
                                            text={oneSkill.name} 
                                            key={oneSkill.id}
                                            />
                                        )
                                    })}
                                    <ComboBoxGroupItem text="Design" />
                                    {designSkills.map((oneSkill) => {
                                        return (
                                            <ComboBoxItem
                                                text={oneSkill.name}
                                                key={oneSkill.id}
                                            />
                                        )
                                    })}
                                    <ComboBoxGroupItem text="Custom skill" />
                                    <ComboBoxItem text="Create custom skill" />
                                </ComboBox>
                                :
                                <Input
                                    placeholder='What is your new skill?'
                                    onChange={(event) => handleSelect(event.target.value)}
                                    onInput={(event) => handleInput(event.target.value)}
                                    required
                                    valueState={inputValueState}
                                />

                        }

                        <Label
                            for='ratingID'
                            required
                        >
                            What is your level in this skill?
                        </Label>
                        <RatingIndicator
                            onChange={(event) => setSelectedRating(event.target.value)}
                            value={selectedRating}
                            required
                            id='ratingID'
                        />


                    </FlexBox>
                </Dialog>
            </FlexBox >
        </>
    )
}

export default SkillTable;
