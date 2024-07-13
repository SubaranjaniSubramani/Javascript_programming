const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway']

const setA = new Set(a);
const setB = new Set(b);


const unionSet = new Set([...setA, ...setB]);
console.log('Union of a and b:', [...unionSet]);


const intersectionSet = new Set([...setA].filter(item => setB.has(item)));
console.log('Intersection of a and b:', [...intersectionSet]);


const differenceSet = new Set([...setA].filter(item => !setB.has(item)));
console.log('Difference of a and b:', [...differenceSet]);