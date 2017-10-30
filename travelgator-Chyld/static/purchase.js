/* global $ */
/* eslint-disable no-use-before-define, no-underscore-dangle */

$(document).ready(init);

function init() {
  $('#country').change(populateCities);
}

function populateCities() {
  const country = $('#country').val();
  $.ajax({
    url: `/countries/${country}/cities`,
    method: 'get',
    dataType: 'json',
    success: (rsp) => {
      const cities = rsp.country.cities;
      $('#city').empty().append('<option>Select a City</option>');
      cities.forEach(c => {
        $('#city').append(`<option value=${c._id}>${c.name}</option>`);
      });
    },
  });
}
