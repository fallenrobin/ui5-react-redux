import React from 'react'
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

function SkillItem({skill}) {
    return (
        <TableRow>
            <TableCell>
                <Label>
                    {skill.technology}
                </Label>
            </TableCell>
            <TableCell>
                <Label>
                    {skill.rating}
                </Label>
            </TableCell>
            <TableCell>
                <Label>
                    {skill.Date}
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
        
  )
}

export default SkillItem