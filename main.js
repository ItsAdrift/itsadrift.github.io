var so = document.getElementById('bread_survey_options');
var h = document.getElementById('bread_holder');
var add_more_fields = document.getElementById('bread_add_more_fields');
var rf = document.getElementById('bread_remove_fields');

var submitBtn = document.getElementById('submit');

add_more_fields.onclick = function(){
  var f = document.createElement('input');

  f.setAttribute('type','number');
  f.setAttribute('name','bread_survey_options[]');
  f.setAttribute('class', 'border-2 rounded border-gray-500 dark:text-black p-2 sm:w-48 md:w-96 mt-5')
  f.setAttribute('placeholder','Other Amounts');
  h.appendChild(f);
  return false;
}

rf.addEventListener("click", function(){
  var input_tags = so.getElementsByTagName('input');
  console.log()
  if(input_tags.length > 1) {
    var i = 1;
    while (input_tags[(input_tags.length)-i].name == "") {
      i++;
    } 
    input_tags[(input_tags.length) - i].parentNode.removeChild(input_tags[(input_tags.length) - i]);
  }
  return false;
}, false);


submitBtn.addEventListener("click", function() {
	let breadSticks = 0;
	breadSticks = document.getElementById("bread_fullBoxes").value * 85;
	for (var i = 0; i < document.getElementsByName('bread_survey_options[]').length; i++) {
		breadSticks += validate(document.getElementsByName('bread_survey_options[]')[i].value);
	}
	document.getElementById("bread_freezer").innerText = ""+breadSticks;
  total();
}, false);

function isEmpty(str) {
  return !str.trim().length;
}

function validate(str) {
  if (isEmpty(toString(str))) {
      return 0;
  } else {
      return +str;
  }
}

function total() {
  var freezer = +document.getElementById("bread_freezer").innerText;

  var front = validate(document.getElementById("bread_front").value);
  document.getElementById("result_bread_front").innerText = front;

  var retarder = 0;
  var v = document.getElementById("bread_retarder").value;
  if (!isEmpty(v)) {
    retarder = +v;
  } else {
    retarder = document.getElementById("bread_retarder").getAttribute("placeholder");
  }
  document.getElementById("bread_proofer").innerText = +retarder;

  document.getElementById("bread_total").innerText= +(Number.parseInt(freezer)+Number.parseInt(front)+Number.parseInt(retarder));

}

