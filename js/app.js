// alert(1111);
let rate = 0.8;
console.log("太郎" + 80 * rate + "点");
console.log("次郎" + 90 * rate + "点");
console.log("三郎" + 70 * rate + "点");


let animals = ["dog","cat","lion"];
console.log(animals[1]);
animals[1] = "tiger";
console.log(animals[1]);


let data = [
  ["太郎","24","180cm","65kg"],
  ["次郎","21","176cm","63kg"],
  ["三郎","19","198cm","89kg"]
];
console.log(data[1][2]);


let kazu = [
  [0,1,2],
  [3,,5]
];
kazu[1][1] = "4";
console.log(kazu[1][1]);

var array = ['リンゴ','バナナ','イチゴ'];

console.log( array );

var _3nen5kumi = ['kato','sato','suzuki','tanaka','hayama'];

console.log('_3nen5kumi[0];' + _3nen5kumi[0]);

console.log('_3nen5kumi[3];' + _3nen5kumi[3]);

console.log('_3nen5kumi[5];' + _3nen5kumi[5]);

var items = ['バナナ','イチゴ','リンゴ','メロン'];

var result = items.indexOf('リンゴ');

console.log( result );
