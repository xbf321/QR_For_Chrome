$(function(){
	if(chrome && chrome.tabs && chrome.tabs.getSelected){
		chrome.tabs.getSelected(null,function(thisTab){
	    	$('#qrcode').qrcode({width: 256,height: 256,text: thisTab.url});
		});
	}	
});