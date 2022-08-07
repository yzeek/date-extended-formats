# Date utils

### Easy Date formatting and date creation utilities to streamline working with dates.

---

\

_import module at the top of your project to add functionality to base date class_

```javascript
import "date_extentions/lib/DateInterface";
```

_to Format dates import the formats enum_

```javascript
import { Formats } from "date_extentions/lib/FormatesEnum";
```

`
format to any of the available formats

```javascript
let newDate = new Date();
newDate.toFormat(Formats['YYYY-MM-DD HH:MM']))
```

to create dates from formatted strings:

---

```javascript

import { ExtendDate } from 'date_extentions/lib/ExtendDate'
import { Formats } from 'date_extentions/lib/FormatesEnum';

...
const dateString = '2022-07-29';
const newDate = ExtendDate.dateFrom( dateString, Formats['YYYY-MM-DD']);

```

### avilable formats:

- YYYY-MM-DD
- MM/DD/YY
- YY/MM/DD
- DD/MM/YY
- YYYY-MMDDTHH:MM:SS
- YYYYMMDDHHMMSS
- YYYYMMDDHHMM
- YYYYMMDD
- YYYY-MM-DD HH:MM

- More formats will be added with time
