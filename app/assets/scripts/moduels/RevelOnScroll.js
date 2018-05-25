import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevelOnScroll{
    constructor(elmt,off){
      this.item = elmt;
      this.offset = off;
      this.hideItem();
      this.revelElement();
    }

    hideItem(){
        this.item.addClass("revel-element");
    }

    revelElement(){
        var that = this;
        this.item.each( function () {
            var currentItem = this;
             new Waypoint({
                 element: currentItem,
                 handler: function () {
                     $(currentItem).addClass("revel-element--is-visible");
                 },
                 offset: that.offset
             });
        });
    }

}

export default RevelOnScroll;