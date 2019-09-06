'use strict';

$(document).ready(function () {
  var currentSectionNav, target;

  highlightActive();

  /*
  // If a specific page section is in the URL scroll that section up to the top
  currentSectionNav = $('#' + getCurrentSectionName() + '-nav');

  if (currentSectionNav.position()) {
    $('nav').scrollTop(currentSectionNav.position().top);
  }
  *//*

  /*
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      //target = $(this.hash);
      target = []
    console.warn('[href="' + this.hash.slice(1) + '"]')
      target = target.length ? target : $('[href="' + this.hash.slice(1) + '"]');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    }
  });
  */
});

$(window).bind('hashchange', highlightActive)

function highlightActive() {
  var sectionPath = location.pathname.split('/').reverse()[0].split('#')[0]
  var anchor = $.find(`[href="${sectionPath}"]`)

  if (anchor.length) {
    var $anchor = $(anchor)
    $anchor.addClass('active')
    var $sectionLinks = $anchor.next('ul').find('li a')
    $sectionLinks.removeClass('active')
    $sectionLinks.each(function (i, node) {
      //console.log(node.href.split(/([^a-zA-Z0-9]*?).*?/i))
      var symbol = node.href.split(/#([^a-zA-Z0-9]*)/i)
      console.log(">", symbol[1])
      var linkPath = '#' + symbol[1] + node.href.split('#').reverse()[0]
      console.warn(linkPath)
      if (linkPath === location.hash) {
        $(node).addClass('active')
        /*
        $('html, body').animate({
          scrollTop: $(node).offset().top
        }, 1000);
        */
      }
    })
  }
}

function getCurrentSectionName() {
  var path = window.location.pathname;
  var pageUrl = path.split('/').pop();

  var sectionName = pageUrl.substring(0, pageUrl.indexOf('.'));

  // remove the wodr module- if its in the url
  sectionName = sectionName.replace('module-', '');

  return sectionName;
}

function getCurrentHashName() {
  var pageSubSectionId;
  var pageSubSectionHash = window.location.hash;

  if (pageSubSectionHash) {
    pageSubSectionId = pageSubSectionHash.substring(1).replace('.', '');

    return pageSubSectionId;
  }

  return false;
}
