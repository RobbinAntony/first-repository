const hamburger = document.querySelector(".sticky .header .side_nav_button .black .contain")
const side_nav = document.querySelector(".body .side_nav")
const content = document.querySelector(".content")





hamburger.addEventListener('click',() => {
     hamburger.classList.toggle('active');
     side_nav.classList.toggle('side_nav2');
     content.classList.toggle('content2');

})
//window.addEventListener("load",() =>{
 // side_nav.classList.add('side_nav3')
//})






const observer = new IntersectionObserver(entries => { 
     entries.forEach(entry => {
          const html = entry.target.querySelector('.percentage_html');
   
       if (entry.isIntersecting) {
         html.classList.add('percentage_htmlx');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       html.classList.remove('percentage_htmlx');

     });
   });
   
   observer.observe(document.querySelector('.square-wrapper'));



   const observes = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const css = entry.target.querySelector('.percentage_css');
   
       if (entry.isIntersecting) {
         css.classList.add('percentage_cssx');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       css.classList.remove('percentage_cssx');

     });
   });
   
   observes.observe(document.querySelector('.square-wrappe'));



   const observ = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const jsx = entry.target.querySelector('.percentage_js');
   
       if (entry.isIntersecting) {
         jsx.classList.add('percentage_jsx');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       jsx.classList.remove('percentage_jsx');

     });
   });
   
   observ.observe(document.querySelector('.square-wrapp'));



   const obser = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const bs = entry.target.querySelector('.percentage_bs');
   
       if (entry.isIntersecting) {
         bs.classList.add('percentage_bsx');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       bs.classList.remove('percentage_bsx');

     });
   });
   
   obser.observe(document.querySelector('.square-wrap'));
   

   const viewer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const python = entry.target.querySelector('.percentage_python');
   
       if (entry.isIntersecting) {
         python.classList.add('percentage_pythonx');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       python.classList.remove('percentage_pythonx');

     });
   });
   
   viewer.observe(document.querySelector('.square-wra'));


   const views = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const django = entry.target.querySelector('.percentage_django');
   
       if (entry.isIntersecting) {
         django.classList.add('percentage_djangox');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       django.classList.remove('percentage_djangox');

     });
   });
   views.observe(document.querySelector('.square-wr'));

   const gp = new IntersectionObserver(entries => {
    entries.forEach(entry => {
         const gimp = entry.target.querySelector('.percentage_gimp');
  
      if (entry.isIntersecting) {
        gimp.classList.add('percentage_gimpx');
         return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      gimp.classList.remove('percentage_gimpx');

    });
  });
  gp.observe(document.querySelector('.gimp-wrapper'));

  const se = new IntersectionObserver(entries => {
    entries.forEach(entry => {
         const seo = entry.target.querySelector('.percentage_seo');
  
      if (entry.isIntersecting) {
        seo.classList.add('percentage_seox');
         return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      seo.classList.remove('percentage_seox');

    });
  });
  se.observe(document.querySelector('.seo-wrapper'));





   const photo = new IntersectionObserver(entries => {
     entries.forEach(entry => {
          const about_photo = entry.target.querySelector('.about_photo');
   
       if (entry.isIntersecting) {
         about_photo.classList.add('about_photo1');
          return; // if we added the class, exit the function
       }
   
       // We're not intersecting, so remove the class!
       about_photo.classList.remove('about_photo1');

     });
   });
   photo.observe(document.querySelector('.photo_container'));



   const servic = new IntersectionObserver(entries => {
    entries.forEach(entry => {
         const services = entry.target.querySelector('.services_container .common_container .common')
         const services2 = entry.target.querySelector('.services_container .common_container .common2')
         const services3 = entry.target.querySelector('.services_container .common_container .common3')
         const services4 = entry.target.querySelector('.services_container .common_container .common4')
  
  
      if (entry.isIntersecting) {
        services.classList.add('common1');
        services2.classList.add('common1');
        services3.classList.add('common1');
        services4.classList.add('common1');
        
 
         return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      services.classList.remove('common1');
      services2.classList.remove('common1');
      services3.classList.remove('common1');
      services4.classList.remove('common1');

    });
  });
  servic.observe(document.querySelector('.services_container'));


   
