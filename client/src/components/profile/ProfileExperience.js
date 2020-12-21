import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({ experience: {
    compnay,
    title,
    location,
    current,
    to,
    from,
    description
} }) => {
    return (
        <div>
            <h3 className="text-dark">{compnay}</h3>
            <p>
                <Moment format='YYY/MM/DD'>{from}</Moment> - {!to ? 'Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>Position: </strong>{title}
            </p>
            <p>
                <strong>description: </strong>{description}
            </p>
        </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default ProfileExperience
