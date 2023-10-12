import { Amelka } from './Amelka.js';
import { User } from './User.js';

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const user = new User('Nikodem', 5000);
const amelka = new Amelka('Amelka', 'Pawlisiak', 20, 5);

const answer = await rl.question('How many hours do you want to use Amelka? ');
const useHours = parseInt(answer);

amelka.use(user, useHours);

console.log(`After using Amelka for ${useHours} hours, user has ${user.money} money and ${user.happiness} point of happiness.`);

rl.close();