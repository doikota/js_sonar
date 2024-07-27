/*
分割代入の検証
結論）
・オブジェクトの分割代入は、変数名をキープする
・配列の分割代入は、配列の順番通りに代入される
 */

const user = {
  name: 'Kotaro',
  email: 'doikota@gmail.com',
  sex: 'male',
  age: 51,
  showName() {
    console.log(`${name} as function`);
  },
};

// let name = user.name;
// let email = user.email;

// オブジェクトの分割代入では（変数の順番ではなく）プロパティの名称に応じて値を取り出している
// nameにはuser.nameが代入される
const { email, sex, name, showName } = user;
console.log(name);
console.log(email);
console.log(sex);
showName();

// プロパティの名前を変えて代入が出来る（mailにはuser.emailが代入される）
const { email: mail } = user;
console.log(mail);

// ...restを利用して残りのオブジェクトを取り出せる
const { email: email2, ...rest } = user;
console.log(email2);
console.log(rest);

// 配列の分割代入
// 配列の値には名前がないので配列の並び順通りに代入されるため、secondには'Kotaro'が代入される
const names = ['Kotaro', 'Kinkichi', 'Gaskichi', 'Yanyan'];
const [second, first, third] = names;
console.log(first, second, third);

// 配列の部分展開 (本名 [あだ名])
const [realname, ...nickname] = names;
console.log(realname, nickname);

// オブジェクト配列の展開
const users = [
  {
    name: 'Kotaro', 
    email: 'doikota@gmail.com',
    sex: 'male',
    age: 51,
  },
  {
    name: 'Kinkichi Gaskichi',
    email: 'kingas@mail.xxx',
    sex: 'unknown',
    age: 3,
  },
];
for (const { name: myname, age: myage } of users) {
  console.log(myname + ' ' + myage);
}

// ネストしたオブジェクトの展開 { address: { city } }としてaddress.cityが取り出せる
const person = {
  name: 'Kotaro',
  email: 'doikota@gmail.com',
  sex: 'male',
  age: 51,
  address: {
    city: 'Yokohama',
    zip: '222',
  },
};
const {
  name: name2,
  address: { city },
} = person;
console.log(`${name2} lives in ${city}`);

// 練習問題：ネストしたオブジェクトの配列の展開
const persons = [
  {
    name: 'Kotaro',
    email: 'doikota@gmail.com',
    sex: 'male',
    age: 51,
    from: {
      city: 'Yokohama',
      zip: '222',
    },
  },
  {
    name: 'Kinkichi',
    email: 'kinkichi@mail.xxx',
    sex: 'unknown',
    age: 3,
    from: {
      city: 'Chirol',
      zip: '999',
    },
  },
];
for (let { name: name3, from: { city } } of persons) { 
  console.log(`${name3} is from ${city}`);
}
