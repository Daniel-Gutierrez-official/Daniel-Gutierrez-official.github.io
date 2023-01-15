var firstTable = document.getElementById("table1")
var firstTableCells = firstTable.getElementsByTagName("td");
var lTable = document.getElementById("menulist");
var lTableCells = null;
var actionCell = null;


for (var i = 0; i < firstTableCells.length; ++i) {
    firstTableCells[i].addEventListener("click", function (evt) {
        actionCell = evt.srcElement;
        lTable.style.display = (lTable.style.display === "table") ? "none" : "table";
        if (lTable.style.display === "table") {
            lTableCells = lTable.getElementsByTagName("td");
            for (var x = 0; x < lTableCells.length; ++x) {
                lTableCells[x].addEventListener("click", function () {
                    actionCell.innerHTML = this.innerHTML;
                    actionCell.style.background = window.getComputedStyle(this, null).backgroundColor;
                })
            }
        }
    });
}
