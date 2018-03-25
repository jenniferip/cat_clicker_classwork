var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: "Ronny",
			imgSrc: "images/434164568_fea0ad4013_z.jpg",
			imgAttribution: "https://www.google.com"
		},
		{
            clickCount : 0,
            name : 'Tiger',
            imgSrc : 'imgages/4154543904_6e2428c421_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904'
        },
        {
            clickCount : 0,
            name : 'Scaredy',
            imgSrc : 'imgages/22252709_010df3379e_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709'
        },
        {
            clickCount : 0,
            name : 'Shadow',
            imgSrc : 'imgages/1413379559_412a540d29_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379559'
        },
        {
            clickCount : 0,
            name : 'Sleepy',
            imgSrc : 'imgages/9648464288_2516b35537_z.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288'
        }
	]
};

var octopus = {

	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
};

var catView = {

	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function(e) {
			octopus.incrementCounter();
		});

		this.render();
	},

	render: function() {
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;

	}
};

var catListView = {

	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function() {
		var cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for (var i = 0; i < cats.length; i++) {
			var cat = cats[i];

			var elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(cat) {
				return function() {
					octopus.setCurrentCat(cat);
					catView.render();
				}
			})(cat));
		
			this.catListElem.appendChild(elem);
		};
	}
};

octopus.init();
