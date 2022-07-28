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
import "@ui5/webcomponents-icons/dist/delete";



function SkillTable() {

    const employeeSkillData = (useSelector(store => store.skillReducer));
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_SKILLS'
        });
    }, []);
    // console.log(employeeSkillData);
    // console.log(employeeSkillData[1].technology);

    //     const tableRow =
    //         <TableRow>
    //     <TableCell>
    //         <Label>
    //             {/* {employeeSkillData[1].technology} */}
    //             Blah
    //         </Label>
    //     </TableCell>
    //     <TableCell>
    //         <Label>
    //             Very Best Screens
    //         </Label>
    //     </TableCell>
    //     <TableCell>
    //         <Label>
    //             30 x 18 x 3cm
    //         </Label>
    //     </TableCell>
    //     <TableCell>
    //         <Label>
    //             4.2KG
    //         </Label>
    //     </TableCell>
    //     <TableCell>
    //         <Label>
    //             956EUR
    //         </Label>
    //     </TableCell>
    // </TableRow>
    // ;

    return (

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
            <TableRow>
                <TableCell>
                    <Label>
                        {employeeSkillData[0].technology}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {employeeSkillData[0].rating}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        {employeeSkillData[0].Date}
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        edit button
                    </Label>
                </TableCell>
                <TableCell>
                    <Label>
                        delete button
                    </Label>
                </TableCell>
            </TableRow>
        </Table>
    )
}

export default SkillTable




// <AnalyticalTable
        //     columns={[
        //         {
        //             Header: 'Technology',
        //             // row: employeeSkillData[1].technology,
        //             // accessor: employeeSkillData[1].technology,
        //             headerTooltip: 'Full Name',
        //             width: 400
        //         },
        //         {
        //             Cell: (instance) => {
        //                 const { cell, row, webComponentsReactProperties } = instance;
        //                 // disable buttons if overlay is active to prevent focus
        //                 const isOverlay = webComponentsReactProperties.showOverlay;
        //                 // console.log('This is your row data', row.original);
        //                 return (
        //                     <FlexBox>
        //                         <RatingIndicator />
        //                     </FlexBox>
        //                 );
        //             },
        //             Header: 'Rating',
        //             accessor: 'rating',
        //             className: 'superCustomClass',
        //             disableFilters: false,
        //             disableGroupBy: true,
        //             disableSortBy: false,
        //             hAlign: 'End',
        //             width: 300
        //         },
        //         {
        //             Header: 'Date Modified',
        //             accessor: 'Date',
        //             width: 200
        //         },

        //         {
        //             Cell: (instance) => {
        //                 const { cell, row, webComponentsReactProperties } = instance;
        //                 // disable buttons if overlay is active to prevent focus
        //                 const isOverlay = webComponentsReactProperties.showOverlay;
        //                 // console.log('This is your row data', row.original);
        //                 return (
        //                     <FlexBox>
        //                         <Button icon="edit" disabled={isOverlay} />
        //                         <Button icon="delete" disabled={isOverlay} />
        //                     </FlexBox>
        //                 );
        //             },
        //             Header: 'Actions',
        //             accessor: '.',
        //             disableFilters: true,
        //             disableGroupBy: true,
        //             disableResizing: true,
        //             disableSortBy: true,
        //             id: 'actions',
        //             width: 100
        //         }
        //     ]}
            // data={[
            //     {
            //         technology: 'ABAP',
            //         Date: '01/01/2021',
            //         rating: '3',
            //         status: 'Success'
            //     },
            //     {
            //         technology: 'React',
            //         Date: '01/01/2021',
            //         status: 'None'
            //     },
            //     {
            //         technology: 'ABAP RAP',
            //         Date: '01/01/2021',
            //         rating: '3',
            //         status: 'Success'
            //     },
            //     {
            //         technology: 'CAPM',
            //         Date: '01/01/2021',
            //         status: 'None'
            //     },
            //     {
            //         technology: 'OData',
            //         Date: '01/01/2021',
            //         rating: '3',
            //         status: 'Success'
            //     },
            //     {
            //         technology: 'S4/HANA',
            //         Date: '01/01/2021',
            //         status: 'None'
            //     }
            // ]}
        //     filterable
        //     groupBy={[]}
        //     groupable
        //     infiniteScroll
        //     onColumnsReordered={() => { }}
        //     onGroup={() => { }}
        //     onLoadMore={() => { }}
        //     onRowClick={() => { }}
        //     onRowExpandChange={() => { }}
        //     onRowSelected={() => { }}
        //     onSort={() => { }}
        //     onTableScroll={() => { }}
        //     rowHeight={44}
        //     selectedRowIds={{
        //         3: true
        //     }}
        //     selectionMode="SingleSelect"
        //     withRowHighlight
        //     alternateRowColor="true"
        // />