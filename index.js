//question prompts

const inquirer = require('inquirer');
const pageCreate = require('.src/page-template.js');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const menmersArr = [];

const promptUser = () => {
    return inquirer.prompt([
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
          message:"Please enter manager's id.",
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
          name:'officeNumber',
          message:'Please enter office number',
          validate: officeNum  => {
              if (officeNum) {
                  return true;
              } else {
                  console.log('Please add an office number');
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

      }



    ])

}

promptUser();
