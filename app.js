const users = [
  {
    name: "Erik",
    age: 29,
    email: "erik@academlo.com",
    social: [
      { name: "facebook", url: "facebook/erik" },
      { name: "twitter", url: "twitter/erik" },
      { name: "youtube", url: "youtube/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Georg",
    age: 33,
    email: "georg@academlo.com",
    social: [{ name: "facebook", url: "facebook/georg" }],
    gender: "Male"
  },
  {
    name: "Andrea",
    age: 42,
    email: "andrea@hotmail.com",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  },
  {
    name: "Oscar",
    age: 31,
    email: "oscar@academlo.com",
    social: [
      { name: "facebook", url: "facebook/oscar" },
      { name: "github", url: "github/erik" }
    ],
    gender: "Male"
  },
  {
    name: "Daniela",
    age: 22,
    email: "andrea@uaq.mx",
    social: [
      { name: "facebook", url: "facebook/andrea" },
      { name: "twitter", url: "twitter/andrea" }
    ],
    gender: "Female"
  }
];

const innder_data = document.getElementById("innder_data");

const usersIncludes = users.filter((el) => el.email.includes("@academlo.com"));

console.log(usersIncludes);


let template = ``;


for (let i = 0; i < usersIncludes.length; i++) {
  template += `
    <tr>
      <td>${usersIncludes[i].name}</td>
      <td>${usersIncludes[i].email}</td>
      <td>${usersIncludes[i].age}</td>
      <td>${usersIncludes[i].gender}</td>
      <td>${
        usersIncludes[i].social.map(elem => `${elem.name}: ${elem.url}<br>`).join("")
      }</td>
    </tr>
  `;
}

innder_data.innerHTML = template;
