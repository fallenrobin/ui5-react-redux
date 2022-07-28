import React from 'react';
import {
    AnalyticalTable,
    FlexBox,
    Button, 
    RatingIndicator
} from '@ui5/webcomponents-react';
import "@ui5/webcomponents-icons/dist/delete";



function SkillTable() {
    return (
        <AnalyticalTable
            columns={[
                {
                    Header: 'Technology',
                    accessor: 'technology',
                    headerTooltip: 'Full Name', 
                    width: 400
                },
                {
                    Cell: (instance) => {
                        const { cell, row, webComponentsReactProperties } = instance;
                        // disable buttons if overlay is active to prevent focus
                        const isOverlay = webComponentsReactProperties.showOverlay;
                        // console.log('This is your row data', row.original);
                        return (
                            <FlexBox>
                                <RatingIndicator/>
                            </FlexBox>
                        );
                    },
                    Header: 'Rating',
                    accessor: 'rating',
                    className: 'superCustomClass',
                    disableFilters: false,
                    disableGroupBy: true,
                    disableSortBy: false,
                    hAlign: 'End', 
                    width: 300
                },
                {
                    Header: 'Date Modified',
                    accessor: 'Date', 
                    width: 200
                },
                
                {
                    Cell: (instance) => {
                        const { cell, row, webComponentsReactProperties } = instance;
                        // disable buttons if overlay is active to prevent focus
                        const isOverlay = webComponentsReactProperties.showOverlay;
                        // console.log('This is your row data', row.original);
                        return (
                            <FlexBox>
                                <Button icon="edit" disabled={isOverlay} />
                                <Button icon="delete" disabled={isOverlay} />
                            </FlexBox>
                        );
                    },
                    Header: 'Actions',
                    accessor: '.',
                    disableFilters: true,
                    disableGroupBy: true,
                    disableResizing: true,
                    disableSortBy: true,
                    id: 'actions',
                    width: 100
                }
            ]}
            data={[
                {
                    technology: 'ABAP',
                    Date: '01/01/2021',
                    rating: '3',
                    status: 'Success'
                },
                {
                    technology: 'React',
                    Date: '01/01/2021',
                    status: 'None'
                }, 
                {
                    technology: 'ABAP RAP',
                    Date: '01/01/2021',
                    rating: '3',
                    status: 'Success'
                },
                {
                    technology: 'CAPM',
                    Date: '01/01/2021',
                    status: 'None'
                }, 
                {
                    technology: 'OData',
                    Date: '01/01/2021',
                    rating: '3',
                    status: 'Success'
                },
                {
                    technology: 'S4/HANA',
                    Date: '01/01/2021',
                    status: 'None'
                }
            ]}
            filterable
            groupBy={[]}
            groupable
            infiniteScroll
            onColumnsReordered={() => { }}
            onGroup={() => { }}
            onLoadMore={() => { }}
            onRowClick={() => { }}
            onRowExpandChange={() => { }}
            onRowSelected={() => { }}
            onSort={() => { }}
            onTableScroll={() => { }}
            rowHeight={44}
            selectedRowIds={{
                3: true
            }}
            selectionMode="SingleSelect"
            withRowHighlight
            alternateRowColor="true"
        />
    )
}

export default SkillTable