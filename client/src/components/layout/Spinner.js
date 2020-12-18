import React from 'react';
import spinner from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <React.Fragment>
        <img
            src={spinner}
            style={{ width: '50px', margin: 'auto', marginTop: '100px', display: 'block' }}
            alt='Loading...'
        />
    </React.Fragment>
)