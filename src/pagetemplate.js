//html page generator





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

module.exports = pagetemplate => {
  //destructure page
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>`;

}
