const SeeMore = document.querySelector('.cbut');
const BgSare = document.querySelectorAll('.bg-img');
const Bglenght = BgSare.length;
let index = 0;

SeeMore.addEventListener('click', () => {
    BgSare.forEach((bg)=>{
        if(bg.classList.contains('active')){
            bg.classList.add('after-active');
        } else {
            bg.classList.remove('after-active');
        }
    })
    BgSare[index].classList.remove('active');
    index++;

    if(index === Bglenght){
        index = 0;
    }
    BgSare[index].classList.add('active');
});
