const isValidName = (name) => {
	const less2Letters = name.length <= 2;
	const more8Letters = name.length >= 8;

	return !(less2Letters || more8Letters);
};
const isValidEmail = (email) => {
	let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

	return regex.test(email);
};
const isValidPassword = (password) => {
	return password.length >= 6;
};
const isEqualPasswords = (password1, password2) => {
	return password1 === password2;
};

export { isValidName, isValidEmail, isValidPassword, isEqualPasswords };
