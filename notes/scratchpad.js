try {
	const starWarsAsync = async () => {
		const resolve = await fetch("https://swapi.dev/api/people/1/");
		const data = await resolve.json();
		console.log(data);
	} catch (error) {
		console.log("Error encountered.", error);
	}
};