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
	origin: 'left',
	distance: '120px',
	duration: 2000,
	reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200, origin:'top'})
sr.reveal('.home_img',{delay:400, origin:'top'})


/*SKILLS*/
sr.reveal('.skills_subtitle',{ origin:'top'})
sr.reveal('.skills_content',{delay:200, origin:'left'})
sr.reveal('.skills_data',{interval:400})


/******PROJECT*****/
sr.reveal('.work_img',{interval:400, origin:'top'})

/**about**/
sr.reveal('.about_img',{origin:'left'})
sr.reveal('.about_subtitle',{delay:200, origin:'top'})
sr.reveal('.about_content',{delay:200, origin:'left'})


/******CONTACT*****/
sr.reveal('.contact_input',{interval:400, origin:'top'})

