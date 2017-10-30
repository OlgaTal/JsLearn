/* eslint-disable func-names*/
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
const file = path.join(__dirname, '../../data/aliens.json');

function Alien(o) {
  this.id = uuid.v1();
  this.name = o.name;
  this.photo = o.photo;
  this.planet = o.planet;
}

Alien.find = function (id) {
  const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');
  data.pop();
  const aliens = data.map(d => JSON.parse(d));
  if (id) {
    return aliens.find(a => a.id === id);
  }
  return aliens;
};

Alien.delete = function (id) {
  const data = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');
  data.pop();
  const aliens = data.map(d => JSON.parse(d));
  const alienIdx = aliens.findIndex(a => a.id === id);
  aliens.splice(alienIdx, 1);

  // save the new array
  if (aliens.length === 0) {
    fs.writeFileSync(file, '');
  } else {
    aliens.forEach((d, idx) => {
      console.log('d' + idx, d);
      if (idx === 0) {
        fs.writeFileSync(file, `${JSON.stringify(d)}\n`);
      } else {
        fs.writeFileSync(file, `${JSON.stringify(d)}\n`, { flag: 'a' });
      }
    });
  }
};

Alien.prototype.save = function () {
  fs.writeFileSync(file, `${JSON.stringify(this)}\n`, { flag: 'a' });
};

module.exports = Alien;
