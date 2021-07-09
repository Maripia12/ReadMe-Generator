// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

inquirer
  .prompt ([

        {
        type:'input',
        message: 'What is the title of your project?',
        name: 'title',

        }, 
    
        {   
        type:'input',
        message: 'Give a description on what your project is about.',
        name: 'description',

        },
        

        {   
        type:'input',
        message: 'What are the installation instructions to run your application?',
        name: 'instructions',
        default: 'npm i'
 
        },

        {
        type:'input',
        message: 'How is your application used?',
        name: 'usage',

        },

        {
        type:'input',
        message: 'What are the testing instructions to run your application??',
        name: 'testing',
        default: 'npm test'

        },

        {
        
        type:'checkbox',
        message: 'What license did you used for this app?',
        choices: ['MIT','APACHE 2.0','BSD 3',' NONE'],
        name: 'license'    

        },

        {
        type:'input',
        message: 'What does a user need to know about contributing to your repo?',
        name: 'contribution',

        },
   

        {
        type:'input',
        message: 'What is your Github username?',
        name: 'username',

        },


  
        {
        type:'input',
        message: 'What is your email address?',
        name: 'email',

        },
         

        
])

  .then((data) => {
    const readMe = generateMarkdown(data);

         fs.writeFile('GenerateReadMe.md', readMe, (err) =>
      err ? console.log(err) : console.log('Successfully created your ReadMe!')
    );
  });


        
         






// // // TODO: Create a function to write README file
// function writeToFile('readMe.md' , data) {

//      const readMe = readMeGenerator (data)

//     fs.writeFile('readMe.md', readMe, function(err) {
//         if (err) {
//             return console.log(err);
//         } else { 
//         console.log('Successfully created your ReadMe!');
//         }
//     })
    
    
// }
    

    


// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((response) =>

//     console.log(response)
    
//     )

    
// }


// Function call to initialize app
// init();


// TODO: Create an array of questions for user input

