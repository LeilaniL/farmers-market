import React from 'react';

function TodayInfo(props) {
  var todayStyles = {
    backgroundColor: '#ffd3a3',
    borderRadius: '4px',
    width: '400px',
    height: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '25px'
  }
  return (
    <div style={todayStyles}>
      <h3>Today:</h3>
    </div>
  )
}

export default TodayInfo;