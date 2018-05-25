import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StikyHeader{

    constructor(){
       this.siteHeader = $(".site-header");
       this.triggerElement = $(".large-hero__title");
       this.waypointStikyHeader();
    }

    waypointStikyHeader(){
        var that = this;
        new Waypoint({
            element: this.triggerElement[0],
            handler: function(direction){
                if( direction == "down" ){
                   that.siteHeader.addClass("site-header--dark");
                }else{
                   that.siteHeader.removeClass("site-header--dark");                   
                }
            }
        }); 
    }
}

export default StikyHeader;