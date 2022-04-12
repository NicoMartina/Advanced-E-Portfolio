function contact(event) {
	event.preventDefault();
	const loading = document.querySelector(".modal__overlay--loading");
	const success = document.querySelectorAll(".modal__overlay--success");
	loading.classList += " modal__overlay--visible";
	emailjs
		.sendForm(
			"service_ffljnj8",
			"template_q626vz7",
			event.target,
			"HpsE4Y3FFSl6SjygY"
		)
		.then(() => {
			loading.classList.remove("modal__overlay--visible");
			success.classList += " modal__overlay--visible";
		})
		.catch(() => {
			loading.classList.remove("modal__overlay--visible");
			alert(
				"The email service is temporarily unavailable. Please contact me directly at nicolas.martina69@gmail.com"
			);
		});
}

function toggleModal() {
	console.log("works");
}
