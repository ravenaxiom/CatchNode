(app.run = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////

	var runs = [],
		currentRun = 0,
		currentNote = 0;
	
		
	
	// Private methods ////////////////////////////////////////////
	
	var setupRuns = function () {
		// guitar
		runs[0] = [
			{ id: "pentatonic-a-1_1", type: "key" },		// 0
			{ id: "pentatonic-a-1_2", type: "normal" },		// 1
			{ id: "pentatonic-a-1_3", type: "normal" },		// 2
			{ id: "pentatonic-a-1_4", type: "blues" },		// 3
			{ id: "pentatonic-a-1_5", type: "normal" },		// 4
			{ id: "pentatonic-a-1_6", type: "normal" },		// 5
			{ id: "pentatonic-a-1_7", type: "key" }			// 6
		];
			
		runs[1] = [
			{ id: "pentatonic-a-1_7", type: "key" },		// 0
			{ id: "pentatonic-a-1_8", type: "normal" },		// 1
			{ id: "pentatonic-a-1_9", type: "normal" },		// 2
			{ id: "pentatonic-a-1_10", type: "blues" },		// 3
			{ id: "pentatonic-a-1_11", type: "normal" },	// 4
			{ id: "pentatonic-a-1_12", type: "normal" },	// 5
			{ id: "pentatonic-a-1_13", type: "key" },		// 6
			{ id: "pentatonic-a-1_14", type: "normal" }		// 7
		];
		
		// backing
		runs[10] = [
			{ id: "backing-a-1", type: "backing" },
			{ id: "backing-a-2", type: "backing" }
		];
		
		runs[11] = [
			{ id: "backing-b-1", type: "backing" },
			{ id: "backing-b-2", type: "backing" }	
		];
		
		runs[12] = [
			{ id: "backing-c-1", type: "backing" },
			{ id: "backing-c-2", type: "backing" }	
		];
	};

	
		
	// Public methods /////////////////////////////////////////////

	return {
	
		/**
		 * Constructor
		 */
		init: function () {
			setupRuns();
		},
/*
		
		playNote: function (type) {
			var found = false;
			console.log(type);
			if(currentNote >= runs[currentRun].length) {
				currentNote = 0;
			}
			console.log(currentNote);
			while (!found) {
			for(var i = currentNote; i < runs[currentRun].length; i++) {
				var note = Math.floor(Math.random() * runs[currentRun].length);
				
				if(type != 'normal') {
					if(type == runs[currentRun][i].type) {
						app.media.play(runs[currentRun][i].id);
						found = true;
						currentNote = i;
						break;
					} else {
						if(i >= runs[currentRun].length) {
							i = 0;
						}
					}
				} else {
					app.media.play(runs[currentRun][i].id);
					currentNote = i;
					found = true;
					break;
				}
			}
			
			console.log('played', runs[currentRun][note].type);
		},
*/
		
		randomizeRun: function () {
			var newRun = Math.floor(Math.random() * runs.length);
			console.log(newRun);
		},
		
		getNote: function (runID, noteID) {
			return runs[runID][noteID];
		},
		
		playNote: function (runID, noteID) {
			return app.media.play(runs[runID][noteID].id);
		}

	}
}());