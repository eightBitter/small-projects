// This script loops through the spreadsheet and looks for a value in a certain column. If that value is not present, highlight the row

// NOTE: this script doesn't work if there are any merged cells in the sheet. If you get an error that says something like "You can't perform a cut/paste from a 
//  range that partially intersetts a merge.", then look out for merged cells in your sheet

function hightlightOldRequests () {
    // gets the whole spreadsheet
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      // gets the specific sheet with the given name
      var sheet = ss.getSheetByName("Full Response List");
      // gets the whole range of the sheet
      var range = sheet.getDataRange();
      var columns = range.getNumColumns();
      var rows = range.getNumRows();
      // Creates a Date object for the current date
      var currentDate = new Date();
      // Calculates the number of milliseconds for a given week; this'll be the parameter to test against later
      var week_in_milliseconds = 1000 * 3600 * 24 * 7;
      // loops through the column numbers
      for (var column = 1; column <= columns; column++) {
        // if it's the sixteenth column (column indexing begins at 1 not 0). The number of the column you want to match on should replace this number
        if (column == 16) {
          // loops through rows
          for (var row = 1; row <= rows; row++) { 
            var cell = range.getCell(row,column);
            // if the value of the cell does not equal the specified value, run the following code. The value you want to match against should replace the value in quotes
            if (cell.getValue() != "Yes") {
              // this creates a Javascript Date object using the Timestamp column
              var timestamp = new Date(range.getCell(row, 1).getValue());
              // this calculates the number of milliseconds between today's date and the timestamp. If the number is greater than 
              //   the number of milliseconds in a week (the timestamp is older than a week), then execute the code
              if ((currentDate - timestamp) > week_in_milliseconds) {
                var numColumns = range.getLastColumn();
                // highlight the cells in the row
                sheet.getRange(row, 1, 1, numColumns).setBackground("yellow");
              }
            }  
          }
        }
      }
    }