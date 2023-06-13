//Here we are gonna make a qr-image of a url which is given by user
//we are using two npm(Node Package Manager) 
//1.Inqirer
//2.qr-image generator


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
//var qr = require('qr-image');
//Below is the formate of inquirer package
inquirer
    //prompt wili take the input and saved in name var
    .prompt([
        { "message": "Type Your URL:", "name": "URL", }
    ])
    //The name var is convert to answers which consist of given URL.
    .then((answers) => {
        //console.log(answers);
        //creating a constant which consist of URL.
        const url = answers.URL;
        //creating a var which consist of qr package with URL.
        var qr_svg = qr.image(url);
        //Saving the qr image 
        qr_svg.pipe(fs.createWriteStream('qr_image.png'));
        //creating a txt file which consist of URL in written.
        fs.writeFile('URL.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          }); 
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
