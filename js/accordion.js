$('#accordion li:nth-child(even)').hide();
$('#accordion li:nth-child(odd)').click(function() {
    $('#accordion li:nth-child(even)').hide();
    $(this).next().slideDown(400);
});

/*$('#accordion li:nth-child(odd)').hover(function() {
  $(this).css("background-color","#d5d8d2")
});*/
