(app.players = function () {
	'use strict';
	
	// Private variables //////////////////////////////////////////

		// vars for each player
	var leftButtons = [],
		leftButtonPressed = [],
		rightButtons = [],
		rightButtonPressed = [],
		states = [],
		graphics = [],
		scores = [],
		movementBounds = [],
		
		// general rule values for all players
		moveSpeed = 8,
		width = 60,
		height = 60,
		
		// keycodes for buttons
		KEY_LEFTARROW = 37,
		KEY_RIGHTARROW = 39,
		KEY_A = 65,
		KEY_S = 83;
	
		
	
	// Private methods ////////////////////////////////////////////

	var loadPlayers = function () {
		var stageWidth = app.game.getScreenWidth(),
			stageHeight = app.game.getScreenHeight();		
	
		// create the players
		createPlayer(KEY_A, KEY_S, 
					(stageWidth / 2) - (stageWidth / 4), stageHeight - height - 50, 
					0, 100,
					'guitar-2',
					{left:40, right:app.game.getScreenHeight() / 2 - 40});
		createPlayer(KEY_LEFTARROW, KEY_RIGHTARROW, 
					(stageWidth / 2) + (stageWidth / 4), stageHeight - height - 50, 
					0, 100,
					'guitar-1',
					{left:app.game.getScreenHeight() / 2 + 40, right:app.game.getScreenHeight() - 40});
	};
	
	
	var createPlayer = function (_leftButton, _rightButton, _x, _y, _limitLeft, _limitRight, _graphic, _bounds) {
		var playerGraphic,
			stage = app.game.getStage();

		playerGraphic = new createjs.Bitmap(app.media.get(_graphic));
		playerGraphic.x = _x;
		playerGraphic.y = _y;
		
		leftButtons.push(_leftButton);
		leftButtonPressed.push(false);
		rightButtons.push(_rightButton);
		rightButtonPressed.push(false);
		states.push('alive');
		scores.push(0);
		movementBounds.push(_bounds);	
		
		graphics.push(playerGraphic);
		stage.addChild(graphics[graphics.length-1]);
	}
	

	var checkControls = function () {
		var i;
		
		$(document).on('keydown', function (event) {
			for(i = 0; i < leftButtons.length; i += 1) {
				if (event.keyCode === leftButtons[i]) {
					leftButtonPressed[i] = true;
				}
			}
		
			for(i = 0; i < rightButtons.length; i += 1) {
				if (event.keyCode === rightButtons[i]) {
					rightButtonPressed[i] = true;
				}
			}
		});
		
		$(document).on('keyup', function (event) {
			for(i = 0; i < leftButtons.length; i += 1) {
				if (event.keyCode === leftButtons[i]) {
					leftButtonPressed[i] = false;
				}
			}
		
			for(i = 0; i < rightButtons.length; i += 1) {
				if (event.keyCode === rightButtons[i]) {
					rightButtonPressed[i] = false;
				}
			}
		});
	};
	
	
	var movePlayers = function () {
		var i;
		
		for (i = 0; i < graphics.length; i += 1) {
			if (leftButtonPressed[i]) {
				if(graphics[i].x > movementBounds[i].left) {
					graphics[i].x -= moveSpeed; 
				}
			} else if (rightButtonPressed[i]) {
				if(graphics[i].x < movementBounds[i].right) {
					graphics[i].x += moveSpeed; 
				}
			}

		}
	};
	
	
	var hitCheck = function (x, y, rect) {
		 return (x >= rect.x && x <= rect.x+rect.width) &&
		        (y >= rect.y && y <= rect.y+rect.height);
	};
	
	
	var collisionCheck = function (b1, b2) {
		/*
return hitCheck(rect1.x, rect1.y, rect2) ||
	        hitCheck(rect1.x+rect1.width, rect1.y, rect2) ||
	        hitCheck(rect1.x, rect1.y+rect1.height, rect2) ||
	        hitCheck(rect1.x+rect1.width,
	                 rect1.y+rect1.height, rect2);
*/

		  if ((b1.x > b2.x + b2.width - 1) || // is b1 on the right side of b2?
        (b1.y > b2.y + b2.height - 1) || // is b1 under b2?
        (b2.x > b1.x + b1.width - 1) || // is b2 on the right side of b1?
        (b2.y > b1.y + b1.height - 1))   // is b2 under b1?
    {
        // no collision
        return false;
    } else {
	    return true;
    }
	};
	
	
		
	// Public methods /////////////////////////////////////////////

	return {
		/**
		 * Constructor
		 */
		init: function () {
			loadPlayers();
			checkControls();
		},
		
		update: function () {
			movePlayers();
		},
		
		checkCollision: function (_x, _y, _width, _height) {
			var i,
				p,
				rect1,
				rect2;
			
			for(i = 0; i < graphics.length; i++) {

				p = graphics[i];
								
				rect1 = {
					x: p.x,
					y: p.y,
					width: width,
					height: height	
				};
				
				rect2 = {
					x: _x,
					y: _y,
					width: _width,
					height: _height	
				};
				
				// bounding box collision
				if (collisionCheck(rect1, rect2)) {
					return true;
				}
			}

			return false;
		},
		
		getBounds: function (id) {
			return movementBounds[id];
		}
	}
}());