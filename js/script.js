// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

/************************* 
  Variables
  **************************/
jQuery(function($){ 
  var browserwidth;
  var desktopwidth=1024;
  var mobilewidth=767;
  
/************************* 
 Functions
**************************/

  function getbrowserwidth(){
    browserwidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0;
    return browserwidth;
  }
  
  function onLoadAndResize(){
           
    if(browserwidth>=mobilewidth){
      heightForBackground();
    }
  }
  
  function heightForBackground(){ 
	  heightSidebar = $('#sidebar').height();	  
	  $('#main-content span.back').css('height', heightSidebar+20);
  }
    
/************************* 
 Execution
**************************/

  $(window).resize(function(){
	 getbrowserwidth(); 
     onLoadAndResize();
     
   });
   
   
  $(document).ready(function(){
	getbrowserwidth();   
    onLoadAndResize();
           
   });
  
});