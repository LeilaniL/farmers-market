import React from 'react';
import TodayInfo from './TodayInfo';
import WeeklySchedule from './WeeklySchedule';

function Welcome(props) {
  var welcomeStyles = {
    height: '100%',
    backgroundColor: '#a3ffa8',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    paddingTop: '50px'
  }
  return (
    <div style={welcomeStyles}>
      <h1>Welcome to Avery's Organics</h1>
      <TodayInfo />
      <WeeklySchedule />
      {/* <MonthlyProduceList /> */}
    </div >
  )
}
export default Welcome;