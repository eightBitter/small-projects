# 3D Printing Service Processing Scripts

The client has multiple Google Forms to receive 3D printing requests, one form for each client of theirs, which feed into a Google Sheet, each populating a tab in the sheet.

## merge_data_tabs.gs

This script runs through the specified tabs and merges all rows and columns into a single tab.

## move_data_to_end.gs

This script loops through a given column, looking for the specified value. For those rows that match, it moves (copies and pastes) those rows to the bottom of the sheet and deletes the resulting blank rows.

## highlight_old_rows.gs

This script loops through a given column, looking for the specified value. For those rows that do not match, it calculates the age of the row using the current date and the timestamp. If the age of the row is older than a week, then it highlights the row.