$(document).ready(function(){


	$("#tab2, #tab3, #tab4").hide();
	$("#first").addClass("active")
	$('.information').on('click','a', function(e){
		e.preventDefault();
		$('.information a').removeClass('active');
		$(this).addClass('active');
		$(this.hash).show().siblings().hide();
	})

	const container1 = document.querySelector("#apps")

	var appTemplate = ""


	menu.appetizers.forEach(function(item){
		

		appTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
							<li> </li>
						</ul>
						<ul class="details">
							<li>
								<div class="allergy">
								<i class="fas fa-exclamation"></i>
								<span class="allergyinfo">${item.extra.hasOwnProperty('allergy') && item.extra.allergy ? 'This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.' : 'Allergy-safe'} </span>
								</div>
							</li>
							<li>
							</li>
							<li>
								<div class="spicy">
									<i class="fab fa-hotjar"></i>
									<span class="spiceinfo">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? 'This item is spicy, please handle with care and drink lots of water.' : 'Contains no spice.'}</span>
								</div>
							</li>
							<li>
								<div class="vegan">
									<i class="fas fa-leaf"></i>
									<span class="veganinfo">${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? 'This item contains no meat and has been prepared without the use of animal products.' : 'Contains meat or other animal byproducts'}</span>
								</div>
							</li>
						</ul>
						`
	})

	container1.innerHTML = appTemplate



	const container2 = document.querySelector("#entrees")

	var entreeTemplate = ""

	menu.entrees.forEach(function(item){

		entreeTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
						</ul>
						<ul class="details">
							<li>
								<div class="allergy">
								<i class="fas fa-exclamation"></i>
								<span class="allergyinfo">${item.extra.hasOwnProperty('allergy') && item.extra.allergy ? 'This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.' : 'Allergy-safe'} </span>
								</div>
							</li>
							<li>
								<div class="spicy">
									<i class="fab fa-hotjar"></i>
									<span class="spiceinfo">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? 'This item is spicy, please handle with care and drink lots of water.' : 'Contains no spice.'}</span>
								</div>
							</li>
							<li>
								<div class="vegan">
									<i class="fas fa-leaf"></i>
									<span class="veganinfo">${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? 'This item contains no meat and has been prepared without the use of animal products.' : 'Contains meat or other animal byproducts'}</span>
								</div>
							</li>
						</ul>
						`
	})

	container2.innerHTML = entreeTemplate


	const container3 = document.querySelector("#desserts")

	var dessertTemplate = ""

	menu.desserts.forEach(function(item){

		dessertTemplate += `
						<ul>
							<li>${item.name}........${item.price}</li>
							<li>${item.description}</li>
						</ul>
						<ul class="details">
							<li>
								<div class="allergy">
								<i class="fas fa-exclamation"></i>
								<span class="allergyinfo">${item.extra.hasOwnProperty('allergy') && item.extra.allergy ? 'This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.' : 'Allergy-safe'} </span>
								</div>
							</li>
							<li>
								<div class="spicy">
									<i class="fab fa-hotjar"></i>
									<span class="spiceinfo">${item.extra.hasOwnProperty('spicy') && item.extra.spicy ? 'This item is spicy, please handle with care and drink lots of water.' : 'Contains no spice.'}</span>
								</div>
							</li>
							<li>
								<div class="vegan">
									<i class="fas fa-leaf"></i>
									<span class="veganinfo">${item.extra.hasOwnProperty('vegetarian') && item.extra.vegetarian ? 'This item contains no meat and has been prepared without the use of animal products.' : 'Contains meat or other animal byproducts'}</span>
								</div>
							</li>
						</ul>
						`
	})

	container3.innerHTML = dessertTemplate
})