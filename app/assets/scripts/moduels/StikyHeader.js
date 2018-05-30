import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
class StikyHeader{

    constructor(){
       this.lazyLoad = $(".lazyload"); 
       this.pageSection = $(".page-section");
       this.siteHeader = $(".site-header");
       this.triggerElement = $(".large-hero__title");
       this.headerLink = $(".nav-bar a");
       this.triggerElementNoColor = $(".no-current-item");
       this.waypointStikyHeader();
       this.currentLink();
       this.addSmoothScroll();
       this.refreshWayPoints();
    }

    refreshWayPoints(){
        this.lazyLoad.on("load",function(){
            Waypoint.refreshAll(); 
        });
    } 


    addSmoothScroll(){
        this.headerLink.smoothScroll();
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
        var that = this;
        this.pageSection.each( function() {
            var currentElement = this;
            new Waypoint({
                element: currentElement,
                handler: function(direction){
                    if(direction == "down"){
                        var currentItem = currentElement.getAttribute("data-matching-link");
                        that.headerLink.removeClass("current-item");
                        $(currentItem).addClass("current-item"); 
                    }                   
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentElement,
                handler: function(direction){
                    if(direction == "up"){
                        var currentItem = currentElement.getAttribute("data-matching-link");
                        that.headerLink.removeClass("current-item");
                        $(currentItem).addClass("current-item"); 
                    }                   
                },
                offset: "-50%"
            });

            new Waypoint({
                element: that.triggerElementNoColor[0],
                handler: function(direction){
                    if(direction == "up"){
                        var currentItem = currentElement.getAttribute("data-matching-link");
                        that.headerLink.removeClass("current-item");
                    }                   
                }
            });

        });
    }
}

export default StikyHeader;