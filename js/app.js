var app = (function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////
	

	
	// Private methods ////////////////////////////////////////////

	
		
	// Public methods /////////////////////////////////////////////

	return {
		/**
		 * Constructor
		 */
		init: function () {
			try { app.media.init(); }				catch (exception) { console.error(exception); }			
		}, 
		
		runGame: function () {
			try { app.game.init(); }				catch (exception) { console.error(exception); }
			try { app.players.init(); }				catch (exception) { console.log(exception); }
			try { app.notes.init(); }				catch (exception) { console.log(exception); }
			try { app.run.init(); }					catch (exception) { console.log(exception); }
						try { app.song.init(); }					catch (exception) { console.log(exception); }
			
			
			try { app.game.play(); }				catch (exception) { console.error(exception); }
		}
	}
}());