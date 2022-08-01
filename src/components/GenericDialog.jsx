import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { Dialog } from '@ui5/webcomponents-react';


function GenericDialog() {

    const isOpen = (useSelector(store => store.dialogReducer));

    return (
        <Dialog
            open={isOpen}
        >
            hello world
        </Dialog>
    )
}

export default GenericDialog