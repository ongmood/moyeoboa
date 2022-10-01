$(function(){

  $('.list li a').click(function(){

    var img_src=$(this).attr('href')

    var art_txt=$(this).text()

    $('p img').attr('src',img_src)

    $('p img').attr('alt',art_txt)

    return false;
  })
})
