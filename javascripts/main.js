$(function() {
  $('.section .contents').hide()
  $('.contents .tweets').hide()

  $('.expand_collapse_links').show()
  $('.expand_collapse_links .expand_all').click(function() {
    $('.section .contents').show()
  })
  $('.expand_collapse_links .collapse_all').click(function() {
    $('.section .contents').hide()
  })

  $('.section h2').click(function() {
    var hidden = $(this).next().is(':hidden')
    $(this).next().slideToggle()
    return hidden
  })

  if (document.location.hash) {
    var anchor = document.location.hash.substring(1)
    $('.section h2 a[name=' + anchor + ']').parent('h2').click()
  }

  $('#menu span').css('cursor', 'pointer').click(function() {
    $('.section .contents').hide()
    $('.section .' + this.innerHTML).parents('.section').find('.contents').show()
  })
})
