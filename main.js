const btn = document.querySelector('.j-btn-test');


var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var path1 = document.createElementNS("http://www.w3.org/2000/svg", 'path');


svg.setAttribute("aria-hidden","true");
svg.setAttribute('viewbox', '0 0 16 16');
svg.setAttribute('width', '16px');
svg.setAttribute('height', '16px');

path1.setAttribute('d', "M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z");
path1.setAttribute('fill', 'currentColor');
svg.appendChild(path1);

btn.addEventListener('click', () => {
 document.getElementById('rem').replaceWith(svg);
});