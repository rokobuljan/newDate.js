# newDate.js
A simple helper function to get dates the easy way
---

```
newDate( "date", "modifiers", "weekday" )
```

| Param | Type   |  Description       |  Value examples |
| :---  | :---    | :---               |  :---           |
| date  | String, Number, Object | A Start date. Valid Date String, timestamp or dateObject  |  `""` (current Date)<br> `"2/28/2017"` <br> `"2-28-2017"` <br> `"2017-2-28"` <br> `"1488236400000"` <br> `1488236400000` <br> `new Date(2017,1,28)` |
| modifiers | String | Comma delimited modifiers | `""` *(no modifier)*<br>`"1d"` (or `"+1d"`),<br>`"-21d"`<br> `"+2y,-2m,+2d"` |
| weekday | String | String number representing the weekday Number `"(-+)N"`<br>where *N* is a range from 0-6 (0 being Sunday and 6 Saturday) | `"0"` (or `"+0"`) for nearest Sunday,<br> `"-0"` for previous Sunday |

Returns a **new Date Object** `[object Date] { ... }`


____

## Basic usage
```
//  Get current Date
var now = newDate();  
var now = newDate(""); 
```

## Using the `date` Parameter


**Get date from specific date**
```
var raceStartDate = newDate("2/20/2017");  
var raceStartDate = newDate("2-20-2017"); 
var raceStartDate = newDate(new Date(2017, 1, 20)); // Inside Date Object raw Months are 0 based! 0 - 11
```

## Using the `modifiers` Parameter

**Get date 14 days from today**
```
var twoWeeksFromNow = newDate("", "+14d");  
```

**Get date before six months**
```
var sixMonthsAgo = newDate("", "-6m");  // IMPORTANT! Read the "Gotchas" section below
```

**Get date in 2 years, minus 5 months and plus three weeks** *(why not ;))*
```
var getThatDate = newDate("", "+2y,-5m,+21d");  
```

**Get specific m/d/yyyy date minus dwo days**
```
var twoDaysBeforeEvent = newDate("6/16/2017", "-2d");  
```

## Using the `weekday` Parameter

**Get following Wednesday date** or **return today's date** if today is that Wednesday
```
var thisWednesday = newDate("", "", "4");  
```

**Get following Wednesday date** or **return next week's Wednesday date** if today is that Wednesday
```
var nextWednesday = newDate("", "+1d", "4");  
```

**Get previous Wednesday date**
```
var lastWednesday = newDate("", "", "-4");  
```

**Get distant Weekday dates**
```
// A Conference this year took place the: Sun Oct 23 2016.
// Next year                                               "+1y"            (= Mon Oct 23 2017)
// the meetup is moved three weeks eariler                 "+1y,-21d"       (= Mon Oct 02 2017)
// and must be in that week's Saturday instead             "+1y,-21d", "6"  (= Sat Oct 07 2017) 
var nextYearMeetupDate  = newDate("10-23-2016", "+1y,-21d", "6");
```
___

## Gotchas

Be advised that the month *Modifier* like `"+1m"` (or `"-1m"`) cannot automagically know the numbers of days you want to span.  
Setting the initial Date to the Jan 31. and doing a *+1m* will not give the probably expected *Feb 28* but will add-up 3 days resulting in:

```
newDate("2017-1-31");        // Tue Jan 31 2017 00:00:00 GMT+0100 (Central Europe Standard Time)
newDate("2017-1-31", "+1m"); // Fri Mar 03 2017 00:00:00 GMT+0100 (Central Europe Standard Time)
```

___

### To recap:  

**Date** is a value representing the start date.

**Modifiers** String Number can have a positive or negative `+`*(optional)* or `-` **prefix**,  and **must be suffixed** by `d`, `m` or `y`.<br>
You can combine you modifiers any way you want by using **comma delimiter**: `"+3d,+2y,-4m"` *(order is unspecific)*

**Weekday** String Number can have a positive or negative character prefix  `+`*(optional)*, `-`, followed by a number from 0 to 6 representing a desired weekday stop.  
Use this parameter to get you to the closest desired weekday *(see use-cases in the examples above)*.
