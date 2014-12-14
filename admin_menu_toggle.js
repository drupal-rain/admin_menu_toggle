(function($) {
  // Initiate if not exist yet.
  Drupal.admin = Drupal.admin || {};
  Drupal.admin.behaviors = Drupal.admin.behaviors || {};

  Drupal.admin.behaviors.toggleShowHide = function (context, settings, $adminMenu) {
    $("#admin-menu-toggle").click(function () {
      if ($(this).hasClass('toggle-show')) {
        $(this).removeClass("toggle-show").addClass("toggle-hide");
        $("#admin-menu-wrapper").removeClass("element-hidden");
        $("#admin-menu").removeClass("admin-menu-compress");
      }
      else if ($(this).hasClass('toggle-hide')) {
        $(this).removeClass("toggle-hide").addClass("toggle-show");
        $("#admin-menu-wrapper").addClass("element-hidden");
        $("#admin-menu").addClass("admin-menu-compress");
      }
    });
  }

})(jQuery);