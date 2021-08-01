const GUEST_LIST = [
    { name: 'Leonard', count: 6 },
    { name: 'Sharon', count: 4 }
  ];

function buildGuestCard(guest) {
    return `<div class="guest-card">
    <span>${guest.name}, party of ${guest.count}</span>
    </div>`
}

function renderGuestList() {
    $('.guest-list').empty();
    GUEST_LIST.forEach(function (guest, count) {
       let newGuest = buildGuestCard(guest)
       $('.guest-list').append(newGuest)
    });
}


function addGuestToList(event) {
    event.preventDefault()
    // let add = Object.create(buildGuestCard)
    // event.push(add)
    let guest = {
      count:  $('#guest-count').val(), 
      name: $('#guest-name').val()
 }
    GUEST_LIST.push(guest)
    renderGuestList()
    $('.guest-form').trigger('reset')
}

$('.guest-form').submit(addGuestToList);
renderGuestList()

function serveNextGuest() {
    GUEST_LIST.shift()
    renderGuestList()
}

$('#serve').click(serveNextGuest);