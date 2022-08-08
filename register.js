function saveData() {
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var age = document.getElementById('age').value;
	sessionStorage.firstname = firstname;
	sessionStorage.setItem('lastname', lastname);
	sessionStorage.email = email;
	sessionStorage.phone = phone;
	sessionStorage.age = age;
}


function prefillData() {
	if (sessionStorage.firstname != null) {
		document.getElementById('firstname').value = sessionStorage.firstname;
		document.getElementById('lastname').value = sessionStorage.lastname;
		document.getElementById('phone').value = sessionStorage.phone;
		document.getElementById('email').value = sessionStorage.email;
		document.getElementById('age').value = sessionStorage.age;
	}	
}

function init() {
	var regForm = document.getElementById('registerForm');
	regForm.onsubmit = saveData;
	prefillData()

}


window.onload = init;