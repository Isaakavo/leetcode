/*
  Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example
s = '12:01:00PM'
Return '12:01:00'.
s='12:01:00AM'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns
string: the time in 24 hour format
Input Format
A single string  that represents a time in -hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints

All input times are valid

Sample Input 0
07:05:45PM
Sample Output 0
19:05:45
*/
function timeConversion(s) {
    const timeArray = s.split(':');
    const isDayOrNight = timeArray[2].includes('AM');
    if (isDayOrNight && timeArray[0] === '12') {
        timeArray[0] = '00';
        timeArray[2] = timeArray[2].replace('AM', '');
    }
    else if (!isDayOrNight && timeArray[0] === '12') {
        timeArray[2] = timeArray[2].replace('PM', '');
    }
    else if (!isDayOrNight) {
        timeArray[0] = String(Number(timeArray[0]) + 12);
        timeArray[2] = timeArray[2].replace('PM', '');
    }
    else {
        timeArray[2] = timeArray[2].replace('AM', '');
    }
    return timeArray.join(':');
}
console.log(timeConversion('04:59:59AM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('01:05:45PM'));
console.log(timeConversion('05:05:45PM'));
