function contact(event) {
	// event.preventDefault();
	// emailjs
	// 	.sendForm(
	// 		"service_ffljnj8",
	// 		"template_q626vz7",
	// 		event.target,
	// 		"HpsE4Y3FFSl6SjygY"
	// 	)
	// 	.then(() => {
	// 		console.log("it works!");
	// 	});
	const loading = document.querySelector(".modal__overlay--loading");
	const success = document.querySelectorAll(".modal__overlay--success");
	loading.classList += " modal__overlay--visible";
	setTimeout(() => {
		console.log("it works!");
	}, 500);
}
