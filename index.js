//question prompts

const inquirer = require('inquirer');
const fs = require('fs');
const pagetemplate = require('./src/pagetemplate');
// const { writeFile, copyFile } = require('./utils/create-site');

//import files
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { assertNewExpression } = require('babel-types');

//--- put answers of role in this array ---//
const memberArr = [];

//--- basic questions ---//
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
        type:'input',
        name:'name',
        message:'What is the name of the team member?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name for the team member.');
                return false;
            }
        }
      },
      {
          type:'input',
          name:'id',
          message:"Please enter member's id.",
          validate: idInput => {
              if (idInput) {
                  return true;
              } else {
                  console.log('Please add an id');
                  return false;
              }
          }
      },
      {
          type:'input',
          name:'email',
          message:'Please enter an email address',
          validate: emailInput => {
              if (emailInput) {
                  return true;
              } else {
                  console.log('Please enter an email address');
                  return false;
              }
          }
      },
      {
          type:'list',
          name:'role',
          message:"Select a role for this new mamber",
          choices: ["Manager", "Engineer", "Intern"],
      },
    ])


    //---- prompt special role questions based on selected role ----//
    if (answers.role === "Manager") {
        const addManager = await inquirer
        .prompt([
            {
                type:'input',
                name:'officeNumber',
                message:'Enter an office number for the Manager',
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true;
                    } else {
                        console.log('Please enter office number');
                        return false;
                    }
                }
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            addManager.officeNumber

        );
        memberArr.push(newManager);
    } 
//---------- get answers for Engineer ----------//
     else if (answers.role === "Engineer") {
         const addEngineer = await inquirer
         .prompt([
             {
             type: 'input',
             name:'github',
             message:'Enter github links for the Engineer',
             validate: githubInput => {
                 if (githubInput) {
                     return true;
                 } else {
                     console.log('Please add a github link');
                     return false;
                 }
             }
             }
         ])
         const newEngineer = new Engineer(
             answers.name,
             answers.id,
             answers.email,
             addEngineer.github
         );
         memberArr.push(newEngineer);
     } 
//------- get answers for Intern -------//
    else if (answers.role == "Intern") {
        const addintern = await inquirer
        .prompt([
            {
                type:'input',
                name:'school',
                message:'Add school for new Intern',
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log('Please add a scholl');
                        return false;
                    }
                },
            }
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            addintern.school
        );
        memberArr.push(newIntern);
    }
};

//prompt option to add member
async function questionPrompt() {
    await questions()

    const nextAction = await inquirer
    .prompt([
        {
        name:'Action',
        type:'list',
        message:'Continue to add a member or create new team',
        choices: ['Add member', 'Create team'],
        }
    ])
    if (nextAction.Action === 'Add member') {
        return questionPrompt();
    } 
    return createTeam();
}


questionPrompt();
function createTeam () {
    fs.writeFileSync(
        "./dist/index.html",
        pagetemplate(memberArr),
        "utf-8"
    );
}

