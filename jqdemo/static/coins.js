$(document).ready( initialize );

function initialize() {
  $('#new').click(newgame);
  $('#flip').click(save);
}

function newgame() {
  const name = $('#name').val();
  $.ajax( {
    url: '/coins',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: (rsp) => {
      update(rsp);
    }
  });
}

function save() {
  const id = $('#id').text();
  $.ajax( {
    url: '/coins/' + id  + '/save',
    method: 'post',
    dataType: 'json',
    success: (rsp) => {
      update(rsp);
    }
  });
}

function update(rsp) {
  $('#person').text(rsp.name);
  $('#id').text(rsp._id);
  $('#heads').text(rsp.heads);
  $('#tails').text(rsp.tails);
  console.log('data:', rsp);
}
