let skills = [
    {lang : "Python", porcent: 60, imgName: "Imagens/python.png"},
    {lang :"Html", porcent: 80, imgName: "Imagens/html5.png"},
    {lang : "Css", porcent: 70, imgName: "Imagens/css.png"},
    {lang : "JavaScript" , porcent: 30, imgName:"Imagens/javascript.png"}
];

const select = (el)=> document.querySelector(el)
const selectall = (el)=> document.querySelectorAll(el)

skills.map((lang, langIndex) => {
    /*SkillArea = select('.conteinerImg').cloneNode(true);/* o obj a ser clonado tem que estar em uma area que não interfira bo doc*/
    SkillArea  = document.createElement('div')
    SkillArea.classList.add('conteinerImg')
    conteiner = `
        <img src="${lang.imgName}" alt="${lang.lang}">
        <span class="lang-name">${lang.lang}</span>
    `

    SkillArea.innerHTML = conteiner

    conteinerSkill = select('.conteinerSkills').append(SkillArea)
})

        /* ANIMAÇÃO DA BARRA DE PROGRESSO */
setTimeout(() => {
   progressBar = selectall('.progress .porcentProgress')
    for(i=0; i<progressBar.length; i++){
        progressBar[i].style.width = `${skills[i].porcent}%`
    }
    }, 100);


  
    
     