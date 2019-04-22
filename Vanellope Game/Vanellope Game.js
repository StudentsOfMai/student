(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Vanellope Game_atlas_", frames: [[0,346,852,480],[0,0,1606,344],[1456,660,354,126],[1608,0,373,658],[854,346,600,486]]}
];


// symbols:



(lib.BAckroundjpgcopy2 = function() {
	this.initialize(ss["Vanellope Game_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(ss["Vanellope Game_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["Vanellope Game_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CandyCorn = function() {
	this.initialize(ss["Vanellope Game_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Vanellope = function() {
	this.initialize(ss["Vanellope Game_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Vanellope_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Vanellope();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.59,0.59);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Vanellope_1, new cjs.Rectangle(0,0,354,286.8), null);


(lib.candy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CandyCorn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2961,0.2961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.candy, new cjs.Rectangle(0,0,110.5,194.9), null);


// stage content:
(lib.VanellopeGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this;
		
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		var rndX;
		var rndY;
		
		
		var numOfCatch=0;
		
		candy();
		
		
		function candy() {
		   
		      rndX=Math.floor((Math.random() * (stageW - 30))) + 30;
		      rndY=Math.floor((Math.random() * (stageH - 30))) + 30;
		    }
		
		
		var selfHome = this;
		
		 
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		
		var rndX;
		var rndY;
		
		var numOfCatch=0;
		
		rndcandy();
		
		function rndcandy() {
			  rndX=Math.floor((Math.random() * (stageW - 30))) + 30;
			  rndY=Math.floor((Math.random() * (stageH - 30))) + 30;
			}
			
		selfHome.vanellope.addEventListener ("pressmove", dragFunc);
		
		function dragFunc (evt) {
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		
		var numOfCatch=0;
		
		selfHome.vanellope.addEventListener("pressup", up);
		
		function up (evt) {
			
			if (intersect(evt.currentTarget, selfHome.candy)) {
		selfHome.candy.scaleX-=0.2;
			selfHome.candy.scaleY-=0.2;
				
				selfHome.vanellope.scaleX+=0.05;
			selfHome.vanellope.scaleY+=0.05;
				
				if(numOfCatch%5==0){
		selfHome.candy.scaleX =1 
		selfHome.candy.scaleY =1
		}
		
				if(numOfCatch%10==0){
		selfHome.vanellope.scaleX =1 
		selfHome.vanellope.scaleY =1
		}
				
				numOfCatch++;
				
				if (numOfCatch>30){
					selfHome.txt2.text="טוווווסט!!!";
				}
				selfHome.txt.text=numOfCatch;
						rndcandy();
		        selfHome.candy.x = rndX;
		        selfHome.candy.y = rndY
			}
		}
			
		
		function intersect(obj1, obj2) {
		
		    var obj1W = obj1.nominalBounds;
		    var obj2W = obj2.nominalBounds;
		
		    if (obj1.x + (obj1W.width / 2) <= obj2.x - (obj2W.width / 2)) {
		        return false;
		    } else if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
		        return false;
		    } else if (obj1.x - (obj1W.width / 2) > obj2.x + (obj2W.width / 2)) {
		        return false;
		    } else if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
		        return false;
		    }
		    return true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.txt2 = new cjs.Text("", "bold 96px 'Gan CLM'", "#FF0000");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 115;
	this.txt2.parent = this;
	this.txt2.setTransform(544.8,599);

	this.vanellope = new lib.Vanellope_1();
	this.vanellope.name = "vanellope";
	this.vanellope.parent = this;
	this.vanellope.setTransform(560.55,394.4,1,1,0,0,0,177,143.3);

	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(493.8,694.75,0.5,0.5);

	this.candy = new lib.candy();
	this.candy.name = "candy";
	this.candy.parent = this;
	this.candy.setTransform(305,183.25,0.5723,0.5723,0,0,0,55.2,97.4);

	this.txt = new cjs.Text("0", "bold 45px 'Gan CLM'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 55;
	this.txt.lineWidth = 199;
	this.txt.parent = this;
	this.txt.setTransform(461.75,704.4);

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(159.2,41.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.txt},{t:this.candy},{t:this.instance},{t:this.vanellope},{t:this.txt2}]}).wait(1));

	// Layer_6
	this.instance_2 = new lib.BAckroundjpgcopy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-168,-15,1.6728,1.6728);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(344,369,913.3,419);
// library properties:
lib.properties = {
	id: '2958A07F34078C439A455983D0E8FB4A',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Vanellope Game_atlas_.png?1555614867792", id:"Vanellope Game_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2958A07F34078C439A455983D0E8FB4A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;