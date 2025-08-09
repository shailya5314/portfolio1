// Sample project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A personal website built with HTML, CSS, and JavaScript.",
    link: "#"
  },
  {
    title: "Weather App",
    description: "Displays weather info using an API.",
    link: "#"
  },
  {
    title: "Todo List",
    description: "A simple todo app to manage tasks.",
    link: "#"
  }
];

// Dynamically add projects to the page
const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});

// Contact form submission simulation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formResponse").textContent = "Thanks! I'll get back to you soon.";
  this.reset();
});
