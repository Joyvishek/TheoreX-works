$(document).ready(function(){
    	$("#panel_1").panel({
 		handle:'#panel_1 > .panel_tab',
 		content:'#panel_1 > .panel_content',
 		opened:false,
 		direction : "both",
      	openEvent : 'mouseenter',
      	closeEvent : 'mouseleave',
      	openSelector : '#panel_1',
      	closeSelector : '#panel_1',
 	});		
   	
   	$("#panel_2").panel({
 		handle:'#panel_2 > .panel_tab',
 		content:'#panel_2 > .panel_content',
 		opened:false,
 		direction : "both",
      	openEvent : 'mouseenter',
      	closeEvent : 'mouseleave',
      	openSelector : '#panel_2',
      	closeSelector : '#panel_2',
 	});		
    
	$("#panel_3").panel({
 		handle:'#panel_3 > .panel_tab',
 		content:'#panel_3 > .panel_content',
 		opened:false,
 		direction : "both",
      	openEvent : 'mouseenter',
      	closeEvent : 'mouseleave',
      	openSelector : '#panel_3',
      	closeSelector : '#panel_3',
 	});
});