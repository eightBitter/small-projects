// This script loops through the spreadsheet and looks for a value in a certain column. If that value is present, move (cut and paste) the row to the bottom of 
//  the sheet and delete the row's previous position

// NOTE: this script doesn't work if there are any merged cells in the sheet. If you get an error that says something like "You can't perform a cut/paste from a 
//  range that partially intersetts a merge.", then look out for merged cells in your sheet
function moveDataToBottom() {
    // gets the whole spreadsheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    // gets the specific sheet with the given name
    var sheet = ss.getSheetByName("Full Response List");
    // gets the whole range of the sheet
    var range = sheet.getDataRange();
    var columns = range.getNumColumns();
    var rows = range.getNumRows();
    // loops through the column numbers
    for (var column = 1; column <= columns; column++) {
      // if it's the fifth column (column indexing begins at 1 not 0). The number of the column you want to match on should replace this number
      if (column == 5) {
        // loops through rows
        for (var row = 1; row <= rows; row++) { 
          var cell = range.getCell(row,column);
          // if the value of the cell equals the specified value, run the following code. The value you want to match against should replace the value in quotes
          if (cell.getValue() == "CBE") {
            var numColumns = range.getLastColumn();
            var target = sheet.getRange(sheet.getLastRow() + 1, 1);
            // moves (cuts and pastes) the selected row to the bottom of the sheet
            sheet.getRange(row, 1, 1, numColumns).moveTo(target);
            // deletes the row's previous position (will leave a blank row if you don't call this method
            sheet.deleteRow(row);
          }
        }
      }  
    }
  }