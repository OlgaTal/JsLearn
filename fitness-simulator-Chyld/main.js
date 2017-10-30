const request = require('request');

setInterval(start, 5000);
setInterval(stop, 10000);
setInterval(position, 250);

function start(){
  send('http://localhost:9002/api/runs/123ABC/start');
}

function stop(){
  send('http://localhost:9002/api/runs/123ABC/stop');
}

function position(){
  const latitude = Math.random() * 90;
  const longitude = Math.random() * 180;
  const altitude = Math.random() * 5000;
  const current = new Date();
  send('http://localhost:9002/api/positions/123ABC', {latitude, longitude, altitude, current});
}

function send(url, body){
  request({url, body, method: 'post', json: true, }, (err, res, body) => {
    console.log('body:', body);
  });
}
