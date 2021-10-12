const add = require('./math-add');
const sub = require('./math-sub');

// const mathAdd = (a, b) => {
// 	return add.sumOperation(a, b);
// };

// const mathSub = (a, b) => {
// 	return sub.subtractionOperation(a, b);
// };

// module.exports = {
// 	mathAdd: mathAdd,
// 	mathSub: mathSub,
// };

module.exports = {
	mathAdd: add.sumOperation,
	mathSub: sub.subtractionOperation,
};
