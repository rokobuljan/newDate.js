# newDate.js
A simple helper function to get dates the easy way
---

```
newDate( "date", "modifiers", "weekday" )
```

| Param | Value   |  Description       |  Value examples |
| :---  | :---    | :---               |  :---           |
| date  | string, number, object | A Start date. Valid Date String, timestamp or dateObject  |  `""` (now Date)<br> `"2/20/2017"` <br> `"2-20-2017"`<br>`1494131242686`<br>`new Date(2017,2,20)` |
| modifiers | string | Comma delimited modifiers `"(+-)N[d|m|y](, ...)"` | `""` *(no modifier)*<br>`"1d"` (or `"+1d"`),<br>`"-21d"`<br> `"+2y,-2m,+2d"` |
| weekday | string | String Number representing the weekday Number `"(+-)N"` where *N* is a range from 0-6 (0 being Sunday and 6 Saturday) | `"0"` (or `"+0"`) for nearest Sunday,<br> `"-0"` for previous Sunday |

Returns a **new Date Object** `[object Date] { ... }`


____

## Basic usage
```
//  Get current Date
var now = newDate();  
```
#### Passing `modifiers` and `weekday` Parameters

```
// Get date 14 days from today
var twoWeeksFromNow     = newDate("", "+14d");  

// Get date before six months
var beforeSixMonths     = newDate("", "-6m"); 

// Get specific m/d/yyyy date minus dwo days
var twoDaysBeforeEvent  = newDate("6/16/2017", "-2d");  

// Get following Wednesday date (or return today's date if today is that Wednesday)
var twoDaysBeforeEvent  = newDate("", "", "4");  

// Get following Wednesday date (or return next week's Wednesday date if today is Wednesday)
var twoDaysBeforeEvent  = newDate("", "+1d", "4");  

// Get previous Wednesday date
var twoDaysBeforeEvent  = newDate("", "", "-4");  

// A Conference this year took place the: Sun Oct 23 2016.
// Next year                                               "+1y"            (= Mon Oct 23 2017)
// the meetup is moved three weeks eariler                 "+1y,-21d"       (= Mon Oct 02 2017)
// and must be in that week's Saturday instead             "+1y,-21d", "6"  (= Sat Oct 07 2017) 
var nextYearMeetupDate  = newDate("10-23-2016", "+1y,-21d", "6");

// Same as above, just passing a Date Object
var nextYearMeetupDate  = newDate(new Date(2016, 9, 23), "+1y,-21d", "6");

```

To recap:  

**Modifiers** String Number can have a positive or negative `+`*(optional)* or `-` **prefix**,  and **must be suffixed** by `d`, `m` or `y`.<br>
You can combine you modifiers any way you want by using **comma delimiter**: `"+3d,+2y,-4m"` *(order is unspecific)*

**Weekday** String Number can have a positive or negative character prefix  `+`*(optional)*, `-`, followed by a number from 0 to 6.  
Use this parameter to get you to the closest desired weekday *(see use-cases in the examples above)*.
