import MenuItem from './moduels/MenuItem';
import RevelOnScroll from './moduels/RevelOnScroll';
import StikyHeader from './moduels/StikyHeader';
import $ from 'jquery';

var menuItem = new MenuItem();
var feature = new RevelOnScroll($(".section-item"),"85%"); 
var testimonial = new RevelOnScroll($(".testimonial"),"60%"); 
var stikyHeader = new StikyHeader();

