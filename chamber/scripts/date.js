const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#last-modified");
lastModifiedP.textContent = document.lastModified;

