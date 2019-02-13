import React from 'react';
import PropTypes from 'prop-types';

function ScheduleDetails(props) {
  return (
    <div>
      <h3>{props.day}</h3>
      <p><em>Location: </em>{props.location}</p>
      <p><em>Hours: </em>{props.hours}</p>
      <p><em>Booth: </em>{props.booth}</p>
      <hr />
    </div>
  )
}
ScheduleDetails.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string,
  booth: PropTypes.string
};
export default ScheduleDetails;