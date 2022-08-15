const headings = document.querySelectorAll('h2');
for(const heading of headings){
    heading.style.color = 'lightblue';
}


const bagPacks = document.querySelectorAll('#bagpack');
for(const bagPack of bagPacks){
    bagPack.style.backgroundColor = 'tomato';
}

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

const backPackButton = document.getElementById('backpack');
backPackButton.onclick = backpack;
function backpack(){
    document.body.style.backgroundColor = 'yellow';
}

/* document.getElementById('backpack').addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
}) */

// const buttons = document.getElementsByClassName('btn');
// for(const button of buttons){
//     button.addEventListener('click', function(event){
//         console.log(event.target.parentNode);
//         event.target.parentNode.removeChild(event.target);
//     })
// }


document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    text = event.target.value;
    const disableButton = document.getElementById('disable-btn');
    if( text === 'email'){
        disableButton.removeAttribute('disabled');
    }
    else{
        disableButton.setAttribute('disabled');
    }
})


