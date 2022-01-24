const cookieConfig = {
    name:'TmeEPrivacy',
    age:'31536000',
    cookies:{
        necesarias:true,
        rendimiento:false,
        funcionales:false,
        targeting:false

    }
}
 
function openModalCookies(){
   
    document.querySelector(`.modal-cookies`).style.display="flex";
    document.querySelector('.modal-cookies #boton-cookies-seleccionadas').style.display="none";
    document.querySelector('.modal-cookies #boton-todas-cookies').style.display="block";
}

function closeModalCookies(){

    document.querySelector(`.modal-cookies`).style.display="none";
    document.querySelector('.modal-cookies .list-checkboxes').style.display="none";
}

function addModalCookies(){
    let htmlModal=document.querySelector('.modal-cookies-base').innerHTML;
    document.querySelector('body').innerHTML+=`<div style="display:none" class="modal-cookies"><div class="modal-cookies-contenido">${htmlModal}</div></div>`;
}

function openConfig(){
    document.querySelector('.modal-cookies #boton-cookies-seleccionadas').style.display="block";
    document.querySelector('.modal-cookies #boton-todas-cookies').style.display="none";
   document.querySelector('.modal-cookies .list-checkboxes').style.display="block";
   document.querySelector('.modal-cookies .list-checkboxes input[name="10"]').checked=cookieConfig.cookies.necesarias;
   document.querySelector('.modal-cookies .list-checkboxes input[name="20"]').checked=cookieConfig.cookies.rendimiento
   document.querySelector('.modal-cookies .list-checkboxes input[name="30"]').checked=cookieConfig.cookies.funcionales
   document.querySelector('.modal-cookies .list-checkboxes input[name="40"]').checked=cookieConfig.cookies.targeting

    

}

function setSelectedCookies(){
    deleteCookie()
    document.querySelectorAll('.modal-cookies .list-checkboxes input[type=checkbox]').forEach(node=>{
      
            setCookie(node.name,node.checked);
        
    });
}

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); 
    const cArr = cDecoded .split('; ');
    let res;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res;
}

function existCookie(){
    return document.cookie.includes(cookieConfig.name) ;
}

function startCookie(){
    if (!existCookie())
        openModalCookies();

    setCookieConfig();
    if(cookieConfig.cookies.rendimiento)
        addTagManager();
}

function setAllCookies(){
    deleteCookie()
    document.cookie = `${cookieConfig.name}=10203040;max-age=${cookieConfig.age}`;
    cookieConfig.cookies.necesarias=true;
    cookieConfig.cookies.rendimiento=true;
    cookieConfig.cookies.funcionales=true;
    cookieConfig.cookies.targeting=true;
    addTagManager();
}

function setCookie(name,value){
    if(value)
    document.cookie=`${cookieConfig.name}=${createStringCookie(name)};max-age=${cookieConfig.age}`;
    switch(name){
        case '10':cookieConfig.cookies.necesarias=value ;break;
        case '20':cookieConfig.cookies.rendimiento=value ; break;
        case '30':cookieConfig.cookies.funcionales=value ;break;
        case '40':cookieConfig.cookies.targeting=value ;break;
    }
    if (cookieConfig.cookies.rendimiento)
            addTagManager();
}

function setCookieConfig(){
    resetCookieConfig();
    let arrayValues=(getCookie(cookieConfig.name)||"").match(/.{1,2}/g)||[];
    arrayValues=arrayValues.sort((a, b) => a - b)
    arrayValues.forEach(value=>{
        switch(value){
            case '10':cookieConfig.cookies.necesarias=true ;break;
            case '20':cookieConfig.cookies.rendimiento=true  ;break;
            case '30':cookieConfig.cookies.funcionales=true  ;break;
            case '40':cookieConfig.cookies.targeting=true ;break;
        }
    })
}
function resetCookieConfig(){
    cookieConfig.cookies.necesarias=true 
   cookieConfig.cookies.rendimiento=false  
    cookieConfig.cookies.funcionales=false 
    cookieConfig.cookies.targeting=false 
}
function createStringCookie(value){
    
    let arrayValues=(getCookie(cookieConfig.name)||"").match(/.{1,2}/g)||[];
    arrayValues.push(value);
    arrayValues=[...new Set(arrayValues.sort((a, b) => a - b))]
    return arrayValues.join("");
}

function addTagManager(){

    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    
    })(window,document,'script','dataLayer','GTM-PW4436W');


}

function deleteCookie() {
    document.cookie = cookieConfig.name + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


addModalCookies();
startCookie();