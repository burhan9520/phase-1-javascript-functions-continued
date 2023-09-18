function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }

// Function mondayWork
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }
  

  function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }

  const saturdayFunResult = saturdayFun();
console.log(saturdayFunResult); // Output: "This Saturday, I want to roller-skate!"

const mondayWorkResult = mondayWork("work from home");
console.log(mondayWorkResult); // Output: "This Monday, I have to work from home."

const wrapWithFlair = wrapAdjective("!!!");
const wrappedAdjective = wrapWithFlair("awesome");
console.log(wrappedAdjective); // Output: "You are !!!awesome!!!"


  
  
