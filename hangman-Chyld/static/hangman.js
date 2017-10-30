/* global $ */
/* eslint-disable no-use-before-define */

let timer;
let clock = 60;

$(document).ready(init);

function init() {
  $('#controls2').hide();
  $('#start').click(start);
  $('#send').click(send);
}

function send() {
  const tries = $('#tries').text() * 1;
  if (clock <= 0 || tries <= 0) return;

  const letter = $('#letter').val();
  const id = $('#id').text();

  $.ajax({
    url: `/games/${id}/guess`,
    method: 'put',
    dataType: 'json',
    data: { letter, clock },
    success: (rsp) => {
      updateBoard(rsp);
    },
  });
}

function start() {
  begin();
  timer = setInterval(() => {
    const tries = $('#tries').text() * 1;
    clock -= 1;
    updateClock();

    if (clock <= 0 || tries <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function begin() {
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: (rsp) => {
      $('#controls1').hide();
      $('#controls2').show();
      updateBoard(rsp);
    },
  });
}

function updateBoard(game) {
  if (game.name) {
    $('#player').text(game.name);
    $('#id').text(game.id);
  }

  $('#guess').text(game.guess);
  $('#tries').text(game.tries);
  $('#did-win').text(game.didWin);

  if (game.didWin) {
    clearInterval(timer);
  }
}

function updateClock() {
  $('#clock').text(clock);
}
