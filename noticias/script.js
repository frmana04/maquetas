let STEP_NEWS = 3;
let rowsShow = 0;
let filtered = false;
let expanded = false;
let device = document.documentElement.clientWidth <= 500 ? "MB" : "DK";

function showNexts() {

    let nodes, deviceDisplay;

    if (filtered && device == "MB") {
        nodes = document.querySelector('#filtered-grids').querySelectorAll('.news__grid-MB__new');
        deviceDisplay = "flex";
    } else if (filtered && device == "DK") {
        nodes = document.querySelector('#filtered-grids').querySelectorAll('.news__grid-DK');
        deviceDisplay = "grid";
    } else if (!filtered && device == "DK") {
        nodes = document.querySelector('#original-grids-DK').querySelectorAll('.news__grid-DK');
        deviceDisplay = "grid";
    } else if (!filtered && device == "MB") {
        nodes = document.querySelector('#original-grids-MB').querySelectorAll('.news__grid-MB__new');
        deviceDisplay = "flex";
    }

    for (let i = 0; i < rowsShow + STEP_NEWS; i++)
        if (nodes[i])
            nodes[i].style.display = deviceDisplay;

    rowsShow += STEP_NEWS;
    if (rowsShow >= nodes.length) {
        document.querySelector('.button--news').style.opacity = "0.5";
        document.querySelector('.button--news').style.pointerEvents = "none";
    } else {
        document.querySelector('.button--news').style.opacity = "1";
        document.querySelector('.button--news').style.pointerEvents = "auto";
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

function searchNewsbyTag(tags = ["et-1", "et-2"]) {

    let news = [];
    document.querySelector('#original-grids-DK').querySelectorAll('.new-box__tag').forEach(node => {
        if (tags.indexOf(node.innerHTML) != -1)
            news.push(node.parentNode.dataset.new);
    });
    news = [...new Set(news)];
    return news;
}

function getContent(id, box) {


    return id != "" ? document.querySelector('#original-grids-DK').querySelector(`.box-${box}[data-new='${id}']`).innerHTML : "";

}
// 1->1,4,7,10,13
// 2->2,5,8,11,14
// 3->3,6,9,12,15
function createRowNewsFilteredDK(id1, id2, id3) {
    let ini1, ini2, ini3;
    ini1 = (id1 % 3 == 0) ? 3 : id1 % 3;
    ini2 = (id2 % 3 == 0) ? 3 : id2 % 3;
    ini3 = (id3 % 3 == 0) ? 3 : id3 % 3;
    let content = `
   <div class="news__grid-DK" style="display:none;">
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
    return content;
}

function createAllNewsFiltered(news) {

    rowsShow = 0;
    filtered = true;
    let content = "";
    if (device == "DK") {

        for (let i = 0; i < news.length; i += 3)
            content += createRowNewsFilteredDK(news[i] || "", news[i + 1] || "", news[i + 2] || "");

        document.querySelector('#original-grids-DK').style.display = "none";

    } else {

        for (let i = 0; i < news.length; i++)
            content += createRowNewsFilteredMB(news[i] || "");

        document.querySelector('#original-grids-MB').style.display = "none";
    }
    document.querySelector('#filtered-grids').innerHTML = content;
    showNexts();

}

function createRowNewsFilteredMB(id) {

    let ini = (id % 3 == 0) ? 3 : id % 3;
    

    let content = getContent(id,ini)==""?'': `
    <div class="news__grid-MB__new" >
    <div class="news__grid-MB__new-row1">
      <div class="news__grid-MB__img">
      ${getContent(id,ini)}
      </div>
      <div class="news__grid-MB__info">
          <div class="new-box__box-info">
          ${getContent(id,ini+3)}
            
          </div>
          <div class="news__grid-MB__title">${getContent(id,ini+6)}</div>
      </div>
  </div>
      <div class="new-box__tags">
         
         
      ${getContent(id,ini+12)}
      </div>
  </div>`
    return content;
}

function generateOptionsFilter() {
    let tags = [],
        content = "";
    document.querySelector('#original-grids-DK').querySelectorAll('.new-box__tag').forEach(node => {
        tags.push(node.innerHTML);

    });
    tags = [...new Set(tags)];
    tags.forEach((tag, index) => {
        content += `
        <input id="checkbox${index}" type="checkbox"/>
        <label for="checkbox${index}">${tag}</label>
      
        `
    });
    document.querySelector('#checkboxes').innerHTML = content;

}

function toggleCheckboxes() {
    if (!expanded)
        openCheckBoxes();
    else
        closeCheckboxes();
}

function closeCheckboxes() {

    var checkboxes = document.getElementById("checkboxes");
    checkboxes.style.display = "none";
    expanded = false;
    document.querySelector('#select').style.borderBottom = "1px solid #707070";
}

function openCheckBoxes() {


    var checkboxes = document.getElementById("checkboxes");
    checkboxes.style.display = "block";
    expanded = true;
    document.querySelector('#select').style.borderBottom = "none";

}

function applyFilter() {
    let tags = [],
        news = [],
        allTags = [];
    document.querySelector('#checkboxes').querySelectorAll('input').forEach(node => {
        if (node.checked)
            tags.push(node.nextElementSibling.innerHTML);
            
        allTags.push(node.nextElementSibling.innerHTML);
    })

    if (tags.length == 0)
        tags = allTags;

    news = searchNewsbyTag(tags);
    createAllNewsFiltered(news);

}

window.addEventListener('click', function (e) {
    if (!document.querySelector('.multiselect').contains(e.target)) {
        closeCheckboxes();
    }
});
showNexts();
// generateRandomTags();
generateOptionsFilter();