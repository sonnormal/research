function validate_entity_name() {
	var x = document.forms["myform"]["entity_name"].value;
	document.getElementById("msg_to_user").innerHTML = x;
}