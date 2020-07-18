"use strict";

$(document).ready(function () {
  $(".hapo-wrap-icon").click(function () {
    $(".hapo-wrap-content-mes").toggle(0, function () {
      if ($(".hapo-fixed").css("z-index") <= 2) {
        $(".hapo-fixed").css("z-index", "3");
      } else {
        $(".hapo-fixed").css("z-index", "1");
      }
    });
  });
  $(".hapo-close").click(function () {
    $(".hapo-wrap-content-mes").hide();
    $(".hapo-fixed").css("z-index", "1");
  });
});