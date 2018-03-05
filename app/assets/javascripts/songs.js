$(document).ready(function () {
  $('.collection').sortable();
  $('.modal').modal();

  // TODO delete to work on without refresh
  $(document).on('click', '#delete-song', function () {
    var id = $(this).parent('.song').data().id
    $.ajax({
      url: '/songs/' + id,
      method: 'DELETE'
    }).done(function () {
      var row = $("[data-id='" + id + "'");
      row.parent().remove('.song');
    }).fail(function (err) {
      console.log(err)
    })
  })
});