(app.game = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////

	var stage,
		canvasID = 'appCanvas',
		
		screenWidth = 812,
		screenHeight = 812,
		noteQueue,
		
		key = 'A',
		bpm = 62,
		
		bpmCounter = 0,
		beatCounter = 0,
		
		currentPosition = 1,
		
		bluesCounter = 0,
		
		p1Counter = 0,
		
		p2Counter = 0,
		p2RandomShifter = 0,
		p2RandomShifterCounter = 0,
		p2BreakCounter = 0,
		p2BreakTimer = 0,
		
		currentNoteType = 'key';
	
		
	
	// Private methods ////////////////////////////////////////////
	
	var setupStage = function () {
		stage = new createjs.Stage(canvasID);

		var bg = new createjs.Bitmap(app.media.get('bg'));
			bg.x = 0;
			bg.y = 0;
			stage.addChild(bg);
	
		
		createjs.Ticker.addEventListener("tick", app.game.handleTick);	
		createjs.Ticker.setInterval(16);
	};
	
	
	var generateNotes = function () {
		app.notes.add(0, 'A', 50);	
	};
	
	
		
	// Public methods /////////////////////////////////////////////

	return {
	
		/**
		 * Constructor
		 */
		init: function () {
			setupStage();
		},
		
		
		play: function () {
			stage.update();	
		},
		
		
		handleTick: function () {
			var tempAmount = 0;
			
			bpmCounter += 1;

			if(bpmCounter % bpm == 0) {
				beatCounter += 1;
				
/* 								app.media.play('beat_high-hat'); */
				
				// player 1
				var beatNote = app.song.getNote(0,beatCounter);
				
				if(beatNote.chance != 0) {
					if(Math.random() < beatNote.chance) {
						app.notes.add(0, beatNote.run, beatNote.note, beatCounter);
					}
				}
				
				
				// player 2
				beatNote = app.song.getNote(1,beatCounter);
				
				if(beatNote.chance != 0) {
					if(Math.random() < beatNote.chance) {
						app.notes.add(1, beatNote.run, beatNote.note, beatCounter);
					}
				}
				
			}
			
/* 			console.log(beatCounter); */
				// beats
			if(beatCounter >= 4) {
/* 				beatCounter = 0; */
/* 				app.media.play('beat_high-hat'); */
				
/* 				app.notes.add(0, 'A', 0); */
				
				
				
			}
			
			
			// update everything else
			app.players.update();
			app.notes.update();
			
			stage.update();
			
		},
		
		getStage: function () {
			return stage;
		},
		
		getScreenWidth: function () {
			return screenWidth;
		},
		
		getScreenHeight: function () {
			return screenHeight;
		},
		
		getCurrentNoteType: function () {
			return currentNoteType;
		},
		
		setCurrentNoteType: function (type) {
			currentNoteType = type;
		}
		
	}
}());