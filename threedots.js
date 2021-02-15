const ages = [12, 14, 16, 18];
const ages2 = [13, 15, 17];
const ages3 = [19, 20, 21];
const allAges = ages.concat(ages2).concat([11]).concat(ages3);
//const allAges2 = [ages, ages2, 11, ages3];
const allAges2 = [...ages, ...ages2, 11, ...ages3];
//console.log(allAges2);

const business = 700;
const minister = 500;
const sochib = 300;
//const maximum = Math.max(business, minister, sochib);
const takaPoisa = [700, 500, 300, 900];
const maximum = Math.max(...takaPoisa);
console.log(maximum);
