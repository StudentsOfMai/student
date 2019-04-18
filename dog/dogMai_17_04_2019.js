(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dogMai_17_04_2019_atlas_", frames: [[0,1258,1280,640],[0,0,1280,1256]]}
];


// symbols:



(lib.bone157272_1280 = function() {
	this.spriteSheet = ss["dogMai_17_04_2019_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dog = function() {
	this.spriteSheet = ss["dogMai_17_04_2019_atlas_"];
	this.gotoAndStop(1);
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


(lib.monkeyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC99").s().p("AiUAZIAAgIIAAgNIAAAAIAEAFQAHAJAFAKQgEAEgEAAQgEAAgEgHgACNAAIgPgOQgCgFADgEQACgDABgDQACgDAFACQAIACAEAJIgBAKQAAAGgDADIgCAAIgCAAg");
	this.shape.setTransform(2.4,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC66").s().p("AjrCrQgighgQgoIADgCIAPg4QAUhPAQhRQANg+AughQAIgKAIgEQA0gdAxAcQAvAbAsACQgBgHADgGQAshYBJA9QBJA9A4BKQAMBohSCdQgiBDg/AWQhDAXg8AAQh9AAhkhggAACCjQAiAYAagaQAHgQALgPQASgcAHgcIgBgDQgJgBgJABQgDARgJAPIgdAsIgDABIgYABQgJgQABgWIABgsQAAgBAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDgBIAAghQAZAAAagFQAWgEAEgXQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgHgCgIgBIgBABQgIALgJABQhNAGhAgGQAAAEACABQAoARAqADIAAApIAAA/Qg2AbgOgsQgIAAgHACIgBACIAAAFIABAPIABADQAoAhAxgWIACAIgAichfQADAPAAAQQAgAdAPgcQAAgSgFgPQgLgigfgDQgGARADAVgACDhqQAMAeAcgNQAFgIgBgNIgBggIgBgCQgGgHgIgBIgugCQAIAXAKAZg");
	this.shape_1.setTransform(1.4,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A2F14").s().p("AAyF/Qg6gFg6gMQh2gZhDhjQgthDgPhLQhDAIgsgcQgvgegmgiQAAgtgBgtQgDg+AlglQAdgcAdgXQA3gKAuAZQAHADAFAFQAFgXAJgWQAKgZAMgWQAEgBADgDQAXgXAdgPQAugXAwgPQDTgoCMB8QA2AwAUBDQAegGAigFQCVgbgQCOQgIBEg5BFQg2BChSgMQgTBNgmBJQg6Bxh4AAIgWgBgAiEiHQgIAFgIAJQguAhgNA+QgQBRgUBPIgPA5IgDACQAQAoAiAgQCVCQDLhHQA/gWAihCQBSifgMhmQg4hLhJg8QhJg9gsBYQgDAGABAHQgtgDgugbQgYgOgZAAQgZAAgbAPgAkDjnQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgwCuAbCtQABgbASgwIAphpQAWg4AeggQBKgiBPAfQAeAMAcAOIABgCQAGgTAKgRQALgUAWgFQBigJBLA6QAUAPAOARIgDgXQgLhBgmg2QhLhmiCgNQiKgOhvBHQgvAegWAtIACAAQAHAAAGACgAE+iKQATCEgdB6QCohCgCipQgBhMhaAbQgrANgcgNQAEAPACAPgAnQiQQglA0AJBJIABATQATAWAZAOQA6AhBOAcQgOhHAOhNQAHgogIADQABgmACgMIAAgCIABgbIgBAAQgkgkgiAAQgsAAgpA7gAAaECIgDgIQgwAVgoggIgBgDIgBgQIAAgFIABgBQAHgCAIAAQAOArA1gbIAAg+IAAgqQgpgDgogRQgCAAAAgFQBAAHBNgHQAJgBAIgLIABgBQAIAAAHADQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQgEAXgWAFQgaAFgZAAIAAAgIADABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAIgBAsQgBAWAJARIAYgBIADgCIAdgsQAJgOADgRQAJgCAJACIABACQgHAdgSAbQgLAQgHAPQgOAOgQAAQgOAAgQgLgAiBAdQAAgQgDgOQgDgUAGgRQAfADALAhQAFAPAAARQgIAOgLAAQgMAAgQgPgAhygHIAAAMIAAAIQAGAMAKgKQgFgKgHgIIgEgFgACbgMQgKgYgIgXIAuACQAIAAAGAHIABADIABAfQABANgFAIQgJAEgHAAQgQAAgIgVgACkgqQgBAEgCACQgDAEACAGIAPAOQABAAAAAAQAAAAABABQAAAAABAAQAAgBABAAQADgEAAgFIABgLQgEgIgIgDIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_2.setTransform(-1,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663333").s().p("Aj4hnQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgHgDgHABQAVgtAwgeQBvhHCKAOQCCANBKBmQAnA2ALBBIADAWQgPgQgTgPQhLg6hjAJQgVAFgMAUQgJARgHATIAAACQgcgOgegMQhPgfhKAiQgeAfgXA4IgpBqQgSAwAAAbQgciuAwitgAFJgNQgCgPgEgPQAcANArgNQBagbABBLQACCqioBCQAdh7gTiDgAm0ChQgZgOgUgWIgBgUQgIhJAkgzQBKhpBSBSIABAAIgBAbIAAACQgCAMgBAlQAIgDgHAoQgOBOANBHQhNgcg6ghg");
	this.shape_3.setTransform(-2.1,-12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCC66").s().p("AjrCrQgighgQgoIADgCIAPg4QAUhPAQhRQANg+AughQAIgKAIgEQA0gdAxAcQAvAbAsACQgBgHADgGQAshYBJA9QBJA9A4BKQAMBohSCdQgiBDg/AWQhDAXg8AAQh9AAhkhggAgDA3QABAnAAAnQgfADgiAJQg3APgeAmQBEgtBUgIIAAgGQAiAIAiATQAXANAPARQgBgVgWgOQgngXgrgDIAAgdIAAhRQApgCAmgPIABgDIgBgFQgIgBgHABQhTAKhFgBIABACQAGADAHABQAmAKAjAAQgEANABARgAhqg/QAAgSgFgPQgLgigfgDQgGARADAVQADAPAAAQQAFgkAKgCIAAAAIABAAQAMgCATApIAAAAgABrhwQgNATAygxIAEAFQAIADADAIIAAADQARAWgBgJIgBggIgBgCQgGgHgIgBIgugCQAIAXgOATg");
	this.shape_4.setTransform(1.4,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4A2F14").s().p("AAyF/Qg6gFg6gMQh2gZhDhjQgthDgPhLQhDAIgsgcQgvgegmgiQAAgtgBgtQgDg+AlglQAdgcAdgXQA3gKAuAZQAHADAFAFQAFgXAJgWQAKgZAMgWQAEgBADgDQAXgXAdgPQAugXAwgPQDTgoCMB8QA2AwAUBDQAegGAigFQCVgbgQCOQgIBEg5BFQg2BChSgMQgTBNgmBJQg6Bxh4AAIgWgBgAiEiHQgIAFgIAJQguAhgNA+QgQBRgUBPIgPA5IgDACQAQAoAiAgQCVCQDLhHQA/gWAihCQBSifgMhmQg4hLhJg8QhJg9gsBYQgDAGABAHQgtgDgugbQgYgOgZAAQgZAAgbAPgAkDjnQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgwCuAbCtQABgbASgwIAphpQAWg4AeggQBKgiBPAfQAeAMAcAOIABgCQAGgTAKgRQALgUAWgFQBigJBLA6QAUAPAOARIgDgXQgLhBgmg2QhLhmiCgNQiKgOhvBHQgvAegWAtIACAAQAHAAAGACgAE+iKQATCEgdB6QCohCgCipQgBhMhaAbQgrANgcgNQAEAPACAPgAnQiQQglA0AJBJIABATQATAWAZAOQA6AhBOAcQgOhHAOhNQAHgogIADQABgmACgMIAAgCIABgbIgBAAQgkgkgiAAQgsAAgpA7gAgrDvQAigJAegCQAAgngBgnQgBgRAFgOQgjABgmgKQgHgCgGgDIgBgCQBEABBUgKQAHgBAIABIABAFIgBAEQgmAPgpABIAABRIAAAeQArADAnAXQAWANABAWQgPgSgXgNQgigTgigHIAAAFQhUAIhEAuQAegnA3gPgAhxgIIgBAAIAAAAQgKACgFAjQAAgQgDgOQgDgUAGgRQAfADALAhQAFAPAAARQgUgngLABgACDgRQAOgTgIgXIAuACQAIAAAGAHIABADIABAfQABAKgRgWIAAgEQgEgIgHgDIgEgFQgkAkgDAAQgBAAADgFg");
	this.shape_5.setTransform(-1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-38.6,101.9,76.8);


(lib.lionMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#993300").s().p("AiZgDIAAgBQAIAAAEgGIACAAIAXABIANABIAAADIABABQABAKgFAGIgBAEIgBABQgOAFgJAAQgYAAACgZgAB5ALIgBgFIgBgDIgBgPIAAgFIAGgDQALgDAEAEIACACQADAFAJAFQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAIAAADIAAACIAAABQgNgBgDALIAAAAIgRgCg");
	this.shape.setTransform(2.6,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AgREvQgagFgagCQhFgHg4gtQh0hdAEiaQAAgcAJgYQAPgvAYgqIADAAIgBgCQAaguAmgoIAHgDIAQgLQAGgEABAHQAPAUAbgYQAtgmA1gWQBTgHBOAlQAOAHANAIQAAAJAKgCQAZASAUAYQBUBqACCOQABB0hQBRQhNBNhrAAQgeAAgfgGgAiWDxQgCAMALAGQBIAfA4gzQBHAqA5gtIAAgEIAAgHIAAgBIAAgCQgIgCgJgBIAAABIgKAHQgwAigognIgLABIAAgCIAAgCIgRgCIAAACQgSATgdAJQgPAFgIgFQgTgLgPAAQgKAAgIAFgAhhBgQgCBAA/AMQAqAIAfgUQARgLAMgPIADgBIAAgDQAcgogLg/QgDgOgNAMIgBABQAFAvgJAoIgBAFQgJgOgUgGQgzgQg6ACQgDgfAUgkIAAgCIgQgCQgYAmAAAtgAifhzQgGAYABAfQAAAIAEAEQAZANAggIIABgCIAAgOQABgagFgYIgDgLIgGgBQgVgEgWgBIgBALgABuiFIAAACQgIAXADAcIABAWIALAFQAQAIAQgIQAHgQABgSQAEgugsAAIgHAAg");
	this.shape_1.setTransform(2.9,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("Ag2DjQgPgSgGgVQA1ADAuAZQAOAHAOABQgFAGgGAFQgZATgVAAQgaAAgXgbgAEFhtQgfgngmgaQAagbAegWQAWgPATALQAjATAJApQAIAkgWAVQgUAUgPARQgJgUgOgQgAkthnQg7gvAshNQAKgRAQgEQBggWAeBWIgHACQgQAHgRALQgDACgFABQgnAngaAsQgOgSgKgHg");
	this.shape_2.setTransform(3.2,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AkxJGQAUgUATgWQAZgcAQgZQh0gKiAA3QAEgQABgQQAFg1ATgxQAWg4gHg0IgCgCQg9gMghAzQgBgPADgOQAQhMAdhGQAYg8ALhBQhfgdhYAhIAfgzQAjg7AzgtQA6g0Afg1IgKgEQhTgkg5gXIAiglQBxh5CVAEQADgLgLgCQgtgKgogbQCVAPCMAoIAAgJQACgOgFgMQgEgLgFgIIAAgBQAHAAAAAHQgBAEADAEQAXAKACgRQgGgSgPgSQgOgRgGgVQANgBAPALQA9ApBDAUQALgVATgNIBSg3QAFgDgCAEQgOAUgQASQgXAaAAAfQCpA3CvAwQg2ACgmAWQAAALAFAFQBJBAAwBaQArBTAlBTQgFACgDgCQgugZgkAFQARA+AlA8QAbAsARAyQAdBWADBWQgKgTgNgOQg3g5hDAGIAAAZQACA4gaAxIgwBdIgEgKQgHgXgFgYQgFgZgIgYQgQgOgHAOQgYA4g4AfQh1BBhbArIADgDQAMgNAJgNQAJgKgCgOIAAgDQi6A/jGAAIgSAAgAkMkOQgtAZgJA6QgHAwAZAeQASAWAeAKQhICFA2CoQAVBCA4AkQCEBUCkgHQBUgEBAgyQAxgmATg3QA4iigyilIgDgJQATAHAWgWQAKgJALgIQADgjgBggQgDhYhTgDQgbAIgYASQgbAUgRAVQhbg3h4AHQgZAKgZAOQgXANgUAQIgCACIgGgDQgCgPgHgNQgNgYgUgQQgTgPgXgGQgpABggARgAkTkhIBPAAQgSgFgUAAQgUAAgVAFg");
	this.shape_3.setTransform(0.2,-3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A2F14").s().p("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");
	this.shape_4.setTransform(-1.8,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF99").s().p("AgREvQgagFgagCQhFgHg4gtQh0hdAEiaQAAgcAJgYQAPgvAYgqIADAAIgBgCQAaguAmgoIAHgDIAQgLQAGgEABAHQAPAUAbgYQAtgmA1gWQBTgHBOAlQAOAHANAIQAAAJAKgCQAZASAUAYQBUBqACCOQABB0hQBRQhNBNhrAAQgeAAgfgGgABMEXQADgUgNgRQgbgjgyALQgoAKgbAdQgDADACAEQAagZAngJQAQgEAOAAQAzAAAJA1gAhhBgQgCBAA/AMQAqAIAfgUQARgLAMgPIADgBIAAgDQAcgogLg/QgDgOgNAMIgBABQAFAvgJAoIgBAFQgJgOgUgGQgzgQg6ACQgDgfAUgkIAAgCIgQgCQgYAmAAAtgAifhzQgGAYABAfQAAAIAEAEQAZANAggIIABgCIAAgOQABgagFgYIgDgLIgGgBQgVgEgWgBIgBALgABuiFIAAACQgIAXADAcIABAWIALAFQAQAIAQgIQAHgQABgSQAEgugsAAIgHAAg");
	this.shape_5.setTransform(2.9,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A2F14").s().p("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");
	this.shape_6.setTransform(-1.8,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-62.6,132.3,122);


(lib.dog_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.dog();
	this.instance.parent = this;
	this.instance.setTransform(0,145.8,0.174,0.174,-40.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.dog_1, new cjs.Rectangle(0,0,311,310.6), null);


(lib.carrotMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AFRLSQlhihmLhOQjDgniZhhQEbgOFEAmQBLAIBKAGQjmiwj9i1QiChdhbhuQHJDwHHE9QBfBCBVBMQBhBWBTBjQBqgkgfhMQh/hHhrhVQmplThnoaQgxkBDkhqIAdAVQAUAOAMAWQiRKUHGG9QBFBFBTBAQBfBIBVBRQAMBYhyA0QgkANgfgXQgNgJgOgNQgXAYgsATQhOgphRglgAleGwQEKBZENBPQBVAaBPAsQAhAUAgAWQAxALgTg5QglglgoggQi+iVj0gcQg3gGg1AAQhbAAhUASgAAjFjQBBAoBGAcQh3hxiQhLQhOgng0gdQB8BpCGBTgAAch8QAPA7AcA5QANAcAXAYQgDgsghhIQgXg1gPAAIgFABg");
	this.shape.setTransform(-34.5,-22.4,0.332,0.332);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AF7LWQllj0mgh6Qmvh/kblYQh/ibAzjYIABgIQBRAlBOApQAsgTAXgYQAOANANAKQAfAWAkgNQBygzgMhZQhVhRhfhIQhThAhFhEIAdhtQENjME7EnQH1HaIIHEQHUGXC+I+QmfgomVkTgAqgjdQgOBVgLBWQFoBgFLClQE6CdEzCuQjwlhlSkOQlHkGkpjxQg1CzggC4gAxSnzQgggXghgTIAShKQAoAgAlAlQAQAwggAAIgOgBgAxvqwIAVhTQBrBVB/BIQAfBLhqAkQhThihhhXg");
	this.shape_1.setTransform(16,17.8,0.332,0.332);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.carrotMC, new cjs.Rectangle(-59.7,-49,115.6,101.4), null);


(lib.bunnyMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgEAKAAANQABBThSADQgFgEgDgGQgGgKAAAJQANAhApgbQAbgSANgWIAAAGIAAAUQAmAWAqgGQAJgNAKgLQAYgagIgYQgDAMgFAJQgiBMhEgwIABgMQACgJgFgEQALgZgFgfQAngCAWggQBdA2A0BkQhxBHiRAAQguAAgygHg");
	this.shape.setTransform(-0.7,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgNAdQgfgFgbgMQANgSAPgSQAIgJAIADQA2APAtAaQgYAVgkAAQgMAAgNgDg");
	this.shape_1.setTransform(-4.8,26.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgWAhgoABQAGAfgLAaQAEADgBAJIgBAOQBEAvAihNQAEgJADgMQAJAYgZAcQgKALgIAMQgqAGgngVIAAgWIAAgGQgMAXgcASQgpAbgMggQAAgKAFALQAEAFAFAFQBSgDgBhVQAAgNADgJQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AhgrIgEgFIAFADQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDIAAAAQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIIAGA3IAMgJQAfABAgACIAAACQgngDgkAOIAIBDQAJBLBTAMIAGABIAAAAgAhnD5QgPASgNATQAbAMAfAFQA1AKAggcQgsgbg3gQIgEAAQgGAAgGAHgAkkGUQANgNARgLIAwADIAAACQgwgIggAdIACgCgAjAClIAAgFIAAgWQgBgLAEgIQALABAJADIAOADIABAGIAAAQIAAATQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAABQgOAGgJAAQgLAAgDgLgAivCOQgCAPAFgJQACgHgEAAIgBABgAAjCRIgBgBQAAgNACgMQACgPAOgLIAQADIAIACIAAANIAAAfIAAACQgHALgKAAQgLAAgNgKgAA4B+QAFgHgDAAQgLARAJgKg");
	this.shape_2.setTransform(1.2,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCFF").s().p("AhwH4QhTgNgJhKIgIhEQAkgNAnACIAAgBQgggCgfgBIgMAJIgGg4QAhAJAfAOQATAIAJgIQgkgUgmgKIgTgFIgCgWQgJhzA4hOQAxhDhAhGQiEiSgXi7QgEgfAVgNQBCgmBEAwQAPAKAGAPQBBC5ASDNQBNgHBbgZQAAgUgBgUQgFg6AFg6QAQi2CQhmQBXgPAIBVQAMB7g4BnQgXAqgcAjQguA4gLBIQB4BiAhCNQgsARgoAXQApgSAtgOQAGAeACAgIAAAAIg6ACIA7ABQABAVgGARQgTgFgUgDQARAJATAIQgIASgPANQgdAbgfAVQgOgkgWggQhSh1iDgbQgjAXgYAfIgFgDIAEAFQghAqgLA6QgOBBAHA6IgGgBgAjJGVIgCACQAggdAwAHIAAgBIgwgDQgRAKgNAOgAhlCLIAAAVIAAAGQAFAUAggQQAAAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgSIAAgRIgBgFIgOgEQgJgCgLgBQgEAIABALgAB/B4QgCAMAAAMIABACQAcAUANgVIAAgDIAAgeIAAgNIgIgDIgQgCQgOAKgCAQg");
	this.shape_3.setTransform(-7.9,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgEAKAAANQAAAcgJAUQgcABgbAKQgnASgDAiQAjg4AlAGQASADAPAAIAAADIAIgDIAQgCQATgEAcAPQAbAQARARQgBgVgYgLQgogTgrgFIADgTQAFgbgCgcQAkgDAVgeQBdA2A0BkQhxBHiRAAQguAAgygHgAiDAUIAFgBQgBAAAAgBQgBgBAAAAQgBgBAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAABQAAABAAABgAgigWIADgIIgBAKIgCgCgAgchOIACAAIgBAGIgBgGg");
	this.shape_4.setTransform(-0.7,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCFF").s().p("AhwH4QhTgNgJhKIgIhEQAkgNAnACIAAgBQgggCgfgBIgMAJIgGg4QAhAJAfAOQATAIAJgIQgkgUgmgKIgTgFIgCgWQgJhzA4hOQAxhDhAhGQiEiSgXi7QgEgfAVgNQBCgmBEAwQAPAKAGAPQBBC5ASDNQBNgHBbgZQAAgUgBgUQgFg6AFg6QAQi2CQhmQBXgPAIBVQAMB7g4BnQgXAqgcAjQguA4gLBIQB4BiAhCNQgsARgoAXQApgSAtgOQAGAeACAgIAAAAIg6ACIA7ABQABAVgGARQgTgFgUgDQARAJATAIQgIASgPANQgdAbgfAVQgOgkgWggQhSh1iDgbQgjAXgYAfIgFgDIAEAFQghAqgLA6QgOBBAHA6IgGgBgAjJGVIgCACQAggdAwAHIAAgBIgwgDQgRAKgNAOgAhlCLIAAAVIADgNQACgPARAEQAQADAAAKIAAgRIgBgFIgOgEQgJgCgLgBQgEAIABALgAhUCaIADgFIABgDIgEAIgAB/B4QgCAMAAAMIAOgSIACgDQgBAAAAAAQgBAAAAAAQABAAAAgBQABAAABgBIABAAQAKgLAGALQAIANAAgDIAAgTIAAgNIgIgDIgQgCQgOAKgCAQg");
	this.shape_5.setTransform(-7.9,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgVAfgkADQACAbgFAbIgDAUQArAFAnATQAYALABAVQgRgRgbgQQgagPgUAEIgRACIgIAEIAAgEQgOAAgSgDQglgGgjA5QACgjAogRQAagMAdgBQAJgTAAgdQAAgNADgJQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AhgrIgEgFIAFADQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDIAAAAQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIIAGA3IAMgJQAfABAgACIAAACQgngDgkAOIAIBDQAJBLBTAMIAGABIAAAAgAg1F4IACACIABgLIgDAJgAgwE/IABAGIABgGIgBAAIgBAAgAhnD5QgPASgNATQAbAMAfAFQA1AKAggcQgsgbg3gQIgEAAQgGAAgGAHgAiSGiIgEABQAAgJAEAIgAkkGUQANgNARgLIAwADIAAACQgwgIggAdIACgCgAjACgIAAgWQgBgLAEgIQALABAJADIAOADIABAGIAAAQQgBgJgQgEQgQgEgCAPIgDAOIAAAAgAAiCQQAAgNACgMQACgPAOgLIAQADIAIACIAAANIAAATQAAAEgIgOQgGgKgKAKIgBAAQgBABgBABQgBAAAAAAQAAABAAAAQABgBABAAIgDAEIgNASIAAAAg");
	this.shape_6.setTransform(1.2,-1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgEAKAAANQABBThSADQgFgEgDgGQgGgKAAAJQAEALAHAEQAGAXAbAIQA5APA0gcQARgKADgPIABAAQAJgNAKgLQAYgagIgYQgDAMgFAJQgiBMg5g0QgIgCgDgFQgDgFABgJQALgZgFgfQAngCAWggQBdA2A0BkQhxBHiRAAQguAAgygHg");
	this.shape_7.setTransform(-0.7,38.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgWAhgoABQAGAfgLAaQgBAIADAFQADAGAIABQA5A1AihNQAEgJADgMQAJAYgZAcQgKALgIAMIgBAAQgEAQgRAJQgzAcg5gPQgbgIgGgXQgHgEgEgKQAAgKAFALQAEAFAFAFQBSgDgBhVQAAgNADgJQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AhgrIgEgFIAFADQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDIAAAAQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIIAGA3IAMgJQAfABAgACIAAACQgngDgkAOIAIBDQAJBLBTAMIAGABIAAAAgAhnD5QgPASgNATQAbAMAfAFQA1AKAggcQgsgbg3gQIgEAAQgGAAgGAHgAkkGUQANgNARgLIAwADIAAACQgwgIggAdIACgCgAjAClIAAgFIAAgWQgBgLAEgIQALABAJADIAOADIABAGIAAAQIAAATQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAABQgOAGgJAAQgLAAgDgLgAivCOQgCAPAFgJQACgHgEAAIgBABgAAjCRIgBgBQAAgNACgMQACgPAOgLIAQADIAIACIAAANIAAAfIAAACQgHALgKAAQgLAAgNgKgAA4B+QAFgHgDAAQgLARAJgKg");
	this.shape_8.setTransform(1.2,-1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgNAaQgfgGgbgMQANgRAPgSQBGAJAtAZQgYAVgkAAQgMAAgNgCg");
	this.shape_9.setTransform(-4.8,26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgDBqhSADQgFgEgDgGQgCAKAIAEQAFAWAhgDQA1ACAtgMQAWgBADgPQAKgNAKgLQAYgagIgYQgDAMgFAJQgiBMg5g0QgHgCgDgFQgEgFABgJQALgZgFgfQAngCAWggQBdA2A0BkQhxBHiRAAQguAAgygHg");
	this.shape_10.setTransform(-0.7,38.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CCFF").s().p("AjMGhIgIhEQAkgNAnACQgggDgfgBQgQgTgCgcQAhAJAfAOQATAIAJgIQgkgUgmgKIgTgFIgCgWQgJhzA4hOQAxhDhAhGQiEiSgXi7QgEgfAVgNQBCgmBEAwQAPAKAGAPQBBC5ASDNQBNgHBbgZQAAgUgBgUQgFg6AFg6QAQi2CQhmQBXgPAIBVQAMB7g4BnQgXAqgcAjQguA4gLBIQB4BiAhCNQgsARgoAXQApgSAtgOQAGAeACAgIg6ACIA7ABQABAVgGARQgTgFgUgDQARAJATAIQgIASgPANQgdAbgfAVQgOgkgWggQhSh1iDgbQgjAXgYAfQgiAsgLA6QgOBBAHA6QhZgOgJhKgAjJGVIgCACIABgBIABAAIABgBIACgBIAAgBIAvgTQAKgBALABIAFABIgFgBIgDAAIgmgDQgRAKgNAOgAhlCLIAAAVIAAAGQAFAUAhgTIAAgSIgBgWIgigHQgEAIABALgAB/B4QgCAMAAAMIABACQAcAUANgVIAAgDIAAgeIAAgNIgIgDIAAAAQgIAAgYAYg");
	this.shape_11.setTransform(-7.9,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgWAhgoABQAGAfgLAaQgBAIADAFQADAGAIABQA5A1AihNQAEgJADgMQAJAYgZAcQgKALgJAMQgDAQgWAAQgtANg1gDQghADgGgWQgHgEABgJQAEAFAFAFQBSgEAChqQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AigtQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIQACAbAQATQAfABAgAEQgngDgkAOIAIBDQAJBKBZAOIAAAAgAiDEeQAbAMAfAFQA1AKAggcQgsgbhHgJQgPASgNATgAkkGUQANgNARgLIAlADIADABIAFAAIgEAAQgLgBgLABIguASIgBABIgBABIgBABIgBABIgBAAIACgCgAjAClIAAgFIAAgWQgBgLAEgIIAiAHIABAWIAAATQgQAIgJAAQgKAAgDgKgAivCOQgCAPAFgJQACgHgEAAIgBABgAAjCRIgBgBQAAgNACgMQAZgZAHACIAIACIAAANIAAAfIAAACQgHALgKAAQgLAAgNgKgAA4B+QAFgHgDAAQgLARAJgKg");
	this.shape_12.setTransform(1.2,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgDBqhSADQgFgEgDgGQgCAKAIAEQAGAVAmgOQAxgKAmACQAbAJADgPQAKgNAKgLQAYgagIgYQgDAMgFAJQgiBMg5g0QgHgCgDgFQgEgFABgJQALgZgFgfQAngCAWggQBdA2A0BkQhxBHiRAAQguAAgygHg");
	this.shape_13.setTransform(-0.7,38.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgWAhgoABQAGAfgLAaQgBAIADAFQADAGAIABQA5A1AihNQAEgJADgMQAJAYgZAcQgKALgJAMQgDAQgagKQgogCgwALQgnANgGgVQgHgEABgJQAEAFAFAFQBSgEAChqQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AigtQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIQACAbAQATQAfABAgAEQgngDgkAOIAIBDQAJBKBZAOIAAAAgAiDEeQAbAMAfAFQA1AKAggcQgsgbhHgJQgPASgNATgAkkGUQANgNARgLIAlADIADABIAFAAIgEAAQgLgBgLABIguASIgBABIgBABIgBABIgBABIgBAAIACgCgAjAClIAAgFIAAgWQgBgLAEgIIAiAHIABAWIAAATQgQAIgJAAQgKAAgDgKgAivCOQgCAPAFgJQACgHgEAAIgBABgAAjCRIgBgBQAAgNACgMQAZgZAHACIAIACIAAANIAAAfIAAACQgHALgKAAQgLAAgNgKgAA4B+QAFgHgDAAQgLARAJgKg");
	this.shape_14.setTransform(1.2,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AiwBqQgCh1A+heQAQANAXAHQAYAHAVAAQgEAKAAANQABBThSADQgFgEgDgGQgGgKAAAJQAEALAHAEQAGATAtgYQAtgXAfASQAgASADgPIABAAQAJgNAKgLQAYgagIgYQgDAMgFAJQgiBMg5g0QgIgCgDgFQgDgFABgJQALgZgFgfQAngCAWggQBdA2A0BkQhxBHiRAAQguAAgygHg");
	this.shape_15.setTransform(-0.7,38.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A2F14").s().p("AkMH1QgvgPgMgsQgZAbgWAVQgCgJAGgEQAWgSAVgTQgDgLAAgMIgBg3IgSALQg+AtgbBCQgLgIAKgQQAog6A/goIAFgDQgBgnACgnQg5gLg8AGQA8gOA6AJQAGhpAWhkQAFgYASgVQAGgGAFgJQhfiKhAiTQgZg5ABhBQgBgiAIglQADgSAWgEQCOgXA3B4QATAnAHArQAUB/ANCAIAAABQA3gRBLgHQgdh/Anh1QAriEBshCQAcgHAWAAQBSAAADBbQAGDviTCrQgDAEgCAHQB3BjAdCXQAtgPAwgIIBdgSQgoAShMAQQgjAIghAJIADATQADAYAAAZIBPgEQAFgBADgBQAHAAAGACIAAABQgJADgKAAQgpACgpABQgBAWgEAVQAaAIAaAKQAcALAWAMQghgCgmgOIgigMQgFATgIATQgRAsgvAWIgNAHQh2A3h+AAQhhAAhmgggAjEH4QAyAIAuAAQCRAABxhIQgzhlhdg2QgWAhgoABQAGAfgLAaQgBAIADAFQADAGAIABQA5A1AihNQAEgJADgMQAJAYgZAcQgKALgIAMIgBAAQgEAQgfgTQgggSgsAYQgtAXgGgTQgHgEgEgKQAAgKAFALQAEAFAFAFQBSgDgBhVQAAgNADgJQgUAAgZgIQgXgHgQgNQg+BeACB2gAjFH4QgHg6AOhBQALg5AhgrIgEgFIAFADQAYgfAkgXQCCAbBSB1QAWAgAOAkQAfgVAdgbQAPgNAIgSQgTgIgRgJQAUAEATAFQAGgSgBgVIg7AAIA6gDIAAAAQgCgggGgeQgtAOgpASQAogXAsgRQghiMh4hiQALhJAug3QAcgkAXgqQA4hmgMh8QgIhVhXAPQiQBmgPC2QgFA6AFA6QABAUAAAUQhcAZhNAHQgSjNhBi5QgGgPgPgKQhEgwhCAmQgVANAEAfQAXC7CECSQBABGgxBDQg4BPAJByIACAXIATAEQAmAKAkAUQgJAJgTgJQgfgOghgIIAGA3IAMgJQAfABAgACIAAACQgngDgkAOIAIBDQAJBLBTAMIAGABIAAAAgAhnD5QgPASgNATQAbAMAfAFQA1AKAggcQgsgbg3gQIgEAAQgGAAgGAHgAkkGUQANgNARgLIAwADIAAACQgwgIggAdIACgCgAjAClIAAgFIAAgWQgBgLAEgIQALABAJADIAOADIABAGIAAAQIAAATQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAABQgOAGgJAAQgLAAgDgLgAivCOQgCAPAFgJQACgHgEAAIgBABgAAjCRIgBgBQAAgNACgMQACgPAOgLIAQADIAIACIAAANIAAAfIAAACQgHALgKAAQgLAAgNgKgAA4B+QAFgHgDAAQgLARAJgKg");
	this.shape_16.setTransform(1.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_3},{t:this.shape_15},{t:this.shape_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_3},{t:this.shape_15},{t:this.shape_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_3},{t:this.shape_15},{t:this.shape_1}]},1).to({state:[{t:this.shape_14},{t:this.shape_11},{t:this.shape_13},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_3},{t:this.shape_7},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-54.6,90.3,106.6);


(lib.bone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.bone157272_1280();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bone, new cjs.Rectangle(0,0,173.4,86.7), null);


// stage content:
(lib.dogMai_17_04_2019 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this;
		
		//משתנים ששומרים על גודל הבמה 
		var stageH = parseInt(canvas.style.height);
		var stageW = parseInt(canvas.style.width);
		
		//משתנים שישמרו לנו את המיקומים שנגריל
		var rndX;
		var rndY;
		
		//משתנה ששומר את הניקוד בהתחלה הוא 0 כי עדיין לא הייתה פגיעה
		var numOfCatch=0;
		
		//אנחנו קוראים לפונקציית ההגרלה 
		rndBone();
		
		//פונקציית הגרלה
		function rndBone() {
			// נוריד מעט מהערך המוגרל כדי שהעצם לא תתמקם ממש על גבול הבמה
			  rndX=Math.floor((Math.random() * (stageW - 30))) + 30;
			  rndY=Math.floor((Math.random() * (stageH - 30))) + 30;
			}
		
		//הוספת מאזינים שיאזינו ללחיצה על דמות הראשית
		selfHome.dog.addEventListener("pressmove", dragFunc);
		selfHome.dog.addEventListener("pressup", up);
		
		//פונקציית שקוראת כל פעם שעוזבים את העכבר מהדמות הראשית		
		function up(evt) {
			//אם היתה פגיעה
			if (intersect(evt.currentTarget, selfHome.bone)) {
		// הגדלת הניקוד ב1 בבכל פגיעה
				numOfCatch++;
				//כל פעם שיש פגיעה קוראים לפונקציית ההגרלה לקרות שוב
				rndBone();
				//גורמים למיקום העצם להיות לפי המיקום שהוגרל
				selfHome.bone.x = rndX;
				selfHome.bone.y = rndY
		//שמים בתיבת הטקסט את הניקוד
		selfHome.txt.text=numOfCatch;
		}}
		
		//פונקציית גרירה שגורמת לדמות הראשית ללכת לפי העבר
		function dragFunc(evt) {
			//היכן בוצעה הלחיצה ביחס לבמה כולה
			var p = stage.globalToLocal(stage.mouseX, stage.mouseY);
			evt.currentTarget.x = p.x;
			evt.currentTarget.y = p.y;
		}
		
		//--- בדיקת חפיפה בין שני אובייקטים
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

	// Actions
	this.text = new cjs.Text("ניקוד", "bold 24px 'Verdana'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 95;
	this.text.parent = this;
	this.text.setTransform(776.3,21.1);

	this.text_1 = new cjs.Text("קייטנת אנימייט עם מאי :)", "bold 24px 'Verdana'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 359;
	this.text_1.parent = this;
	this.text_1.setTransform(440.9,11.5);

	this.txt2 = new cjs.Text("", "bold 60px 'Verdana'");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 75;
	this.txt2.lineWidth = 306;
	this.txt2.parent = this;
	this.txt2.setTransform(196.5,23.1);

	this.txt = new cjs.Text("0", "bold 24px 'Verdana'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 31;
	this.txt.lineWidth = 244;
	this.txt.parent = this;
	this.txt.setTransform(713.2,21.1);

	this.bone = new lib.bone();
	this.bone.name = "bone";
	this.bone.parent = this;
	this.bone.setTransform(696.5,258,1,1,0,0,0,86.7,43.4);

	this.dog = new lib.dog_1();
	this.dog.name = "dog";
	this.dog.parent = this;
	this.dog.setTransform(383.6,148.6,0.745,0.745,0,0,0,155.5,155.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC33").s().p("EhLDAuzMAAAhdlMCWHAAAMAAABdlg");
	this.shape.setTransform(480.4,298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.dog},{t:this.bone},{t:this.txt},{t:this.txt2},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,298.5,960.8,599.1);
// library properties:
lib.properties = {
	id: '953B66ABC0312A4D9113EEA8BA3E966C',
	width: 960,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dogMai_17_04_2019_atlas_.png?1555518077542", id:"dogMai_17_04_2019_atlas_"}
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
an.compositions['953B66ABC0312A4D9113EEA8BA3E966C'] = {
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;