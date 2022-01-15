//html page generator

const { template } = require("lodash");



//function to create manager car
const managerCard = function (manager) {
    return `
    <article class"col-4 mt-4">
      <div class="card h-100">
        <div class="card-title">
          <h2>${manager.name}</h3>
          <h3>Manager Info</h3><i class="material-icons">content_paste</i>
        </div>

        <div class="card-content">
           <p class"id">ID: ${manager.id}</p?
           <p class="office-number">Office Number: ${manager.officeNumber}</p>
           <p class="email">Email: <a href="links:${manager.email}">${manager.email}</a></p>
        </div>
        </div>
    </article>
    `;
}

pagetemplate = (data) => {
  pageArr = [];

  
}

module.exports = pagetemplate;