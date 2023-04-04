/*******MENU SHOW****/
const showMEnu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
	nav = document.getElementById(navId)



	if (toggle && nav){
		toggle.addEventListener('click', ()=>{
			nav.classList.toggle('show')
		})
	}
}

showMEnu('nav-toggle','nav-menu')


/*******ACTIVE****/
const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
navLink.forEach(n => n.classList.remove('active'))
this.classList.add('active')


/****remove menu after click ****/
const navMenu = document.getElementById('nav-menu')
navMenu.classList.remove('show')
}


navLink.forEach(n => n.addEventListener('click', linkAction))


/*********SCROLL REVEAL ANIMATION****/

const sr = ScrollReveal({
	distance: '110px',
	duration: 2000,
	reset: false
})

sr.reveal('.home_title',{origin: 'left'})
sr.reveal('.text',{delay:200, scale:'0.01'})
sr.reveal('.button',{delay:400, origin:'left'})
sr.reveal('.home_img',{delay:400, origin:'top'})

/**services**/
sr.reveal('.services-col',{ interval:900, delay:'400', opacity:'0', scale:'-.1'})
sr.reveal('.about_content',{delay:200, origin:'left'})



/**about**/
sr.reveal('.feature',{ scale:'.1', opacity:'0', interval:600})
sr.reveal('.about_content',{delay:200, origin:'left'})


/******work approach*****/
sr.reveal('.block,.choose_col',{interval:900, scale:'.1', delay:400,})
sr.reveal('.work_btn',{scale:'.1', delay:400,})


/******Blog*****/
sr.reveal('.blog_col',{interval:400, scale:'.1', delay:100,})
sr.reveal('.work_btn',{scale:'.1', delay:400,})
