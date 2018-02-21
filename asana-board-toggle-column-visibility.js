(function(){
	var columnNumber = prompt("Please enter column you want to hide/unhide", "0");
	var columnContainer = document.querySelector(".SortableList-itemContainer--row");
	var columnElement = ColumnContainer.children[columnNumber];
	if (columnElement.style.display === "none") {
		columnElement.style.display = "block";
	}
	else {
		columnElement.style.display = "none";
	}
})();
