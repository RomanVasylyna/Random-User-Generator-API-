$(document).ready(() => {

//Generate Random User
getUser();

//Reloading Page Event
$('#userBtn').on('click', () => location.reload());


//Generate Random User Object with AXIOS
function getUser() {
axios
.get(`https://randomuser.me/api/`)
.then(response => {
let users = response.data.results[0];
console.log(users);
$('#userPhoto').attr('src', users.picture.large);
$('#name').text(users.name.first);
$('#surname').text(users.name.last);
getBtn(users);
})
.catch(error => console.log(error));
}


//Clicking Each Icon
function getBtn(users) {
let btns = $('i');
$.each(btns, (i , elem) => {
elem.addEventListener('click', function() {

if($(this).hasClass('fa-user-o')) {
addCustomText('My name is',  users.name.first, users.name.last);
removeClass();
$(this).addClass('active');
}

if($(this).hasClass('fa-envelope-open-o')) {
addCustomText('My email is',  users.email);
$('#surname').empty();
removeClass();
$(this).addClass('active');

} if($(this).hasClass('fa-calendar')) {
addCustomText('My age is',  users.dob.age);
$('#surname').empty();
removeClass();
$(this).addClass('active');

} if($(this).hasClass('fa-map-o')) {
addCustomText('My street is',  users.location.street.number,users.location.street.name);
removeClass();
$(this).addClass('active');

} if($(this).hasClass('fa-phone')) {
addCustomText('My phone is',  users.phone);
$('#surname').empty();
removeClass();
$(this).addClass('active');

} if($(this).hasClass('fa-unlock-alt')) {
addCustomText('My password is',  users.login.password);
$('#surname').empty();
removeClass();
$(this).addClass('active');
}

})
})
}

//Adding Text to Form
function addCustomText(text, elem1, elem2) {
  $('.userP').text(text);
  $('#name').text(elem1);
  $('#surname').text(elem2);
}


//Removing Active Class from icons
function removeClass() {
let btns = $('i');
for(let i = 0; i < btns.length; i++) {
btns[i].classList.remove('active');
}
}







})
