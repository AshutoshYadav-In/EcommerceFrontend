//Javascript to dynamically fetch header and footer
fetch('./components/header.html')
.then(response => response.text())
.then(data => {
  document.getElementById('header').innerHTML = data;
})
.catch(error => {
  console.error('Error fetching header:', error);
});
fetch('./components/footer.html')
.then(response => response.text())
.then(data => {
  document.getElementById('footer').innerHTML = data;
})
.catch(error => {
  console.error('Error fetching header:', error);
});


