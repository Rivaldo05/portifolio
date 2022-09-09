let skills = [
    {lang : "Python", direcao_anime : "left", nivel: "Básico" , imgName: "Imagens/python.png"},
    {lang :"Html", direcao_anime: "righ", nivel: "Avançado", imgName: "Imagens/html5.png"},
    {lang : "Css", direcao_anime: "left", nivel: "Avançado" , imgName: "Imagens/css.png"},
    {lang : "JavaScript" , direcao_anime: "righ", nivel: "Intermediário" , imgName:"Imagens/javascript.png"},
    {lang : "React.js" , direcao_anime: "left", nivel: "Básico" , imgName:"Imagens/React.png"},
    {lang : "C#" , direcao_anime: "righ", nivel: "Básico" , imgName:"Imagens/c.png"}
];

const select = (el)=> document.querySelector(el)
const selectall = (el)=> document.querySelectorAll(el)
const classAnimate = "animate"

skills.map((lang, langIndex) => {
    SkillArea  = document.createElement('div')
    SkillArea.classList.add('conteinerImg')
    SkillArea.setAttribute("data-anim", `${lang.direcao_anime}`)
    conteiner = `
      <img src="${lang.imgName}" alt="${lang.lang}">
      <span class="lang-name">${lang.lang} - ${lang.nivel}</span>
    `
    SkillArea.innerHTML = conteiner
    conteinerSkill = select('.conteinerSkills').append(SkillArea)
})

const dataAtributes = selectall('[data-anim]')

function animeScrool(){
  const alturaTela = window.scrollY + ((window.innerHeight * 3)/3)

  dataAtributes.forEach((elemento_data)=>{
    if (alturaTela > elemento_data.offsetTop){
      elemento_data.classList.add(classAnimate)
    }else{
      elemento_data.classList.remove(classAnimate)
    }
  })
}

// função loaddash pega da internet
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


animeScrool()
if(dataAtributes.length){
    window.addEventListener('scroll',
    debounce(()=>{
    animeScrool()
  },100)
)}
