import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StikyHeader{

    constructor(){
       this.pageSection = $(".page-section");
       this.siteHeader = $(".site-header");
       this.triggerElement = $(".large-hero__title");
       this.waypointStikyHeader();
       this.currentLink();
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

    currentLink(){
        this.pageSection.each( function() {
            var currentElement = this;
            new Waypoint({
                element: currentElement,
                handler: function(){
                    var currentItem = currentElement.getAttribute("data-matching-link");
                    if(currentItem){
                        $(currentItem).addClass("current-item");
                    }else{
                        $(currentItem).removeClass("current-item");
                    }
                }
            });
        });
    }
}

export default StikyHeader;