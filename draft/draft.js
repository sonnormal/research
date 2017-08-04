function validate_entity_name() {
	var x = document.forms["myform"]["entity_name"].value;
	document.getElementById("msg_to_user").innerHTML = x;
}

function create_grid() {
	document.getElementById("msg_to_user").innerHTML = "start to lear js";
}

/* 
as user edit content on an element on the page, GnG save new value to local database.
future enhancement: there should be a setting to save every change or changes in different date
*/
function update_db(){
	var d = new Date();
	document.getElementById("msg_to_user").innerHTML = format_date(d) + "$ it should update db local, then sync to server. ";
}

/* format a date to string YYYY/MM/DD HH:MM:SS
*/
function format_date(d){
	var dateString = d.getFullYear() + "/" +
		("0" + (d.getMonth()+1)).slice(-2) + "/" +
		("0" + d.getDate()).slice(-2) + " " +
		("0" + d.getHours()).slice(-2) + ":" +
		("0" + d.getMinutes()).slice(-2) + ":" +
		("0" + d.getSeconds()).slice(-2) + " UTC" +
		d.getTimezoneOffset()/60;
	return dateString
}

function try_snipet() {
	//window.alert(5 + 6); // the dialog looks ugly. i do not know how to translate "This page say:" into Vietnamese.
	//console.log(5 + 6); // this is for debug purpose
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("msg_to_user").innerHTML = "content loaded";
});
