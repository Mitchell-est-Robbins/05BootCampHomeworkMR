// I worked with William Renfroe during the project

// go GIVEN I am using a daily planner to create a schedule
// go WHEN I open the planner
// go THEN the current day is displayed at the top of the calendar
// go WHEN I scroll down
// go THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
//=================================================================
// task 1 momemnt
// we are given a jumbotron
//  in that jumbotron there needs to be the date time from momemnt
var timeDisplayEl = $('#currentDay')

//thank you stack overflow for HH= mil time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] HH:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

setInterval(displayTime, 1000);

// =============================================================================
// task 2 bootstrap jquery
//might have to use objects... shocker...
// var hourBlock = [
//   { 
//     id:"0",
//     hour:"08",
//     time:"08",
//     text: "",
//   }
// ]



// XX there needs to be a 10 rows with 3 columns bootstrapped in
// XX time brackets need to be added 8-6 using 24clock

// XX colors; set three time status colors past-grey present-red  future-green
// XX       set blue for the save button

// $(ids.join())


var ids = [
  {id: '0800',
  time: '08',
  text: "",
  }, 
  {id: '0900',
  time: '09',
  text: "",

  },
  {id: '1000',
  time: '10',
  text: "",

  },
  {id: '1100',
  time:'11',
  text: "",

  },
  {id: '1200',
  time: '12',
  text: "",

  },
  {id: '1300',
  time: '13',
  text: "",

  },
  {id: '1400',
  time: '14',
  text: "",

  },
  {id: '1500',
  time:'15',
  text: "",

  },
  {id: '1600',
  time: '16',
  text: "",

  },
  {id: '1700',
  time: '17',
  text: "",

  },
 
 ]
console.log(ids);

ids.forEach(function(thisHour) { //ids=myday
  var row= $("<form>").attr({
    "class":"row"
  });
  $(".container").append(row);  //row =hourRow
  
  var hourbit = $("<div>") //hourField=hourbit
  .text(thisHour.id)
  .attr({
    "class": "col-1 hour"
  });

  var plan =$("<div>") //data= plan
  .attr({
    "class": "col-10 description p-0"
  })
  var data= $("<textarea>");
  plan.append(data);
  data.attr("id", thisHour.id);
  if (thisHour.time < moment().format("HH")) {
     data.attr({
       "class": "past",
     })
    } else if (thisHour.time > moment().format("HH")) {
       data.attr({
         "class": "future"
       })
      } else if (thisHour.time === moment().format ("HH")) {
        data.attr({
          "class": "present"
        })
      }

      var saveBtn = $("<button>")
      .attr({
        "class": "col-1 saveBtn"
      });
      
      row.append(hourbit, plan, saveBtn)

 })
  






// ids.forEach (function(thisHour) {
//   var textZone = $("<input>");
//   textZone.append(textZone);
//   textZone.attr("id", thisHour.id )

// if (thisHour.time < moment(). format ("HH")) {
//   textZone.addClass ("past"
//     )
    
// }else if (thisHour.time > moment().format ("HH")) {
//   textZone.addClass("future"
//     )
// }else {
//   textZone.addClass(
//         "present"
//     )
    
// }
// });






// do an if/while loop statement, if hour value is < timeDisplayEl style css past 
// else if mtime is > style css future
// else make it style css current

// ============================================================================
// task 3

// XXmake it so you can write in the boxes (might already be a thing) 
// XXthen take shit from the assignment in class that lets you use the save button
// XXthe button has to have prevent default so it isn't refreshing all the time.
// ============================================================================
// task 4



// save button saves the bullshit into local storage
// it works by event listener targeting click like what we learnt in class
// it just has to save the box that it is touching 

//page populates from local storage

