import inquirer from 'inquirer';

function getTemplateDir() {
     let templateDir;
     const templateDirs = [
         './MyApp',
         './NewApp',
         './newArchBase'
     ];
     
     inquirer.prompt([
             {
                 type: 'list',
                 name: 'templateDir',
                 message: 'Select a template directory:',
                 choices: templateDirs
             }
         ])
         .then(answers => {
             const userSelectedTemplateDir = answers.templateDir;
             console.log(`You selected: ${userSelectedTemplateDir}`);
             templateDir = userSelectedTemplateDir;
             // Use the userSelectedTemplateDir variable in your code here
         });

        return templateDir;

 }


export default getTemplateDir;