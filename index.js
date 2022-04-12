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
		loading.classList.remove("modal__overlay--visible");
		success.classList += " modal__overlay--visible";
		console.log("it works!");
	}, 1000);
}
