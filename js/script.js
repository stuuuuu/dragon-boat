jQuery(function($){

	// check of loggedIn
    var loggedIn = 0;
    var captchaVal = "";

   

   
   var x = setInterval(function(){
   		$(".dragboat3").animate({
	    'left':'-100px'
	   },
	   {
	     easing: 'swing',
	     duration: 20000,
	     complete: function(){
	     	$(".dragboat3").attr('style','');
	      
	    }
   },21000)

});


    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
		{
		  $(" #Login .reg").css({'left':'0','top':'0'});
		  $("body").css({'max-height':'1080px'});
		}

      // BGM
     $('<embed id="bgm" src="audio/db-bg.mp3"></embed>').prependTo('body');
    var bgm = setInterval(function(){
      $("#bgm").remove();
      $('<embed id="bgm" src="audio/db-bg.mp3"></embed>').prependTo('body');
    }, 62000 );

    $(".sounds").on('click', function(event) {
      $("embed#bgm").remove();
      clearInterval(bgm);
      if($(this).hasClass('soundOn')){
        $(this).addClass('soundOff');
        $(this).removeClass('soundOn');
        $(".aud").get(0).pause();
      }
      else{
        $(this).addClass('soundOn');
        $(this).removeClass('soundOff');
        $(".aud").get(0).play();
      }
    });


	$(".btn-rules").on('click',  function(event) {
		$(".pop,.pop-rules").fadeIn();
	});

	$(".pop-close").on('click',  function(event) {
		$(".pop,.pop-rules").fadeOut();
	})

	$(".pop-close2").on('click',  function(event) {
		$(".pop,.pop-login").fadeOut();
	})

	$(".pop-close3").on('click',  function(event) {
		$(".pop,.pop-prize").fadeOut();
	})

	$(".title").delay(300).queue(function(next){
		$(this).addClass('slide-in-top');
		next();
	});

	$(".details, .btn-rules").delay(300).queue(function(next){
		$(this).fadeIn();
		next();
	});


	$(".dump1").delay(350).queue(function(next){
		$(this).fadeIn().addClass('bounce-in-top');
		next();
	});
	$(".dump2").delay(400).queue(function(next){
		$(this).fadeIn().addClass('bounce-in-top');
		next();
	});
	$(".dump3").delay(450).queue(function(next){
		$(this).fadeIn().addClass('bounce-in-top');
		next();
	});


	$(".btn-logout").on('click',  function(event) {
		$(".acct").fadeOut();
		loggedIn = 0;
	});

	$("div[class*=dump]").on('click',  function(event) {
		if(loggedIn == 0){
			alert("请先登入帐号");
		}
		
		var $this = $(this);
		var amt = $this.attr('data-prize');
		amt = parseInt(amt);

		

		if(loggedIn==1){
			$(".aud2").get(0).play();
			$(this).removeClass('dump-active dump-inactive bounce-top bounce-top1 bounce-top2');

			$(this).addClass('dump-sprite active-anim');
			$(this).find(".smoke").fadeOut();
			
			var pos = ['1','34','67','100'], x=0,
			anim = setInterval(function(){
				$this.css({
					'background-position': +pos[x]+'%'
				})
			
				if (x == 3) {
					clearInterval(anim);
				}
					x+=1;
			},150);

			switch(amt){
				case 58:
					$(".prizeAmt").delay(500).queue(function(next){
						$(this).attr('class','');
						$(this).addClass('prizeAmt prize-58');
						$this.css({'pointer-events':'none'});
						$this.removeClass('bounce-in-top');
						next();
						
						$(".pop-prize").delay(300).queue(function(next){
							$(".pop,.pop-prize").fadeIn();
							$(this).addClass('swirl-in-fwd');
							next();
						})
					});
						
					break;
				case 68:
					$(".prizeAmt").delay(500).queue(function(next){
						$(this).attr('class','');
						$(this).addClass('prizeAmt prize-68');
						$this.css({'pointer-events':'none'});
						$this.removeClass('bounce-in-top');
						next();
						
						$(".pop-prize").delay(300).queue(function(next){
							$(".pop,.pop-prize").fadeIn();
							$(this).addClass('swirl-in-fwd');
							next();
						})
						
					});
					break;
				case 88:
					$(".prizeAmt").delay(500).queue(function(next){
						$(this).attr('class','');
						$(this).addClass('prizeAmt prize-88');
						$this.css({'pointer-events':'none'});
						$this.removeClass('bounce-in-top');
						next();
						
						$(".pop-prize").delay(300).queue(function(next){
							$(".pop,.pop-prize").fadeIn();
							$(this).addClass('swirl-in-fwd');
							next();
						})
					});
					break;
			}
		}

		
	});




	 
    // on click log in
    $("#login-submit").on('click', function(event) {
            loggedIn = 1;
           $("div[class*=dump]").removeClass('dump-inactive').addClass('dump-active');
           $(".smoke").fadeIn();
           $(".snooze").fadeOut();
            $(".pop,.pop-login").fadeOut();
            $("#acct-user").fadeIn();
            $(".acct").fadeIn();
      
       $(".dump1").removeClass('bounce-in-top').addClass('bounce-top');
       $(".dump2").removeClass('bounce-in-top').addClass('bounce-top1');
       $(".dump3").removeClass('bounce-in-top').addClass('bounce-top2');
        $("#Login").fadeOut();
        
    });

    $(".btn-logout").on('click',  function(event) {
    	$("#Login").fadeIn();
        $(".captcha-input").val("");
       $("#acct-user").fadeOut();
       loggedIn = 0;
    });
});






