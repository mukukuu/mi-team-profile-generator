//html page generator

const createTeam = (team) => {



  //function to create manager car
  const managerCard = (manager) => {
    return `
    <div class"col-4 mt-4">
     <div class="card h-100">
       <div class="card-header bg-primary">
       <h3>${manager.name}</h3>
       <h4>Manager</h4>
     </div>

     <ul class="list-group">
       <li class="list-group-item">ID: ${manager.id}</li>
       <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
       <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      </ul>
        </div>
    </div>
    `;
  };
  //function to create engineer card
  const engineerCard = (engineer) => {
    return `
    <div class"col-4 mt-4">
      <div class="card h-100">
        <div class="card-header bg-primary">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4>
        </div>

        <ul class="list-group">
           <li class="list-group-item">ID: ${engineer.id}</li>
           <li class="list-group-item">Office Number: ${engineer.officeNumber}</li>
           <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
           <li class="list-group-item">gitHub: <a href="https://github.com/:${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
        </ul>
        </div>
    </div>
    `;
  };

  //function to create intern card
  const internCard = (intern) => {
    return `
  <div class"col-4 mt-4">
    <div class="card h-100">
      <div class="card-header bg-primary">
        <h3>${intern.name}</h3>
        <h4>Intern</h4>
      </div>

      <ul class="list-group">
         <li class="list-group-item">ID: ${intern.id}</li>
         <li class="list-group-item">Office Number: ${intern.officeNumber}</li>
         <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
         <li class="list-group-item">School: ${intern.school}</li>
      </ul>
      </div>
  </div>
  `;
  };



  const pageArr = [];
  pageArr.push(
    team.filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerCard(manager))
  );
  pageArr.push(
    team.filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerCard(engineer))
      .join("")
  );

  pageArr.push(
    team.filter((employee) => employee.getRole() === "Intern")
      .map((Intern) => internCard(Intern))
      .join("")
  );
  return pageArr.join("");
}



module.exports = (team) => {
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

</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-secondary">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>

`;

}
