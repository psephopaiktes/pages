console.log('hello');

$(".bookmarklet").each(function(i){
    $(this).attr('id','bookmarklet-'+i);
    $('nav ul').append(
        '<li><a href="#bookmarklet-' +i+ '">' +$(this).children('h2').text()+ '</li>'
    );
});
