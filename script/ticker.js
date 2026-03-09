window.addEventListener('scroll', function() {let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;if (height <= 0) return;
let scrolled = (winScroll / height) * 100;document.getElementById("myScrollbar").style.width = scrolled + "%";});