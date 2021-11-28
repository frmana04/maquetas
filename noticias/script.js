let STEP_NEWS = 3;
let rowsShow = 0;


function showNexts() {

    let deviceDisplay = document.documentElement.clientWidth <= 500 ? "flex" : "grid";
    let nodes = deviceDisplay == "grid" ? document.querySelectorAll('.news__grid-DK') : document.querySelectorAll('.news__grid-MB__new');

    for (let i = 0; i < rowsShow + STEP_NEWS; i++)
        if (nodes[i])
            nodes[i].style.display = deviceDisplay;

    rowsShow += STEP_NEWS;
    if (rowsShow >= nodes.length) {
        document.querySelector('.button--news').style.opacity = "0.5";
        document.querySelector('.button--news').style.pointerEvents = "none";
    }
}

function generateRandomTags() {
    let max = 10;
    let min = 1;
    document.querySelectorAll('.new-box__tag').forEach(node => {
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        node.innerHTML = "et-" + random;
    });
}

function searchNewsbyTag(tags=["et-1","et-2"]) {
  
    let news=[];
    document.querySelector('#original-grids').querySelectorAll('.new-box__tag').forEach(node => {
       if(tags.indexOf( node.innerHTML)!=-1)
        news.push(node.parentNode.dataset.new);
    });
    news = [...new Set(news)];
    console.log(news)

}

function getContent(id,box){

    
    return id!=""?document.querySelector('#original-grids').querySelector(`.box-${box}[data-new='${id}']`).innerHTML:"";

}
// 1->1,4,7,10,13
// 2->2,5,8,11,14
// 3->3,6,9,12,15
function createNewsFiltered(id1,id2,id3){
let ini1,ini2,ini3;
ini1=(id1%3==0)?3:id1%3;
ini2=(id2%3==0)?3:id2%3;
ini3=(id3%3==0)?3:id3%3;
   let content=`
   <div class="news__grid-DK" style="display:grid;">
    <div class="box-1">${getContent(id1,ini1)}</div> 
    <div class="box-2">${getContent(id2,ini2)}</div> 
    <div class="box-3">${getContent(id3,ini3)}</div> 

    <div class="new-box__box-info box-4">${getContent(id1,ini1+3)}</div>
    <div class="new-box__box-info box-5">${getContent(id2,ini2+3)}</div>
    <div class="new-box__box-info box-6">${getContent(id3,ini3+3)}</div>

    <div class="new-box__title box-7">${getContent(id1,ini1+6)}</div>
    <div class="new-box__title box-8">${getContent(id2,ini2+6)}</div>
    <div class="new-box__title box-9">${getContent(id3,ini3+6)}</div>
    
    <div class="new-box__text box-10">  ${getContent(id1,ini1+9)}</div>
    <div class="new-box__text box-11">  ${getContent(id2,ini2+9)}</div>
    <div class="new-box__text box-12">  ${getContent(id3,ini3+9)}</div>

    <div class="new-box__tags box-13">${getContent(id1,ini1+12)}</div>
    <div class="new-box__tags box-14">${getContent(id2,ini2+12)}</div>
    <div class="new-box__tags box-15">${getContent(id3,ini3+12)}</div>
    </div>
`
console.log("jaja")
document.querySelector('#filtered-grids').innerHTML=content;
document.querySelector('#original-grids').style.display="none";
}


showNexts();
generateRandomTags();
searchNewsbyTag();