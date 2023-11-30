var firstTable = document.getElementById("schedule")
var firstTableCells = firstTable.getElementsByTagName("td");
var lTable = document.getElementById("hours");
var lTableCells = null;
var actionCell = null;


for (var i = 0; i < firstTableCells.length; ++i) {
    firstTableCells[i].addEventListener("click", function (evt) {
        actionCell = evt.srcElement;
        lTableCells = lTable.getElementsByTagName("td");
        for (var x = 0; x < lTableCells.length; ++x) {
            lTableCells[x].addEventListener("click", function () {
                actionCell.innerHTML = this.innerHTML;
            })
        }
    })
}
