function myFunction() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    var cell5 = row.insertCell(0);

    cell5.innerHTML = "";
    cell4.innerHTML = "NEW CELL";
    cell3.innerHTML = "NEW CELL";
    cell2.innerHTML = "NEW CELL";
    cell1.innerHTML = "NEW CELL";


  }
  function myFunction1() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var cell3 = row.insertCell(0);
    var cell4 = row.insertCell(0);
    var cell5 = row.insertCell(0);

    cell5.innerHTML = "";
    cell4.innerHTML = "NEW CELL";
    cell3.innerHTML = "NEW CELL";
    cell2.innerHTML = "NEW CELL";
    cell1.innerHTML = "NEW CELL";


  }
  
