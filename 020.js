let machine = {
	motors: 4,
}
let robot = {
	friendly: true,
}
let robby = {}

robot.__proto__ = machine;

robby.__proto__= robot;

// -> What is `robby.motors`?
claim(robby.motors, 4);

// -> What is `robby.friendly`?
claim(robby.friendly, true);


// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	machine: machine,
	robot:   robot,
	robby:   robby
}
