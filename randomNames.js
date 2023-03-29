const { faker } = require('@faker-js/faker');
const fs  = require('fs').promises;

async function doIt(){


    for(let i = 0; i < 1000; i++) {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();

        try {
            await fs.appendFile('names.txt', `${firstName} ${lastName}\n`);    
        } catch (error) {
            
        }
        
    }

}

doIt()

