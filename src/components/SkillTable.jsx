import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Table,
    TableColumn,
    Label,
    FlexBox,
    Button,
    Dialog,
    FlexBoxJustifyContent
}
    from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/add";

import SkillItem from './SkillItem';
// TODO: import GenericDialog from './GenericDialog';
import SkillDropdown from '../_widgets.js/SkillDropdown';



function SkillTable() {

    const employeeSkillData = (useSelector(store => store.skillReducer));
    const isOpen = (useSelector(store => store.dialogReducer));

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_SKILLS'
        });
    }, []);

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
                >
                    <FlexBox
                        style=
                        {{
                            display: 'block',
                        }}
                    >
                        <SkillDropdown />
                        <FlexBox
                            style=
                            {{
                                display: 'flex',
                                flexDirection: 'row'
                            }}
                            >
                            <Button
                                design="Emphasized"
                                icon="accept"
                                style={{ width: "10em", marginLeft: "1em", marginTop: "1em" }}
                                // onClick={handleCloseDialog}
                                open
                            >
                                Save
                            </Button>
                            <Button
                                design="transparent"
                                style={{ width: "10em", marginLeft: "1em", marginTop: "1em" }}
                                onClick={handleCloseDialog}
                                open
                            >
                                Cancel
                            </Button>
                        </FlexBox>
                    </FlexBox>
                </Dialog>
            </FlexBox>
        </>
    )
}

export default SkillTable;
