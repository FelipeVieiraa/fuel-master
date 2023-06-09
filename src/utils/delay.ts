const delay = (timeInMiliseconds: number) =>
	new Promise((resolve) => setTimeout(resolve, timeInMiliseconds));

export default delay;