// // falling leaves animation


var LeafScene = function(el) {
    this.viewport = el;
    this.world = document.createElement('div');
    this.leaves = [];

    this.options = {
      numLeaves: 100,
      wind: {
        magnitude: 1.2,
        maxSpeed: 6,
        duration: 300,
        start: 0,
        speed: 0
      },
    };

    this.width = this.viewport.offsetWidth;
    this.height = this.viewport.offsetHeight;

    // animation helper
    this.timer = 0;

    this._resetLeaf = function(leaf) {

      // place leaf towards the top left
      leaf.x = this.width * 2 - Math.random()*this.width*1.75;
      leaf.y = -10;
      leaf.z = Math.random()*200;
      if (leaf.x > this.width) {
        leaf.x = this.width + 10;
        leaf.y = Math.random()*this.height/2;
      }
      // at the start, the leaf can be anywhere
      if (this.timer == 0) {
        leaf.y = Math.random()*this.height;
      }

      // Choose axis of rotation.
      // If axis is not X, chose a random static x-rotation for greater variability
      leaf.rotation.speed = Math.random()*10;
      var randomAxis = Math.random();
      if (randomAxis > 0.5) {
        leaf.rotation.axis = 'X';
      } else if (randomAxis > 0.25) {
        leaf.rotation.axis = 'Y';
        leaf.rotation.x = Math.random()*180 + 90;
      } else {
        leaf.rotation.axis = 'Z';
        leaf.rotation.x = Math.random()*360 - 180;
        // looks weird if the rotation is too fast around this axis
        leaf.rotation.speed = Math.random()*3;
      }

      // random speed
      leaf.xSpeedVariation = Math.random() * 0.8 - 0.4;
      leaf.ySpeed = Math.random() + 1.5;

      return leaf;
    }

    this._updateLeaf = function(leaf) {
      var leafWindSpeed = this.options.wind.speed(this.timer - this.options.wind.start, leaf.y);

      var xSpeed = leafWindSpeed + leaf.xSpeedVariation;
      leaf.x -= xSpeed;
      leaf.y += leaf.ySpeed;
      leaf.rotation.value += leaf.rotation.speed;

      var t = 'translateX( ' + leaf.x + 'px ) translateY( ' + leaf.y + 'px ) translateZ( ' + leaf.z + 'px )  rotate' + leaf.rotation.axis + '( ' + leaf.rotation.value + 'deg )';
      if (leaf.rotation.axis !== 'X') {
        t += ' rotateX(' + leaf.rotation.x + 'deg)';
      }
      leaf.el.style.webkitTransform = t;
      leaf.el.style.MozTransform = t;
      leaf.el.style.oTransform = t;
      leaf.el.style.transform = t;

      // reset if out of view
      if (leaf.x < -10 || leaf.y > this.height + 10) {
        this._resetLeaf(leaf);
      }
    }

    this._updateWind = function() {
      // wind follows a sine curve: asin(b*time + c) + a
      // where a = wind magnitude as a function of leaf position, b = wind.duration, c = offset
      // wind duration should be related to wind magnitude, e.g. higher windspeed means longer gust duration

      if (this.timer === 0 || this.timer > (this.options.wind.start + this.options.wind.duration)) {

        this.options.wind.magnitude = Math.random() * this.options.wind.maxSpeed;
        this.options.wind.duration = this.options.wind.magnitude * 50 + (Math.random() * 20 - 10);
        this.options.wind.start = this.timer;

        var screenHeight = this.height;

        this.options.wind.speed = function(t, y) {
          // should go from full wind speed at the top, to 1/2 speed at the bottom, using leaf Y
          var a = this.magnitude/2 * (screenHeight - 2*y/3)/screenHeight;
          return a * Math.sin(2*Math.PI/this.duration * t + (3 * Math.PI/2)) + a;
        }
      }
    }
  }

  LeafScene.prototype.init = function() {

    for (var i = 0; i < this.options.numLeaves; i++) {
      var leaf = {
        el: document.createElement('div'),
        x: 0,
        y: 0,
        z: 0,
        rotation: {
          axis: 'X',
          value: 0,
          speed: 0,
          x: 0
        },
        xSpeedVariation: 0,
        ySpeed: 0,
        path: {
          type: 1,
          start: 0,

        },
        image: 1
      };
      this._resetLeaf(leaf);
      this.leaves.push(leaf);
      this.world.appendChild(leaf.el);
    }

    this.world.className = 'leaf-scene';
    this.viewport.appendChild(this.world);

    // set perspective
    this.world.style.webkitPerspective = "400px";
    this.world.style.MozPerspective = "400px";
    this.world.style.oPerspective = "400px";
    this.world.style.perspective = "400px";
    
    // reset window height/width on resize
    var self = this;
    window.onresize = function(event) {
      self.width = self.viewport.offsetWidth;
      self.height = self.viewport.offsetHeight;
    };
  }

  LeafScene.prototype.render = function() {
    this._updateWind();
    for (var i = 0; i < this.leaves.length; i++) {
      this._updateLeaf(this.leaves[i]);
    }

    this.timer++;

    requestAnimationFrame(this.render.bind(this));
  }

  // start up leaf scene
  var leafContainer = document.querySelector('.falling-leaves'),
      leaves = new LeafScene(leafContainer);

  leaves.init();
  leaves.render();