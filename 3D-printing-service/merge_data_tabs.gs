// This Google Apps Script goes through all the tabs, except the main tab, and populates the main tab with all of the data.

function generateFormula() {
  // Connects to the spreadsheets
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheets = ss.getSheets();
  // Begins the query
    var formula = "=QUERY({";
  // Loops through every tab/sheet
    for (var i = 0; i < sheets.length; i++) {
      var name = sheets[i].getName();
      // Excludes the following tab/sheet names
      if (name != "main" && name != "Email Templates" && name != "AllTableItems") {
        // Grabs data from columns A2:O
        formula = formula + "\x27" + name + "\x27" + "!A2:O;";
      }
    }
  // Gets all data where rows in the first column are not null (empty in this case)
    formula = formula.slice(0, -1) + '}, "SELECT * WHERE Col1 IS NOT NULL", 0)'
    // Dumps the collected data into "main" sheet, column "A2"
    ss.getSheetByName("main").getRange("A2").setFormula(formula);
  }