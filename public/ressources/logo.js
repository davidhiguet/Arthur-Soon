(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.photo = function() {
	this.initialize(img.photo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,531);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E26D38").ss(5).p("AwhAAQAADOBTC8QBQC1CTCMQCSCMC+BMQDFBQDWAAQDXAADFhQQC+hMCSiMQCSiMBQi1QBUi8AAjOQAAjMhUi8QhQi2iSiMQiSiMi+hMQjFhQjXAAQjWAAjFBQQi+BMiSCMQiTCMhQC2QhTC8AADMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.8,-104.7,219.6,209.4);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AqsAAQAAEPDJDAQDIDAEbAAQEcAADJjAQDIjAAAkPQAAkOjIjAQjJjAkcAAQkbAAjIDAQjJDAAAEOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.5,-66.5,139.1,133);


(lib.s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrM9QgmgGh5glQh7glgfAAQgfAAgRARQgSASgJA4IguAAIAAonIAuAAQAgCtA3BWQA1BVBxA6QBxA4CEAAQCbAABahOQBahOAAhrQAAg7gig8Qgig8hIg1QgxgkjWhzQjYhzhbhEQhbhFgvhTQgvhTAAhjQAAitCLh9QCKh9DXAAQCEAACXA/QBFAeAdAAQAfAAAVgTQAVgTAMg3IAuAAIAAIsIguAAQgWihg6heQg5hfhrg3Qhqg4hyAAQiBAAhUBLQhUBMAABfQAABJA1A9QBNBZEgCUQDsB5BVA/QBXBBAuBYQAuBYAABfQAAC3iUCEQiTCEjqAAQhIAAhAgLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.8,-83.9,111.7,168);


(lib.n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AIVKtIukw9IAAM+QAAB9AcAeQAoAqBSAAIAyAAIAAAlIntAAIAAglIAxAAQBbAAAmg0QAXgfAAhyIAAuqQg/hGgfgUQgfgWg+gSQgegKg+ABIAAglIGAAAINgPyIAAsIQAAh9gdgfQgngphTAAIgxAAIAAglIHtAAIAAAlIgzAAQhZgBgmA0QgXAgAAByIAARvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-68.5,154.1,137.1);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// n
	this.instance = new lib.n("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(198.2,204.6);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).wait(1).to({alpha:0.059},0).wait(1).to({alpha:0.118},0).wait(1).to({alpha:0.176},0).wait(1).to({alpha:0.235},0).wait(1).to({alpha:0.294},0).wait(1).to({alpha:0.353},0).wait(1).to({alpha:0.412},0).wait(1).to({alpha:0.471},0).wait(1).to({alpha:0.529},0).wait(1).to({alpha:0.588},0).wait(1).to({alpha:0.647},0).wait(1).to({alpha:0.706},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.824},0).wait(1).to({alpha:0.882},0).wait(1).to({alpha:0.941},0).wait(1).to({alpha:1},0).wait(1));

	// Calque 2
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(199.3,-107.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({x:199.6,y:198.7},16).wait(18));

	// Calque 4
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(199.2,472);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({y:197.1},16).to({startPosition:0},17).wait(1));

	// s
	this.instance_3 = new lib.s("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(198.3,197.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).wait(1).to({rotation:15.7,alpha:0.043},0).wait(1).to({rotation:31.3,alpha:0.087},0).wait(1).to({rotation:47,alpha:0.13},0).wait(1).to({rotation:62.6,alpha:0.174},0).wait(1).to({rotation:78.3,alpha:0.217},0).wait(1).to({rotation:93.9,alpha:0.261},0).wait(1).to({rotation:109.6,alpha:0.304},0).wait(1).to({rotation:125.2,alpha:0.348},0).wait(1).to({rotation:140.9,alpha:0.391},0).wait(1).to({rotation:156.5,alpha:0.435},0).wait(1).to({rotation:172.2,alpha:0.478},0).wait(1).to({rotation:187.8,alpha:0.522},0).wait(1).to({rotation:203.5,alpha:0.565},0).wait(1).to({rotation:219.1,alpha:0.609},0).wait(1).to({rotation:234.8,alpha:0.652},0).wait(1).to({rotation:250.4,alpha:0.696},0).wait(1).to({rotation:266.1,alpha:0.739},0).wait(1).to({rotation:281.7,alpha:0.783},0).wait(1).to({rotation:297.4,alpha:0.826},0).wait(1).to({rotation:313,alpha:0.87},0).wait(1).to({rotation:328.7,alpha:0.913},0).wait(1).to({rotation:344.3,alpha:0.957},0).wait(1).to({rotation:360,alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Calque 2
	this.instance_4 = new lib.photo();
	this.instance_4.parent = this;
	this.instance_4.setTransform(9,59,0.48,0.48);

	this.instance_5 = new lib.photo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(203,198,0.001,0.002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(209,259,384,254.9);
// library properties:
lib.properties = {
	width: 600,
	height: 600,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"photos/photo.jpg", id:"photo"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;