"use strict"
function tellFortune() {
    let numChildren = [2, 3, 4, 5, 6];
    let partnerNames = ["Anna", "Johanna", "Barbara", "Jennifer", "Nicole"];
    let locations = ["Athens", "Barcelona", "Rome", "New York", "London"];
    let jobs = ["developer", "music producer", "lawyer", "comedian", "doctor"];

    let randChild = numChildren[Math.floor(Math.random() * numChildren.length)];
    let randPartn = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    let randLoc = locations[Math.floor(Math.random() * locations.length)];
    let randJob = jobs[Math.floor(Math.random() * jobs.length)];

    return `You will be a ${randJob} in ${randLoc}, and married to ${randPartn} with ${randChild} kids.`
}
//Test
tellFortune();
