#!/usr/bin/env node
'use strict';

const fs = require('fs');
const CFonts = require('cfonts');

const ActivityTracker = require("./activity");
const activityTracker = new ActivityTracker("footsteps.json", 2000);
activityTracker.init();

CFonts.say('Footstep-Lookup', {
    font: 'block',
    align: 'left',
    letterSpacing: 1,
    lineHeight: 1,
    colors: ['yellow', 'red', 'blue']
});

let data = fs.readFileSync('footsteps.json');
let displayData = JSON.parse(data);

console.log(displayData);
