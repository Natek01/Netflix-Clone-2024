const { randomInt } = require('crypto');
const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json'; // Ensure this is relative to the repository root


const func = async function() {
    let y = 175;
    for (let j = 213; j < 544; j += 3) {
        
        let x = randomInt(6)
        for (let i = 0; i < x; i++) {
            var DATE = moment().subtract(j, 'd').format();
            var data = {
                date: DATE,
                radu: x,
            }
            jsonfile.writeFile(FILE_PATH, data);
            await simpleGit().add([FILE_PATH]).commit('abzaek the top G', {'--date': DATE}).push().then((ere) => {
                if (j != y) {
                    console.log(j);
                    y = j;
                }
            })
        }
    }
}

func();
