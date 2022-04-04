console.log('Starting up');

var gProjects = []

$(document).ready(init);


function init() {
    createProjects()
    renderProjects()
    renderModals()
}

function createProjects() {
    gProjects.push(createProject('Minesweeper', 'Minesweeper game', 'Beware from the bombs', 'img/portfolio/minesweeper.jpg', ['mouse event', '2Darrs'], 'https://tamirgeron.github.io/Mine-Sweeper/'))
    gProjects.push(createProject('guess-me', 'Guess Me', 'Guess about who i think', 'img/portfolio/guesswho.jpg', ['mouse event', 'object'],'https://tamirgeron.github.io/guess-me/'))
}

function createProject(name, title, desc, url, labels, link) {
    return {
        id: name,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: new Date().toLocaleString().split(',')[0],
        labels: labels,
        link: link
    }
}

function renderProjects() {

    var strHtml = ``

    gProjects.forEach(project => {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${project.id}">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src=${project.url} alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
    });

    $('.projects').html(strHtml)
}

function renderModals() {
    var strHtml = ``
    gProjects.forEach(project => {
        strHtml += `<div class="portfolio-modal modal fade" id="portfolioModal${project.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${project.name}</h2>
                    <p class="item-intro text-muted">${project.title}</p>
                    <img class="img-fluid d-block mx-auto" src=${project.url} alt="">
                    <p>${project.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${project.publishedAt}</li>
                      <p><a href='${project.link}'>link to the project</a></p>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                      <i class="fa fa-times"></i>
                      Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
        console.log(project);
    });
    $('.modalprojects').html(strHtml)
}