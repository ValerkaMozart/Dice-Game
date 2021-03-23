let name1 = document.querySelector('.first'),
    name2 = document.querySelector('.second'),
    submit = document.querySelector('.sub'),
    button = document.querySelector('.button'),
    form = document.querySelector('.form'),
    textWinner = document.querySelector('.text'),
    winner = document.querySelector('.winner');

let dice_1 = document.querySelector('.dice_1'),
    dice_2 = document.querySelector('.dice_2'), 
    dice_3 = document.querySelector('.dice_3'),  
    dice_4 = document.querySelector('.dice_4');      
    let firstName = '';
    let secondName = '';
form.addEventListener ('submit' , function (evt) {
    evt.preventDefault()
    firstName = name1.value;
    secondName = name2.value;
    submit.style.opacity = 0;
    button.style.opacity = 1;
    alert(`Ход игрока ${firstName}! Бросок осуществляется по-очереди! У игрока по два броска!`)
    return firstName, secondName;
})
let dice_position = {
        one: '-184px -210px',
        two: '-175px -124px',
        three: ' -164px -35px',
        fofth: '-84px -210px',
        five: ' -95px -124px',
        six: ' -84px -35px'
    }
let points = {
        one: 1,
        two: 2,
        three: 3,
        fofth: 4,
        five: 5,
        six: 6
    }   
    function random () {
        let arr = ['one','two','three','fofth','five','six'];
        let rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }        



let current = 0,
    firstPoints = 0,
    secondPoints = 0;
button.addEventListener ('click' ,function () {
    current++;
    console.log(current)
    if (current == 1) { 
        let rand = random();
        dice_1.style.backgroundPosition = dice_position[rand]; 
        dice_1.classList.add('dice_1_active')
        firstPoints += points[rand]
    }
    if (current == 2) {
        let rand = random();
        dice_2.style.backgroundPosition = dice_position[rand]; 
        dice_2.classList.add('dice_2_active')
        firstPoints += points[rand]
    }  
    if (current == 3) {
        alert("ТОРМОЗИ, родной, пусть Братка бросит!")
    }
    if (current == 4) { 
        let rand = random();
        dice_3.style.backgroundPosition = dice_position[rand]; 
        dice_3.classList.add('dice_3_active')
        secondPoints += points[rand]
    }  
    if (current == 5) { 
        let rand = random();
        dice_4.style.backgroundPosition = dice_position[rand]; 
        dice_4.classList.add('dice_4_active')
        secondPoints += points[rand]

        setTimeout ( () => {
            winner.style.display = 'inline-block';
            if (firstPoints > secondPoints) {
                textWinner.textContent = 'Победил '+ firstName + ', с количеством очков ' + firstPoints + '!';
            }
            else if (firstPoints < secondPoints) {
                textWinner.textContent = 'Победил ' + secondName + ', с количеством очков ' + secondPoints + '!';
            } 
            else if (firstPoints == secondPoints) {
                textWinner.textContent = 'Это поразительно, у Вас ничья!!!'
            }
        } , 2000)
    }
})




