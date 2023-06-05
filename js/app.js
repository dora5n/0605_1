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


// 配列を宣言する方法 ↓↓

var array = ['リンゴ','バナナ','イチゴ'];

console.log( array );


// 配列の要素を取得する方法 ↓↓

var _3nen5kumi = ['kato','sato','suzuki','tanaka','hayama'];

console.log('_3nen5kumi[0];' + _3nen5kumi[0]);

console.log('_3nen5kumi[3];' + _3nen5kumi[3]);

console.log('_3nen5kumi[5];' + _3nen5kumi[5]);


// 配列の要素を検索する方法(indexOf) ↓↓

var items = ['バナナ','イチゴ','リンゴ','メロン'];

var result = items.indexOf('リンゴ');

console.log( result );


// 配列の要素を追加する方法(push) ↓↓

var _3nen5kumi = ['kato','sato','suzuki','tanaka','hayama'];

console.log('夏休み前：' + _3nen5kumi);

// 夏休み中に転入生の前田くんが３年５組の仲間に加わった
_3nen5kumi[5] = 'maeda'

console.log('夏休み後：' + _3nen5kumi);


// 冬休み前に転入生の山田くんが３年５組の仲間に加わった
_3nen5kumi.push('yamada');

console.log('冬休み前：' + _3nen5kumi);



