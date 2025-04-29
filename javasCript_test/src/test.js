arr1 = [5, 7, 8, 90];

const Mult = arr1.map((v) => "<li>" + v + "</li>");

console.log(Mult);

const [uno, dos, ...rest] = arr1;

console.log(`Soy el uno: ${uno}, dos: ${dos}`);
console.log(`Resto: ${rest}`);

rest.forEach((element) => {
  console.log(`Numero: ${element}`);
});

const person = {
  name: "Yoeny",
  age: 41,
  adress: {
    apto: 3,
    reparto: "Pastorita",
  },

  bersday: function () {
    let resp = 0;
    const year_now = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    if (month < 12) {
      resp = year_now - 1 - this.age;
    } else {
      resp = year_now - this.age;
    }
    console.log(`Hola ${this.name} naciste en ${resp}`);
  },
  saludar: function () {
    setTimeout(() => {
      console.log(`Hola ${this.name}`);
    }, 1000);
  },
};

const calcBirthday = person.bersday.bind(person);
person.bersday();
person.saludar();
