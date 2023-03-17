function generateHTML(arr) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid bg-danger">
      <div class="container">
        <h1 class="display-4 text-white text-center">Employee Generator</h1>
      </div>
    </div>

    <div class="container row">
        ${structureCards(arr)}
    </div>
  </body>
</html>
`;
}

function structureCards(arr) {
  let template = ``;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].getRole() == "Manager") {
      template += `<div class="card text-center" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-info">Manager</h5>
          <h5 class="card-title">Name: ${arr[i].getName()}</h5>
          <h5 class="card-title">Office number: ${arr[i].getOfficeNum()}</h5>
          <hr />
          <p class="card-text">id: ${arr[i].getId()}</p>
          <hr />
          <a href="#" class="btn btn-primary">email: ${arr[i].getEmail()}</a>
        </div>
      </div>`;
    } else if (arr[i].getRole() == "Engineer") {
      template += `<div class="card text-center" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-success">Engineer</h5>
          <h5 class="card-title">Name: ${arr[i].getName()}</h5>
          <h5 class="card-title">Github: ${arr[i].getGithub()}</h5>
          <hr />
          <p class="card-text">id: ${arr[i].getId()}</p>
          <hr />
          <a href="#" class="btn btn-primary">email: ${arr[i].getEmail()}</a>
        </div>
      </div>`;
    } else {
      template += `<div class="card text-center" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-header bg-secondary">Intern</h5>
          <h5 class="card-title">Name: ${arr[i].getName()}</h5>
          <h5 class="card-title">School: ${arr[i].getSchool()}</h5>
          <hr />
          <p class="card-text">id: ${arr[i].getId()}</p>
          <hr />
          <a href="#" class="btn btn-primary">email: ${arr[i].getEmail()}</a>
        </div>
      </div>`;
    }
  }
  return template;
}

module.exports = generateHTML;
