const buttons = Array.from(document.getElementsByClassName('rating'))
const selectedRating = document.getElementById('selected-rating')
let rating = 0

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      let button = btn;
      rating = btn.innerHTML;
      buttons.forEach(btn => btn !== button && btn.classList.remove('selected'));
      button.classList.toggle('selected');
    });
});

function submit() {
    if (rating !== 0) {
        const preCard = document.querySelector('#pre-card');
        const postCard = document.querySelector('#post-card');
        preCard.style.display = 'none'
        postCard.style.display = 'block'
        selectedRating.textContent = rating + " "
    } else {
        window.alert('please select a rating')
    }
}