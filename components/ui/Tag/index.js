import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function Chips({ title, link }) {
    return (
        <Chip
            label={title}
            component="a"
            href={link}
            clickable
            color="primary"
        />
    );
}
