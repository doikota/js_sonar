const user = {
  name: 'Kotaro Doi',
  email: 'doikota@gmail.com',
  sex: 'male',
  age: 51,
  showName() {
    console.log(`${name} as function`);
  },
};

// let name = user.name;
// let email = user.email;

// オブジェクトの分割代入では変数の順番ではなく、プロパティの名称に応じて値を取り出している
// nameにはuser.nameが代入される
const { email, sex, name, showName } = user;
console.log(name);
console.log(email);
console.log(sex);
showName();

// プロパティの名前を変えて代入 mailにはuser.emailが代入される
const { email: mail } = user;
console.log(mail);

// ...restを利用して残りのオブジェクトを取り出せる
const { email: email2, ...rest } = user;
console.log(email2);
console.log(rest);

// 配列の分割代入 配列の値には名前がないので配列の並び順通りに代入されるため、secondには'Kotaro'が代入される
const names = ['Kotaro', 'Akiko', 'Hinako', 'Yuiko'];
const [second, first, third] = names;
console.log(first, second, third);

// 配列の部分展開(男性 [女性])
const [male, ...female] = names;
console.log(male, female);

// オブジェクト配列の展開
const users = [
  {
    name: 'Kotaro Doi', 
    email: 'doikota@gmail.com',
    sex: 'male',
    age: 51,
  },
  {
    name: 'Akiko Doi',
    email: 'doiakko@gmail.com',
    sex: 'female',
    age: 58,
  },
];
for (const { name: myname, age: myage } of users) {
  console.log(myname + ' ' + myage);
}

// ネストしたオブジェクトの展開 { address: { city } }としてaddress.cityが取り出せる
const person = {
  name: 'Kotaro Doi',
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
    name: 'Kotaro Doi',
    email: 'doikota@gmail.com',
    sex: 'male',
    age: 51,
    from: {
      city: 'Yokohama',
      zip: '222',
    },
  },
  {
    name: 'Akiko Doi',
    email: 'doiakko@gmail.com',
    sex: 'female',
    age: 58,
    from: {
      city: 'Sapporo',
      zip: '111',
    },
  },
];
for (let { name: name3, from: { city } } of persons) { 
  console.log(`${name3} is from ${city}`);
}