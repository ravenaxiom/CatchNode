(app.song = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////
	
	var song = [];
	
		
	
	// Private methods ////////////////////////////////////////////
	
	var loadSong = function () {
	
		// player 1 song
		song[0] = [
		
			// A
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
		
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
		
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
		
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
		
		
			// B
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
		
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
		
		
			// A
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
			{run: 10, note: 1, chance: 1},
		
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
			{run: 10, note: 1, chance: 1},
		
		
			// C
			{run: 12, note: 0, chance: 1},
			{run: 12, note: 0, chance: 1},
			{run: 12, note: 0, chance: 1},
			{run: 12, note: 0, chance: 1},
		
		
			// B
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
			{run: 11, note: 0, chance: 1},
			{run: 11, note: 1, chance: 1},
		
		
			// A
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 1, chance: 1},
		
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1},
			{run: 10, note: 0, chance: 1}
			
			
			// 12 ///////////////////////////////
		];
	

		// player 2 song
		song[1] = [
		
			// A
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 0, chance: 0},
			{run: 0, note: 0, chance: 0},
			{run: 0, note: 0, chance: 0},
		
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 1, chance: 1},
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 0, chance: 0.5},
		
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 2, chance: 1},
			{run: 0, note: 1, chance: 1},
			{run: 0, note: 0, chance: 1},
		
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 1, chance: 1},
			{run: 0, note: 0, chance: 0},
			{run: 0, note: 0, chance: 0},
		
		
			// B
			{run: 0, note: 6, chance: 1},
			{run: 0, note: 5, chance: 1},
			{run: 0, note: 4, chance: 1},
			{run: 0, note: 6, chance: 1},
		
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 2, chance: 1},
			{run: 0, note: 3, chance: 1},
			{run: 0, note: 0, chance: 1},
		
		
			// A
			{run: 1, note: 0, chance: 1},
			{run: 0, note: 4, chance: 0},
			{run: 0, note: 3, chance: 0},
			{run: 0, note: 4, chance: 0},
		
			{run: 0, note: 5, chance: 1},
			{run: 0, note: 6, chance: 1},
			{run: 0, note: 0, chance: 0},
			{run: 0, note: 0, chance: 0},
		
		
			// C
			{run: 1, note: 6, chance: 1},
			{run: 1, note: 7, chance: 1},
			{run: 1, note: 6, chance: 0.5},
			{run: 1, note: 7, chance: 1},
		
		
			// B
			{run: 1, note: 0, chance: 1},
			{run: 1, note: 2, chance: 0.5},
			{run: 1, note: 3, chance: 1},
			{run: 1, note: 0, chance: 1},
		
		
			// A
			{run: 1, note: 6, chance: 1},
			{run: 1, note: 6, chance: 0.5},
			{run: 1, note: 0, chance: 1},
			{run: 1, note: 0, chance: 0.5},
		
			{run: 0, note: 6, chance: 1},
			{run: 0, note: 6, chance: 0.5},
			{run: 0, note: 0, chance: 1},
			{run: 0, note: 0, chance: 1}
			
			
			// 12 ///////////////////////////////
		];
		
	};
	
	
	
	// Public methods /////////////////////////////////////////////

	return {
		/**
		 * Constructor
		 */
		init: function () {

			loadSong();

		},

		/**
		 * Get specified graphic
		 */
		getNote: function (player, id) {
			return song[player][id];
		}
	}
}());