# Date utils
### Easy Date formatting and date creation utilities to streamline working with dates. 
___
\
*to Format dates import the formats enum*
 
```javascript
import { Formats } from 'date_extentions/lib/FormatesEnum'
```
`
format to any of the available formats
```javascript

let newDate = new Date();
newDate.toFormat(Formats['YYYY-MM-DD HH:MM']))

```

to create dates from formatted strings:
___
```javascript

import { ExtendDate } from 'date_extentions/lib/ExtendDate'
import { Formats } from 'date_extentions/lib/FormatesEnum';

...
const dateString = '2022-07-29';
const newDate = ExtendDate.dateFrom( dateString, Formats['YYYY-MM-DD']); 

```
### avilable formats:
* YYYY-MM-DD
* MM/DD/YY
* YY/MM/DD
* DD/MM/YY
* YYYY-MMDDTHH:MM:SS
* YYYYMMDDHHMMSS
* YYYY-MM-DD HH:MM

* More formats will be added with time
