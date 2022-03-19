/*!
 * jQuery serialexpand
 * https://github.com/kevinmeunier/jquery-serialexpand
 *
 * Copyright 2022 Meunier Kévin
 * https://www.meunierkevin.com
 *
 * Released under the MIT license
 */
(function($){
  'use strict';

  $.serialexpand = function(options){
    const settings = $.extend({}, $.serialexpand.defaults, options);
    const $selector = $(settings.selector);
    const root = this;

    $.extend(this, {
      init: function(){
        // Basic event attachment
        $('body').on('change.serialexpand', ':radio, :checkbox, select', root.handleEvent);

        // Update the hide settings (so there is no fx on load)
        const fxOut = settings.fxOut;
        settings.fxOut = 'hide';

        // Manual trigger on load for radio and checkbox tags
        $selector.filter(':radio, :checkbox').trigger('change.serialexpand');

        // Manual trigger on load for select tag
        $selector.filter('option').each(function(){
          const $element = $(this);
          const $target = settings.getTarget($element);

          if( $element.is(':selected') ){
            const $select = $element.closest('select');
            root.setCurrent($select[0], $target);
          }  else {
            $target[settings.fxOut]();
          }
        });

        // Restore the hide settings
        settings.fxOut = fxOut;
      },

      handleEvent: function(){
        // Exclude useless elements (without behavior)
        if( root.isAccepted(this) == false )
          return;

        // Apply behavior for elligible elements
        root.handleDisplay(this);
      },

      handleDisplay: function(element){
        let $element = $(element);
        let isUnique;
        let action;

        // Preliminary management based on the element type
        switch(element.type){
          case 'radio':
            action = $element.is(':checked');
            isUnique = action;
            break;
          case 'checkbox':
            action = $element.is(':checked');
            isUnique = false;
            break;
          case 'select-one':
            $element = $element.find(':selected');
            action = true;
            isUnique = action;
            break;
        }

        // Definition of the target
        const $target = settings.getTarget($element);

        // Hide already displayed element
        if( isUnique == true ){
          let $current = root.getCurrent(element);
          if( $current )
            $current[settings.fxOut]();

          // Store the displayed $target (to hide it later if needed)
          $current = action ? $target : false;
          root.setCurrent(element, $current);
        }

        // Show the new element
        $target[action ? settings.fxIn : settings.fxOut]();
      },

      setCurrent: function(element, $target){
        const storage = element.form ? element.form : document.body;
        $.data(storage, element.name, $target);
      },

      getCurrent: function(element){
        const storage = element.form ? element.form : document.body;
        return $.data(storage, element.name);
      },

      isAccepted: function(element){
        const $element = $(element);

        // Check if the element has a "data-serialexpand" attribute
        if( $element.is(settings.selector) )
          return true;

        // Management for select
        if( $element.is('select') )
          return $element.find(settings.selector).length ? true : false;

        // Management for :radio et :checkbox
        const name = $element.attr('name');
        return $('input[name='+name+']').filter(settings.selector).length ? true : false;
      }
    });

    this.init();
    return this;
  };

  $.serialexpand.defaults = {
    selector: undefined,
    fxIn: 'slideDown',
    fxOut: 'slideUp',
    getTarget: function($element){
      const target = $element.attr('data-serialexpand');
      return $('[data-serialexpand-target="'+ target +'"]');
    }
  };
})(jQuery);
