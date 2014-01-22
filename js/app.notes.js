(app.notes = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////
	
	var graphics = [],			// image and screen location for this note
/* 		noteKeys = [],			// key of the note, eg A, C# */
		runs = [],
		notes = [],
		beatCounts = [],		// position of this note in total bpm of the song
		playerOwners = [],		// array number of which player owns this note
		states = [],			// current state of note, can be: aliveState, deadState
	
		fallSpeed = 3.13,			// calculate fallspeed by using getInterval to get ms between ticks, have set
								// start/end points, calculate exactly what speed at the set number of ticks
								// to get to destination
		width = 30,
		height = 30,
		colour = 'green',
		aliveState = 'ALIVE',
		deadState = 'DEAD',
		
		lastp1Note,
		lastp2Note;
	
		
	
	// Private methods ////////////////////////////////////////////
	
	
	
	
	// Public methods /////////////////////////////////////////////

	return {
		/**
		 * Constructor
		 */
		init: function () {

		},
		
		add: function (_playerID, _run, _note, _beatCount) {
			var noteGraphic,
				stage,
				bounds,
				randomAmount;
				
			bounds = app.players.getBounds(_playerID);
			randomAmount = Math.random() * (bounds.right - bounds.left);
	
			/*
noteGraphic = new createjs.Shape();
			noteGraphic.graphics.beginFill(colour).rect(0, 0, width, height);
*/
			if(Math.random() > 0.5) {
				noteGraphic = new createjs.Bitmap(app.media.get('note-1'));				
			} else {
				noteGraphic = new createjs.Bitmap(app.media.get('note-2'));				
			}

			
			noteGraphic.x = bounds.left + randomAmount;
			noteGraphic.y = 0 - height
			
			graphics.push(noteGraphic);
			runs.push(_run);
			notes.push(_note);
			beatCounts.push(_beatCount);
			playerOwners.push(_playerID);
			states.push(aliveState);				// only wake up notes when game calculates it's time for them to appear		
			
			stage = app.game.getStage();
			
			stage.addChild(graphics[graphics.length-1]);
/* 			console.log('added'); */
		},

		update: function () {
			var i,
				stage;
			
			for (i = 0; i < graphics.length; i++) {
				if(states[i] == aliveState) {
					// move note
					graphics[i].y += fallSpeed;
					
					// check its not outside screen
					if(graphics[i].y >= app.game.getScreenHeight() + height) {
						states[i] = deadState;
						stage = app.game.getStage();
						stage.removeChild(graphics[i]);
					}
					
					// check for collision between note and player
					if(app.players.checkCollision(graphics[i].x, graphics[i].y, width, height, playerOwners[i])) {
/* 						console.log('collision detected!'); */
/* 						app.media.play('beat_high-hat'); */
/* 						app.run.playNote(app.game.getCurrentNoteType()); */
						
						/*
if(app.game.getCurrentNoteType() != 'normal') {
							app.game.setCurrentNoteType('normal');
						}
*/
						if(playerOwners[i] == 0) {
							if(typeof lastp1Note != 'undefined') {
								lastp1Note.stop();
							}
							
							lastp1Note = app.run.playNote(runs[i], notes[i]);
						} else if(playerOwners[i] == 1) {
							if(typeof lastp2Note != 'undefined') {
								lastp2Note.stop();
							}
							
							lastp2Note = app.run.playNote(runs[i], notes[i]);
						}


						
						states[i] = deadState;
						stage = app.game.getStage();
						stage.removeChild(graphics[i]);
					}
				}
			}
		}
	}
}());