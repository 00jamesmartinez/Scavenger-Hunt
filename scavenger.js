// Create an event listenter for the 'submit' button that calls the combineLists() function

// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

var arrayList = new Array();

document.getElementById('submit').addEventListener('click',combineLists);


function combineLists() {
    var arrayList1 = new Array();
    var el1 = document.getElementById('scavenger-0').innerHTML;
    arrayList1.push(el1);

    var arrayList2 = new Array();
    var el2 = document.getElementById('scavenger-1').innerHTML;
    arrayList2.push(el2);

    var arrayList3 = new Array();
    var el3 = document.getElementById('scavenger-2').innerHTML;
    arrayList3.push(el3);

    var arrayList4 = new Array();
    var el4 = document.getElementById('scavenger-3').innerHTML;
    arrayList4.push(el4);

    const array1 = arrayList1.concat(arrayList2);
    const array2=array1.concat(arrayList3);
    const arrayList = array2.concat(arrayList4);

    arrayList.sort();

    document.getElementById('AllItems').innerHTML = arrayList;
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText 
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) {
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}