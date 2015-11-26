var Question = function(dict){
	this.question = dict.question;
	this.img1 = dict.img1;
	this.img2 = dict.img2;
	this.child1 = dict.child1;
	this.child2 = dict.child2;

	this.render = function(page_elems){

		// randomly changing which image is on top
		this.prob = Math.random();
			page_elems.img1.append("<img src='" + this.img1 + "' class=''/>");
			page_elems.img2.append("<img src='" + this.img2 + "' class=''/>");

		page_elems.img1.addClass("flyIn");
		page_elems.img2.addClass("flyIn");

		// wait and then remove the classes so
		// the animation can play back on the next matchup
		setTimeout(function(){
			page_elems.img1.removeClass("outTop");
			page_elems.img2.removeClass("outBottom");
			page_elems.img1.removeClass("flyIn");
			page_elems.img2.removeClass("flyIn");
		}, 300);

		// ---------- Timer Code ----------
		for(int i = 5; i>0; i++)
		{			
			window.setTimeout(function(i){
				page_elems.timer.text(i.toString());
				console.log(i);
			}, 1000*i);
		}

	};
}