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

function SkillItem({ skill }) {
    return (
        <TableRow>
            <TableCell>
                <Label>
                    {skill.technology}
                </Label>
            </TableCell>
            <TableCell>
                <RatingIndicator />
            </TableCell>
            <TableCell>
                <Label>
                    {skill.Date}
                </Label>
            </TableCell>
            <TableCell>
                <Button
                    icon="edit"
                    disabled={true}
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