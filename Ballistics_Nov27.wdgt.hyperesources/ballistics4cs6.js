(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.ballistics4cs6 = function() {
	this.initialize();

	// bullet1
	this.b1 = new lib.bullet1_2();
	this.b1.setTransform(816,385.5);
	new cjs.ButtonHelper(this.b1, 0, 1, 2, false, new lib.bullet1_2(), 3);

	// bullet2
	this.b2 = new lib.bullet2_2();
	this.b2.setTransform(893.5,385.5);
	new cjs.ButtonHelper(this.b2, 0, 1, 2, false, new lib.bullet2_2(), 3);

	// bullet3
	this.b3 = new lib.bullet3_2();
	this.b3.setTransform(970,385.5);
	new cjs.ButtonHelper(this.b3, 0, 1, 2, false, new lib.bullet3_2(), 3);

	// bullet chosen
	this.bullet_chosen = new lib.bullet_chosen();
	this.bullet_chosen.setTransform(892.5,386.5);

	// scrollAreas
	this.dsr = new lib.dragstrip();
	this.dsr.setTransform(652.2,383.9);
	this.dsr.alpha = 0;

	this.dsl = new lib.dragstrip();
	this.dsl.setTransform(368.2,383.9);
	this.dsl.alpha = 0;

	// match_button 
	this.match_btn = new lib.match_button();
	this.match_btn.setTransform(511,715.5);
	new cjs.ButtonHelper(this.match_btn, 0, 1, 2, false, new lib.match_button(), 3);

	// top
	this.instance = new lib.circle();

	// right mak (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egn/A7/MAAAh39MBP/AAAMAAAB39g");
	mask.setTransform(768,384);

	// right bullet
	this.right = new lib.right();
	this.right.setTransform(1255,384);

	this.right.mask = mask;

	// left mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Egn/A7/MAAAh39MBP/AAAMAAAB39g");
	mask_1.setTransform(256,384);

	// left bullet
	this.left = new lib.left();
	this.left.setTransform(505,401);

	this.left.mask = mask_1;

	// black_bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+g");
	this.shape.setTransform(512,384);

	this.addChild(this.shape,this.left,this.right,this.instance,this.match_btn,this.dsl,this.dsr,this.bullet_chosen,this.b3,this.b2,this.b1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1655,768);


// symbols:
(lib.bullet1 = function() {
	this.initialize(img.bullet1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,91);


(lib.bullet2 = function() {
	this.initialize(img.bullet2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,91);


(lib.bullet3 = function() {
	this.initialize(img.bullet3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,91);


(lib.Buton_3_selected = function() {
	this.initialize(img.Buton_3_selected);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,119);


(lib.BUTTONS_1Selected = function() {
	this.initialize(img.BUTTONS_1Selected);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,119);


(lib.BUTTONS_2_selected = function() {
	this.initialize(img.BUTTONS_2_selected);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,119);


(lib.BUTTONS_unselected = function() {
	this.initialize(img.BUTTONS_unselected);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,233,119);


(lib.circle = function() {
	this.initialize(img.circle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.MATCHBUTTON_OFF = function() {
	this.initialize(img.MATCHBUTTON_OFF);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,61);


(lib.MATCH_BUTTON_ON = function() {
	this.initialize(img.MATCH_BUTTON_ON);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,61);


(lib.S0904 = function() {
	this.initialize(img.S0904);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.S1103 = function() {
	this.initialize(img.S1103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.U1006 = function() {
	this.initialize(img.U1006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.u6_doctored2 = function() {
	this.initialize(img.u6_doctored2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,600);


(lib.right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.u6_doctored2();
	this.instance.setTransform(-399.9,-299.9);

	this.instance_1 = new lib.S0904();
	this.instance_1.setTransform(-399.9,-299.9);

	this.instance_2 = new lib.S1103();
	this.instance_2.setTransform(-399.9,-299.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-399.9,-299.9,800,600);


(lib.match_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// match text copy
	this.text = new cjs.Text("MATCH \n", "34px Avenir", "#FFFFFF");
	this.text.lineHeight = 10;
	this.text.lineWidth = 116;
	this.text.setTransform(-30.9,-14.6,0.5,0.5);

	this.text_1 = new cjs.Text("MATCH \n", "34px Avenir Book", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 280;
	this.text_1.setTransform(69,-14.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).to({state:[{t:this.text_1}]},3).wait(1));

	// Layer 4
	this.instance = new lib.MATCHBUTTON_OFF();
	this.instance.setTransform(-48.9,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).wait(2));

	// Layer 3
	this.instance_1 = new lib.MATCH_BUTTON_ON();
	this.instance_1.setTransform(-48.9,-33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.9,-33.4,98,61);


(lib.left = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.U1006();
	this.instance.setTransform(-399.9,-299.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-399.9,-299.9,800,600);


(lib.dragstrip = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("EAWMAtoMgsXAAAMAAAhbPMAsXAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(172,172,172,0.227)").s().p("EgWLAtoMAAAhbPMAsXAAAMAAABbPg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-141.9,-292,284,584.2);


(lib.bullet3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bullet3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,91);


(lib.bullet2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bullet2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,91);


(lib.bullet1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bullet1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,91);


(lib.bullet_chosen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BUTTONS_unselected();
	this.instance.setTransform(-116.4,-59.4);

	this.instance_1 = new lib.BUTTONS_1Selected();
	this.instance_1.setTransform(-116.4,-59.4);

	this.instance_2 = new lib.BUTTONS_2_selected();
	this.instance_2.setTransform(-39.4,-59.4);

	this.instance_3 = new lib.Buton_3_selected();
	this.instance_3.setTransform(38.5,-59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).to({state:[{t:this.instance},{t:this.instance_2}]},1).to({state:[{t:this.instance},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.4,-59.4,233,119);


(lib.bullet3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bullet3_1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,16,45.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("Al+JSIAAyiIL9AAIAASig");
	this.shape.setTransform(0.8,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-45.4,32,91);


(lib.bullet2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bullet2_1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,16.5,45.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("Al+JRIAAyiIL9AAIAASig");
	this.shape.setTransform(-0.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-45.4,33,91);


(lib.bullet1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.bullet1_1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,16,45.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF33").s().p("Al+JSIAAyiIL9AAIAASig");
	this.shape.setTransform(-2.6,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape},{t:this.instance_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-45.4,32,91);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;