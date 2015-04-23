/**
 *	PROJECT			:		Vannkorn Dev
 *	DEVELOPER		:		Tepken Vannkorn
 *	DEVELOPER URI	:		http://vannkorn.info
 *	DATE			:		23-April-2015
 */
 
$( function() {
	var VannkornDev = {
		i : 2,
		init: function() {
			this.test();
		},
		
		test: function() {
			console.log('The value of i is: ' + this.i );
		}
	}
	
	$( document ).ready( function() {
		VannkornDev.init();
	});
});