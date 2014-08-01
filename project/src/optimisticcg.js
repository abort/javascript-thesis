function Person(name, onNameChangeCallback) {
	this.name = name;
	this.onNameChangeCallback = onNameChangeCallback;

	this.setName = function(value) {
		this.name = value;
		this.onNameChangeCallback();
	}
}

function onNameChange() {
	console.log("Name has changed");
}

var person = new Person("John", onNameChange);
person.setName("Joe");