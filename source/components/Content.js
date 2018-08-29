import React from 'react';

import Profile from './Profile.js';
import Images from './Images.js';

export default class Content extends React.Component {
    render () {
        return (
            <div className = 'content'>
                <Profile />
                <Images />
            </div>
        );
    }
}
