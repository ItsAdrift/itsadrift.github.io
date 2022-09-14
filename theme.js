var themeToggle = document.getElementById("checked-toggle");
if (localStorage.theme == 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    themeToggle.setAttribute('checked', "");
}
themeToggle.onclick = function() {
    if (localStorage.theme != 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
}