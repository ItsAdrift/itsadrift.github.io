var survey_options = document.getElementById('survey_options');
var holder = document.getElementById('holder');
var add_more_fields = document.getElementById('add_more_fields');
var remove_fields = document.getElementById('remove_fields');

var submitBtn = document.getElementById('submit');

add_more_fields.onclick = function(){
  var newField = document.createElement('input');
  newField.setAttribute('type','text');
  newField.setAttribute('name','survey_options[]');
  newField.setAttribute('class', 'border-2 rounded border-gray-500 dark:border-green-500 dark:border-3 dark:text-black p-2 sm:w-48 md:w-96 mt-2')
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

//document.getElementById("result").style.display = 'none';
submitBtn.addEventListener("click",  function() {
    /*
        FREEZER
    */
	let wraps = 0;
	wraps += validate(document.getElementById("largeWrapsFull").value * 72);
    wraps += validate(document.getElementById("largeWraps").value * 8);

    wraps += validate(document.getElementById("regWrapsFull").value * 144);
    wraps += validate(document.getElementById("regWraps").value * 12);

    wraps += validate(document.getElementById("multiWrapsFull").value * 144);
    wraps += validate(document.getElementById("multiWraps").value * 12);

    let gfWraps = 0;
    gfWraps += validate(document.getElementById("gfWrapsFull").value * 64);
    gfWraps += validate(document.getElementById("gfWraps").value * 4);

	for (var i = 0; i < document.getElementsByName('survey_options[]').length; i++) {
        if (!isEmpty(document.getElementsByName('survey_options[]')[i].value)) {
            wraps += Number.parseInt(document.getElementsByName('survey_options[]')[i].value);
	    }
    }    
            
	document.getElementById("freezer").innerText = ""+wraps;
    document.getElementById("fridge").innerText = ""+gfWraps;

    /*
        FRONT
    */
    let fWraps = 0;
    fWraps += validate(document.getElementById("frontlargeWrapsFull").value* 8);
    fWraps += validate(document.getElementById("frontlargeWraps").value*1);

    fWraps += validate(document.getElementById("frontregWrapsFull").value * 12);
    fWraps += validate(document.getElementById("frontregWraps").value*1);

    fWraps += validate(document.getElementById("frontmultiWrapsFull").value * 12);
    fWraps += validate(document.getElementById("frontmultiWraps").value*1);

    document.getElementById("front").innerText = ""+fWraps;

    /* GF Retarder */

    let gfrWraps = 0;
    gfrWraps += (validate(+document.getElementById("gfrFull").value*4));
    gfrWraps += validate(+document.getElementById("gfrNotFull").value);

    document.getElementById("wrap_proofer").innerText = ""+gfrWraps;
    
	document.getElementById("result").style.display = 'block';
    
    totalWraps(wraps, fWraps, gfWraps, gfrWraps);
}, false);

function isEmpty(str) {
    return !str.trim().length;
}

function validate(str) {
    if (isEmpty(toString(str))) {
        return 0;
    } else {
        if (Number.isInteger(str)) {
            return Number.parseInt(str);
        } else {
            return 0;
            
        }
    }
}

function totalWraps(wraps, frontWraps, gfWraps, gfWrapsRet) {
    document.getElementById("wrap_total").innerText = sumAll(wraps, frontWraps, gfWraps, gfWrapsRet);
}

function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

// create an array of objects with the id, trigger element (eg. button), and the content element
const tabElements = [
    {
        id: 'bread',
        triggerEl: document.querySelector('#bread-tab'),
        targetEl: document.querySelector('#bread')
    },
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab'),
        targetEl: document.querySelector('#profile')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab'),
        targetEl: document.querySelector('#dashboard')
    },
    {
        id: 'gf',
        triggerEl: document.querySelector('#gf-tab'),
        targetEl: document.querySelector('#gf')
    }
];
/*
<li class="mr-2" role="presentation">
                    <button class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300 active" id="bread-tab" data-tabs-target="#bread" type="button" role="tab" aria-controls="bread" aria-selected="true">Bread</button>
                </li>
*/
// options with default values
const options = {
    defaultTabId: 'bread',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};

const tabs = new Tabs(tabElements, options);
tabs.show('bread')

