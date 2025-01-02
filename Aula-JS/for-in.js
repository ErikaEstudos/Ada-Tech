const user = {
  name: "JoSÉ mARIA SOUSA santos",
  email: "JOSE.M1@gmail.com",
  age: 23,
  address: "X Street",
};
//feito para percorrer propriedades de objetos {} for - in
for (const key in user) {
  if (key === "name") {
    const names = user[key].split(" ");
    user[key] = "";
    //feito para percorrer arrays [] for - of
    for (const name of names) {
      const normalizeName = name.toLowerCase();
      const [primeiraLetra, ...restoDoNome] = normalizeName;

      user[key] =
        user[key] + " " + primeiraLetra.toUpperCase() + restoDoNome.join("");
      user[key] = user[key].trim();
    }
  }
  if (key === "email") {
    user[key] = user[key].toLowerCase();
  }
}
console.log(user);
