/* Aggrandissement du texte au passage de la souris (utilisé pour les boutons de navigation en bas de page) */
function sublime(element) {
    let nextNumber = element.getAttribute("data-number");
    let paragraph = document.querySelector('.next[data-number="' + nextNumber + '"] p');
    paragraph.classList.add("textHover")
}

function unsublime(element) {
    let nextNumber = element.getAttribute("data-number");
    let paragraph = document.querySelector('.next[data-number="' + nextNumber + '"] p');
    paragraph.classList.remove("textHover")
}

// Permet de copier le mail
function copyMail(){
    let mail = document.querySelector(".mail");

    /* Select the text field */
    mail.select();
    mail.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Mail copié !");
}


// Permet d'afficher le mail ou de le faire disparaitre
function displayMail(){
    let mail = document.querySelector('.mail');
    mail.style.opacity = "1";
    mail.style.transform = "translateY(-300%)"
}

function hideMail(){
    let mail = document.querySelector('.mail');
    mail.style.opacity = "0";
    mail.style.transform = "translateY(0%)"
}

// Permet d'afficher des informations supplémentaire sur le langage/framework en cours d'apprentissage
function expandLearning(){
    let learningInfo = document.querySelector('.learning_info');
    let learningSkill = document.querySelector('.skill_learning .skill_block');
    let learningText = document.querySelector('.learning_info p');
    learningInfo.style.width = "15rem";
    learningSkill.style.borderRadius = "25% 0 0 25%"
    learningText.style.opacity = "1";
    starGrade(learningSkill);
}

function shrinkLearning(){
    let learningInfo = document.querySelector('.learning_info');
    let learningSkill = document.querySelector('.skill_learning .skill_block');
    let learningText = document.querySelector('.learning_info p');

    learningText.style.opacity = "0";
    setTimeout(() => {
        learningInfo.style.width = "0";
        learningSkill.style.borderRadius = "25%"
    }, 250);

    showLogo(learningSkill)
}

/* Change le logo du langage/framework en étoile au passage de la souris */
function starGrade(element) {
    let iconNumber = element.getAttribute("data-number");
    console.log("enter " + iconNumber)

    /* Cache le logo */
    let logo = document.querySelector('.skill_block[data-number="' + iconNumber + '"] .logo');
    logo.style.transform = "translateY(-50%)"
    logo.style.opacity = "0"

    /* Affiche la maitrise */
    let mastery = document.querySelector('.skill_block[data-number="' + iconNumber + '"] .mastery');
    mastery.style.transform = "translateY(0)"
    mastery.style.opacity = "1" 
}

function showLogo(element) {
    let iconNumber = element.getAttribute("data-number");
    console.log("leave " + iconNumber)

    /* Affiche le logo */
    let logo = document.querySelector('.skill_block[data-number="' + iconNumber + '"] .logo');
    logo.style.transform = "translateY(0)"
    logo.style.opacity = "1" 

    /* Cache la maitrise */
    let mastery = document.querySelector('.skill_block[data-number="' + iconNumber + '"] .mastery');
    mastery.style.transform = "translateY(50%)"
    mastery.style.opacity = "0"
}