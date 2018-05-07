
document.addEventListener("DOMContentLoaded",function(){
		// code go here
		
	
	},false);	

$(document).ready(function(){


	var x = 'iphone,android,snapchat';
	//console.log(x.indexOf(','));
	var y = x.split('');
	console.log(y.toString().trim(','));
	for (var i = 0; i < x.length; i++) {
		if(x[i].indexOf(',')){
			console.log('true');
		}else{
			console.log('false');
		}
		
	}


	




	//code go here
	wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();

	
	var btns = document.querySelectorAll(".buttons button");
	var cat = document.getElementsByClassName("cat")[0];

	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener('click',manageCatClasses);
	}

	function manageCatClasses(){
		// console.log(cat.classList.contains('blue-eyes'));
		// var haveBlueEyes = cat.classList.contains('blue-eyes');
		// if(!haveBlueEyes) {
		// 	cat.classList.add('blue-eyes');
		// }else{
		// 	cat.classList.remove('blue-eyes');
		// }
		


		if(this.hasAttribute('data-add')){
			cat.classList.add(this.getAttribute('data-add'));
		}

		if(this.hasAttribute('data-remove')){
			cat.classList.remove(this.getAttribute('data-remove'));
		}

		//console.log(this.hasAttribute('data-add'));
		//console.log(this.getAttribute('data-add'));
	}

})
