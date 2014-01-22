(app.media = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////
	
	var queue;
	
		
	
	// Private methods ////////////////////////////////////////////
	
	var loadQueued = function () {

		
		queue.loadManifest([
			{id: 'bg', src:'images/bg.jpg'},			
			{id: 'guitar-1', src:'images/guitar-1.png'},
			{id: 'guitar-2', src:'images/guitar-2.png'},
			{id: 'note-1', src:'images/note-1.png'},
			{id: 'note-2', src:'images/note-2.png'},
		
			{id: 'pentatonic-a-1_1', src:'sounds/pentatonic-a-1/1.mp3'},
			{id: 'pentatonic-a-1_2', src:'sounds/pentatonic-a-1/2.mp3'},
			{id: 'pentatonic-a-1_3', src:'sounds/pentatonic-a-1/3.mp3'},
			{id: 'pentatonic-a-1_4', src:'sounds/pentatonic-a-1/4.mp3'},
			{id: 'pentatonic-a-1_5', src:'sounds/pentatonic-a-1/5.mp3'},
			{id: 'pentatonic-a-1_6', src:'sounds/pentatonic-a-1/6.mp3'},
			{id: 'pentatonic-a-1_7', src:'sounds/pentatonic-a-1/7.mp3'},
			{id: 'pentatonic-a-1_8', src:'sounds/pentatonic-a-1/8.mp3'},
			{id: 'pentatonic-a-1_9', src:'sounds/pentatonic-a-1/9.mp3'},
			{id: 'pentatonic-a-1_10', src:'sounds/pentatonic-a-1/10.mp3'},
			{id: 'pentatonic-a-1_11', src:'sounds/pentatonic-a-1/11.mp3'},
			{id: 'pentatonic-a-1_12', src:'sounds/pentatonic-a-1/12.mp3'},
			{id: 'pentatonic-a-1_13', src:'sounds/pentatonic-a-1/13.mp3'},
			{id: 'pentatonic-a-1_14', src:'sounds/pentatonic-a-1/14.mp3'},
			
			{id: 'backing-a-1', src:'sounds/backing-a/1.mp3'},
			{id: 'backing-a-2', src:'sounds/backing-a/2.mp3'},			
			
			{id: 'backing-b-1', src:'sounds/backing-b/1.mp3'},
			{id: 'backing-b-2', src:'sounds/backing-b/2.mp3'},
			
			{id: 'backing-c-1', src:'sounds/backing-c/1.mp3'},
			{id: 'backing-c-2', src:'sounds/backing-c/2.mp3'},
			
			{id: 'beat_high-hat', src:'sounds/beat_high-hat.mp3'}
		]);
	};
	
	
	
	// Public methods /////////////////////////////////////////////

	return {
		/**
		 * Constructor
		 */
		init: function () {
			queue = new createjs.LoadQueue(false);
			queue.installPlugin(createjs.Sound);
			queue.addEventListener("complete", app.runGame);
			
			loadQueued();
			
			
		},
		
		/**
		 * Play the specified sound
		 */
		play: function (id) {
			return createjs.Sound.play(id);
		},
		
		/**
		 * Get specified graphic
		 */
		get: function (id) {
			return queue.getResult(id);
		}
	}
}());