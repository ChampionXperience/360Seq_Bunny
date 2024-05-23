
function work(event,target){
    var value =  event.target.value;
    target.src='Bunny/Bunny_'+value+'.jpg';

}

var range = document.getElementById('range');
var image = document.getElementById('target');

range.addEventListener("input", (event) => {
  work(event,image);
});

