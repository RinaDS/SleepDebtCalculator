const getSleepHours = (day) => 
{
  if (day === 'monday'){
  return 10;
		} else if 
  (day === 'tuesday'){
  return 10; 
		} else if  
  (day === 'wednesday'){
  return 10;
  	} else if 
   (day === 'thursday'){
    return 10;
    } else if 
   (day === 'friday'){
     return 10;
   } else if 
   (day === 'saturday'){
     return 12;
   } else if 
   (day === 'sunday'){
     return 12;
   } else {
     return 'Error!';
   }
    
  };
console.log(getSleepHours('saturday'));
const getActualSleepHours= () =>
 			getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');

const getIdealSleepHours = () =>{
  let idealHours = 8;
  return idealHours * 7;
};
console.log(getActualSleepHours());

const calculateSleepDebt = () =>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours)
  {
    console.log("You got the perfect amount of sleep");
  } else if 
    (actualSleepHours > idealSleepHours){
      console.log("You got "+ (actualSleepHours - idealSleepHours) + " " + "hours more sleep than you needed.");
    } else if
      (actualSleepHours < idealSleepHours){
      console.log("You need to get" + " "+ (idealSleepHours - actualSleepHours) +" "+ "hour/s more rest!"); 
  } else {
    console.log("Something went wrong. Check your code.");
  }
};
calculateSleepDebt();

