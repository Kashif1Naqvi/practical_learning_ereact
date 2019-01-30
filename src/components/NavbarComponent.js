import React from 'react';

function NavbarComponent(){
  const date = new Date();
  const hours =date.getHours();
  const styles ={
    fontSize:30
  }
  let timeOfDay;
  
  if(hours<12){
    timeOfDay = "morning"
    styles.color = "#04756F"
  }
  else if(hours >12 && hours < 17 ){
    timeOfDay = 'afternoon'
    styles.color = "#900000"
  }
  else{
    timeOfDay = "Night"
    styles.color="#D90000"
  }
  return(
    <h1 style={styles}>Good {timeOfDay}</h1>
  );
}
export default NavbarComponent;