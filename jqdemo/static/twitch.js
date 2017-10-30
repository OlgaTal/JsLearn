$(document).ready(initialize);

function initialize() {
  $('#fetch').click(fetch);


}

function fetch() {
  $.ajax( {
    url: 'https://api.twitch.tv/kraken/games/top',
    method: 'get',
    dataType: 'json',
    success: (rsp) => {
      let games =rsp.top;
      games.forEach((g, idx) => {
        let name = g.game.name;
        let art = g.game.box.medium;

        $('#games').append(`<div><p>${idx + 1}. ${name}</p><img src='${art}'/></div>`);
      });
      console.log('data:', rsp);
    }
  });


}
