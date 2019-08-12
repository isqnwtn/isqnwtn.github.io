(function( $ ){
"use strict";

$.fn.pixiefyAccordion = function ( options ) {

  var settings = $.extend({
      openDefault: false,
      activeClass : "current",
      activeContent: "show",
      dataClass: "panel-heading"
  }, options );
  
  $( this ).each(function(index) {

    $active = $(this),
    item = $active.find("."+settings.dataClass);

    if ( settings.openDefault === true ) {
      $active.find('li').first().find('.'+settings.dataClass).next().slideDown().addClass(settings.activeContent);
    }

    $(item).on("click", function(e) {
        e.preventDefault();
        var $self = $(this);
        if ($self.next().hasClass(settings.activeContent)) {
            $self.next().removeClass(settings.activeContent);
            $self.removeClass(settings.activeClass);
            $self.next().slideUp(350);
        } else {
            $self.parent().parent().find('.'+settings.activeContent).removeClass(settings.activeContent).slideUp(350);
            $self.next().toggleClass(settings.activeContent);
            $self.parent().parent().find('.'+settings.activeClass).removeClass(settings.activeClass);
            $self.addClass(settings.activeClass);
            $self.next().slideToggle(350);
        }
    });

  });
  return this;
};

$.fn.pixiefyTabs = function ( options ) {

  var settings = $.extend({
      activeClass : "current",
      activeContent: "current",
      dataAttr: "data-tab"
  }, options );

  var item = $(this).find('['+settings.dataAttr+']');

  $(item).on('click', function(e){
      e.preventDefault();
      var tab_id = $(this).attr('data-tab');
      $(this).addClass(settings.activeClass).siblings().removeClass(settings.activeClass);
      $(this).closest('ul').siblings('.tab-content').removeClass(settings.activeContent)
      $("#"+tab_id).addClass(settings.activeContent);
   });

  return this;
};

})( jQuery );
