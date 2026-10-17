(function(){var d=document,h=d.documentElement;h.classList.add('js');
var b=d.querySelector('.menu-btn'),n=d.getElementById('nav');
function m(o){if(!b||!n)return;b.setAttribute('aria-expanded',String(o));n.classList.toggle('is-open',o)}
if(b&&n){b.addEventListener('click',function(){m(b.getAttribute('aria-expanded')!=='true')});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&b.getAttribute('aria-expanded')==='true'){m(false);b.focus()}});
n.addEventListener('click',function(e){if(e.target.closest('a'))m(false)})}
var io='IntersectionObserver'in window,sc=d.querySelector('.sticky-cta'),hr=d.querySelector('.hero');
if(sc){if(io&&hr){new IntersectionObserver(function(e){sc.classList.toggle('is-hidden',e[0].isIntersecting)}).observe(hr)}else sc.classList.remove('is-hidden')}
var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches,s=d.querySelectorAll('main .sec');
if(!io||rm)return;var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-in');o.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
s.forEach(function(x){var r=x.getBoundingClientRect();if(r.top>innerHeight){x.classList.add('rv');o.observe(x)}});
addEventListener('beforeprint',function(){s.forEach(function(x){x.classList.add('is-in')})})})();
