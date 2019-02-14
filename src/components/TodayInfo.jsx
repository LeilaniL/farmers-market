import React from 'react';
import WeeklySchedule from './WeeklySchedule';

function TodayInfo(props) {
  var currentDay = new Date();
  WeeklySchedule

  var todayStyles = {
    backgroundColor: '#ffd3a3',
    borderRadius: '4px',
    width: '400px',
    height: '400px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '25px'
  }
  return (
    <div style={todayStyles}>

      <h3>Today: {currentDay.toLocaleDateString()}</h3>
      <p><strong>You can find us at:</strong></p>
      <ul>
        <li>Location</li>
        <li>Hours</li>
        <li>Stall</li>
      </ul>
    </div>
  )
}

export default TodayInfo;