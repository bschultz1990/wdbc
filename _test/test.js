const button = document.querySelector("button");

button.addEventListener("click", () => {
	Notification.requestPermission().then(perm => {
		if (perm === 'granted') {
			new Notification ("Example notification", {
				body: "more stuff here",
				data: {hello: "world"}
			});
		}
	})
})
