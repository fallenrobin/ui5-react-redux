import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    Table,
    TableColumn,
    Label,
    TableRow,
    TableCell,
    AnalyticalTable,
    FlexBox,
    Button,
    RatingIndicator
} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/add";

import SkillItem from './SkillItem';



function SkillTable() {

    const employeeSkillData = (useSelector(store => store.skillReducer));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_SKILLS'
        });
    }, []);
    

    return (
<>
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
        >
            Add a Skill
        </Button>
        </>
    )
}

export default SkillTable
