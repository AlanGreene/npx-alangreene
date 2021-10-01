import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import boxen from 'boxen';
import chalk from 'chalk';
import leftPad from 'left-pad';

const newLine = '\n';
const label = (text, color = chalk.white) => color.bold(leftPad(text, 8));
const link = (service, username = '', color = chalk.white.bold) => chalk.gray('https://') + chalk.white(service) + color.bold(username);

const colors = {
  github: chalk.hex('#28A745'),
  linkedin: chalk.hex('#0077B5'),
  npm: chalk.hex('#CB3837'),
  twitter: chalk.hex('#38A1F3'),
  work: chalk.hex('#006699') // IBM blue
};

const content = (
  chalk.white.bold('          Alan Greene') + ' / alangreene' + newLine + newLine +

  label('Work', colors.work) + ': ' + 'Advisory Software Engineer' + chalk.gray(' at ') + colors.work('IBM') + newLine +
  label('Twitter', colors.twitter) + ': ' + link('twitter.com/', 'alan_greene', colors.twitter) + newLine +
  label('GitHub', colors.github) + ': ' + link('github.com/', 'AlanGreene', colors.github) + newLine +
  label('LinkedIn', colors.linkedin) + ': ' + link('linkedin.com/in/', 'alangreene', colors.linkedin) + newLine +
  label('npm', colors.npm) + ': ' + link('npmjs.com/~', 'alangreene', colors.npm) + newLine +
  label('Web', chalk.yellow) + ': ' + link('', 'alangreene.net', chalk.yellow) + newLine +
  label('Pronouns') + ': ' + 'he/him' + newLine + newLine +
  label(' ') + '$ ' + colors.npm('npx') + ' alangreene'
);

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

const output = chalk.white(
  boxen(content, boxenOptions)
);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
fs.writeFileSync(
  path.join(__dirname, 'bin/output'),
  output
);
