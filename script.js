window.onload = function() {
  fetch('./data.json')
      .then(response => response.json())
      .then(data => {
          displayIntro(data.intro);
          careerSection(data.career);
          projectSection(data.projects);
      })
      .catch(err => console.log('Error: ' + err));
}

function displayIntro(introData) {
  let name = document.querySelector('#name');
  let summary = document.querySelector('#summary');

  name.textContent = introData.name;
  summary.textContent = introData.summary;
}

function careerSection(careerData) {
  let careerSection = document.querySelector('#career-section');

  careerData.forEach(job => {
      let jobDiv = document.createElement('div');
      let jobTitle = document.createElement('h3');
      let jobCompany = document.createElement('h4');
      let jobDuration = document.createElement('p');
      let jobLocation = document.createElement('p');
      let jobResponsibilities = document.createElement('ul');

      jobTitle.textContent = job.position;
      jobCompany.textContent = job.company;
      jobDuration.textContent = job.duration;
      jobLocation.textContent = job.location;

      job.responsibilities.forEach(responsibility => {
          let li = document.createElement('li');
          li.textContent = responsibility;
          jobResponsibilities.appendChild(li);
      });

      jobDiv.appendChild(jobTitle);
      jobDiv.appendChild(jobCompany);
      jobDiv.appendChild(jobDuration);
      jobDiv.appendChild(jobLocation);
      jobDiv.appendChild(jobResponsibilities);

      careerSection.appendChild(jobDiv);
  });
}

function projectSection(projectData) {
  let projectsSection = document.querySelector('#projects-section');

  projectData.forEach(project => {
      let projectDiv = document.createElement('div');
      let projectName = document.createElement('h3');
      let projectDescription = document.createElement('p');

      projectName.textContent = project.name;
      projectDescription.textContent = project.description;

      projectDiv.appendChild(projectName);
      projectDiv.appendChild(projectDescription);

      projectsSection.appendChild(projectDiv);
  });
}
