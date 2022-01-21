let skills = [
    {lang : "Python", direcao_anime : "left", imgName: "Imagens/python.png"},
    {lang :"Html", direcao_anime: "righ", imgName: "Imagens/html5.png"},
    {lang : "Css", direcao_anime: "left", imgName: "Imagens/css.png"},
    {lang : "JavaScript" , direcao_anime: "righ", imgName:"Imagens/javascript.png"}
];

const select = (el)=> document.querySelector(el)
const selectall = (el)=> document.querySelectorAll(el)

skills.map((lang, langIndex) => {
    /*SkillArea = select('.conteinerImg').cloneNode(true);/* o obj a ser clonado tem que estar em uma area que não interfira bo doc*/
    SkillArea  = document.createElement('div')
    SkillArea.classList.add('conteinerImg')
    SkillArea.setAttribute("data-anim", `${lang.direcao_anime}`)
    conteiner = `
      <img src="${lang.imgName}" alt="${lang.lang}">
      <span class="lang-name">${lang.lang}</span>
    `
    SkillArea.innerHTML = conteiner
    conteinerSkill = select('.conteinerSkills').append(SkillArea)
})

