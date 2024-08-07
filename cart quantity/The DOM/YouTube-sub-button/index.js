let subEL = document.getElementById('sub-el')
function subscribeButton() {
    if (subEL.innerHTML === 'Subscribe') {
        subEL.innerHTML = 'Subscribed'
    } else {
        subEL.innerHTML = "Subscribe";
    }
}