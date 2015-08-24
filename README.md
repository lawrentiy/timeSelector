Interface for fine and simple way to select time (hours and minutes).

timeSelector - single selector.
use: {{>timeSelector field='fieldNameOfParentObject'}}
That code will write {h: 10, m: 15} object into field fieldNameOfParemtObject and trigger changed event.

timeIntervalSelector - two selectors
use: {{>timeIntervalSelector field='fieldNameOfParentObject'}}
That code will write
    {start: {h: 10, m: 15}, end: {h: 12, m: 30}} 
    object into field fieldNameOfParemtObject and trigger changed event.