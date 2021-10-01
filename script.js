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

// go there needs to be a 10 rows with 3 columns bootstrapped in
// go time brackets need to be added 8-6 using 24clock

// go colors; set three time status colors past-grey present-red  future-green
// go       set blue for the save button


// do an if/while loop statement, if hour value is < timeDisplayEl style css past 
// else if mtime is > style css future
// else make it style css current

// ============================================================================
// task 3

// make it so you can write in the boxes (might already be a thing) 
// then take shit from the assignment in class that lets you use the save button
// the button has to have prevent default so it isn't refreshing all the time.
// ============================================================================
// task 4

// save button saves the bullshit into local storage
// it works by event listener targeting click like what we learnt in class
// it just has to save the box that it is touching 

//page populates from local storage

