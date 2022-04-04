console.log('Starting up');

function initPage() {
    renderProjects()


}

function renderProjects() {
    const projects = getProjects();

    var strHtml = projects.map(project => `
  <div onclick="renderModal('${project.id}')" class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal"  href="#portfolioModal1">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="${project.img}" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${project.title}</h4>
      <p class="text-muted">Illustration</p>
    </div>
  </div>`)

    var elRow1 = document.querySelector('.row1')
    elRow1.innerHTML = strHtml
}

function renderModal(projectId) {
    var project = findProject(projectId)
    var strHtml = `<h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}.</p>
    <img class="img-fluid d-block mx-auto" src="${project.img}" alt="">
    <p>${project.desc}</p>
    <button onclick="goToProject('${project.url}')" class="btn btn-reroute btn-primary my-3" data-dismiss="modal" type="button">Check it out</button>
    <ul class="list-inline">
      <li>Date: March 2022</li>
      <li>Category: Website Design</li>
      <li>url:${project.url}</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`;
    $('.modal-body').html(strHtml)
}

function goToProject(projectURl) {
    window.location.href = `${projectURl}`
}

function eventListener() {
    $('.contactform .btn').click(onSubmit)
}

function onSubmit(){
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=amitrozen2015@gmail.com&su=${
            $('.subject')[0].value
          }&body=${$('.textbody')[0].value}`
    )
}