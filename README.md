# Date utils

## A simple package with date formmaters and date utilities class to streamline working with dates. 
simply import 'date_extentions' to take advantage of utility Functions
___
Use the utility functions added to the *standard* date class to get formatted date strings:

**toDatetimeFormat()**\
returns a YYYY-MMDDTHH:MM:SS formatted date string\
\
**toYYYYMMDDHHMMSS**\
returns a YYYYMMDDHHMMSS formatted date string\
\
**toYYYY_MM_DDTHHMMSS**\
returns a YYYY-MMDDTHH:MM:SS formatted date string\
\
\
**ALSO** you can use the  **ExtendDate** class to generate Date instances from dateStrings:\

*for example*\
import { ExtendDate, Formats } from '../ExtendDate';\
...\
const str = '2022-07-31';\
const myDateObjet  = ExtendDate.dateFrom(str, Formats['YYYY-MM-DD']);


