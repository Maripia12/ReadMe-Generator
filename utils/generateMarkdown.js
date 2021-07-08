// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "NONE"){
    return `![License](https://img.shields.io/badge/license-${license}-blue)`
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license !== "NONE"){
    return `*[License](#license)`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if(license !== "NONE"){
    return `## License no
      
    This project is licensed under ${license}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 return `## ${data.title} ${renderLicenseBadge(data.license)}


## Description:

${data.description}

## Table of Contents

*[Installation](#installation)

*[Usage](#usage)

*[Testing](#testing)

${renderLicenseLink(data.license)}

*[Contribution](#contribution)

*[Questions](#questions)

## Installation

${data.instructions}

## Usage

${data.usage}

## Testing

${data.testing}

${renderLicenseSection(data.license)}


## Contribution

${data.contribution}


## Questions

If you have any questions about this project you can contact me at ${data.email}.
Check out my portfolio of work here: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
