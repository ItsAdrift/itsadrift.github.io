var survey_options = document.getElementById('survey_options');
var holder = document.getElementById('holder');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

var submitBtn = document.getElementById('submit');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class', 'border-2 rounded border-gray-500 dark:border-green-500 dark:border-3 dark:text-black p-2 sm:w-48 md:w-96 mt-5')
  newField.setAttribute('placeholder','Other Amounts');
  holder.appendChild(newField);
  return false;
}

remove_fields.onclick = function(){
  var input_tags = survey_options.getElementsByTagName('input');
  if(input_tags.length > 1) {
    holder.removeChild(input_tags[(input_tags.length) - 1]);
  }
  return false;
}

document.getElementById("result").style.display = 'none';
submitBtn.onclick = function() {
	let breadSticks = 0;
	breadSticks = document.getElementById("fullBoxes").value * 85;
	for (var i = 0; i < document.getElementsByName('survey_options[]').length; i++) {
		breadSticks += Number.parseInt(document.getElementsByName('survey_options[]')[i].value);
	}
	document.getElementById("result").innerText = "Result: "+breadSticks;
	document.getElementById("result").style.display = 'block';
}
