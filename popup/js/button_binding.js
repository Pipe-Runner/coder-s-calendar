// binding refresh functions to element
document.getElementById('refresh').addEventListener('click', refresh);

// menu control bindings
document.getElementById('back').addEventListener('click', back);
document.getElementById('codeforces-main').addEventListener('click', changeMenu(2, "CODEFORCES"));
document.getElementById('hackerrank-main').addEventListener('click', changeMenu(2, "HACKERRANK"));
document.getElementById('codechef-main').addEventListener('click', changeMenu(2, "CODECHEF"));
document.getElementById('hackerearth-main').addEventListener('click', changeMenu(2, "HACKEREARTH"));