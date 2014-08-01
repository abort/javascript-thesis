function Person(name, age) {
	this.name = name;
	this.age = age;
}

var p = new Person("John", (function (birthDate) {
	// Compute age by birthdate
	var ageDifference = Date.now() - birthDate;
	var ageDifferenceAsDate = new Date(ageDifference);
	return Math.abs(ageDifferenceAsDate.getFullYear() - 1970);
})(new Date("01-01-1980")));