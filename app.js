





//selecting my input

let titleEl = document.getElementById('title');

//selecting button

let addbuttonEl = document.getElementById('add-btn');


//selecting list item

let listEl = document.getElementById('list')

addbuttonEl.addEventListener('click', function(){

    //extracting the value from input
    let titleText = titleEl.value;

    //creating the child
    let li = document.createElement('li')

    //inserting the text inside li

     li.innerText = titleText;

    //newly created li hai usse add karna

    listEl.appendChild(li);

    //clear kar do apne input ko
    titleEl.value = '';
     
    //remove the li after clicking on the li

    li.addEventListener('click', function(){
        li.remove()
    })

})