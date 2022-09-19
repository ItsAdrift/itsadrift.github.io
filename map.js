let myMap = L.map("map").setView([40.159893, 26.318436], 12);

L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
    maxZoom: 17
}).addTo(myMap);

var anzac_cove_popup = `<h2>Anzac Cove</h2><br/><img src='https://thumbnailer.digitalnz.org/?resize=664%3E&src=https%3A%2F%2Fndhadeliver.natlib.govt.nz%2FNLNZStreamGate%2Fget%3Fdps_pid%3DIE159222&format=webp' alt='Anzac Cove' width='auto'/><span>
<h3><i>25th April 1915</i></h3>

16,000 Australian and New Zealand troops landed at what would later be named ANZAC Cove, as part of a campaign to capture the Gallipoli Peninsula.
<br></br>Their landing was an attempt to help the British force their way through the narrow Dardanelles straits.

<br></br>As the Anzacs were unsuccessful in completing their objects and the Turks started a large counter-attack, regaining much of the ground the Anzacs had taken, It was proposed to General Sir Ian Hamilton that the Allied forces be evacuated.

<br></br>After consultation with the Royal Navy, Hamilton decided against an evacuation, and ordered the troops to dig in. Falling back on improvised and shallow entrenchments, the Anzacs just had to try to hold on.

<br></br>By the first evening of the 16,000 men that landed, over 2,000 had been killed or wounded.


</span>`;

// specify popup options 
var options =
    {
    'maxWidth': '750',
    'width': '400',
    'className' : 'request-popup'
    }
let anzac_cove = L.circle([40.2449, 26.2819], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: "0.5",
    radius: 300
}).addTo(myMap);
anzac_cove.bindPopup(anzac_cove_popup, options);

const nek_info = `
`

var nek_popup = `<h2>Battle of the Nek</h2><br/><img src='https://content.api.news/v3/images/bin/44fa23fca1a90b8601e299b9b1888a80' alt='Nek' width='auto'/><span>
<h3><i>7th August 1915</i></h3>

The Nek was a small but tragic battle. The Nek was an important location for the Allies, it was located on the northern end of the Anzac front and stretched between Ruseell’s Top and Baby 700. The Ottoman troops occupied the trenches on the slope of Baby 700 and were above the Australian position.

<br></br>The Australians attacked in waves, sending troops out of the trench to try to enter the enemy's trenches. However every time that a wave went over, they would almost immediately be shot down by a hail of rifle and machine gun fire.

<br></br>The first and second wave had limited success. A cancellation of the attack was proposed, however the officer in charge refused to call off the attack as he had been informed that some Australians had reached the Turkish trenches. The third and fourth wave both met the same fate and the attack was eventually called off.

<br></br>Of the 600 Australian troops involved, 234 were killed and 138 were wounded.

</span>`
let nek = L.marker([40.2414, 26.288385]).addTo(myMap);
nek.bindPopup(nek_popup, options);


var baby700_popup = `<h2>Baby 700</h2><br/><img src='https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Nek_to_Baby_700.JPG' alt='Baby 700' width='auto'/><span>

<h3><i>25th April 1915</i></h3>

The 3rd Australian Brigade landed at Anzac Cove on 25 April 1915 and successfully reached the summit on the morning of the landing. During the course of the day, Baby 700 changed hands five times as the Ottomans fought hard to reclaim their ground, as did the Allies; however the allies eventually lost it as they were driven off in the afternoon. 
<br></br>Allied forces made several attempts to recapture it over the following months, with major assaults on 2 May and 7 August but it remained in Turkish control for the rest of the campaign.


</span>`

var baby700 = L.marker([40.244423, 26.294819]).addTo(myMap);
baby700.bindPopup(baby700_popup, options);


var dardanelles_popup = `<h2>Dardanelle Straits</h2><br/><img src='https://cdn.britannica.com/25/64725-050-2B6C4B2E/Dardanelles.jpg' alt='Dardanelles' width='750'/><span>

<h3><i>2 January 1915</i></h3>
On the 2nd of January the British Government received an appeal from Russia, asking for Britain to attack Turkey to divert them from the Caucasus front, where Russian forces were in danger of being overrun.

<br></br>Gaining control of the Dardanelles straits, leading to the Sea of Marmara and the Turkish capital would re-establish communications with Russia and open a shipping route to the Mediterranean which had previously been blocked at the Black Sea by Turkey
</span>`

let dardanelles = L.marker([40.2, 26.4]).addTo(myMap);
dardanelles.bindPopup(dardanelles_popup, options);


var dardanelles_attack_popup = `<h2>Dardanelle Straits Attack</h2><br/><img src='https://anzacportal.dva.gov.au/sites/default/files/images/awm-h10720.jpg' alt='Dardanelles' width='750'/><span>

<h3><i>28th January-30th April 1915</i></h3>
On 28th January the Australian submarine AE2 left the 2nd convoy at Port Said to join the British 2nd Submarine Squadron to prepare for naval operations.
<br></br>On board was the Royal Navy's Captain Henry Stoker and his mostly Australian crew.

<br></br>On the 25th April 1915, the day of the Anzac landings, AE2 was ordered to enter the Dardanelles. The Dardanelles are <b>59km</b> in length and in parts only 800m wide.

<br></br>AE2 damaged the Ottoman gunboat Peyk-i-Sevket, then navigated through a path of minefields and dangerous currents, all the way to the narrows while being pursued by enemy vessels on the surface.

<br></br>AE2 became the first submarine to enter the Sea of Marmara. For the next 4 days it attacked Ottoman shipping vessels headed to Gallipoli.

<br></br>As AE2 surfaced on the 30th of April, the Ottoman torpedo boat Sultanhisar opened fire and sank the submarine. None of the crew died however they were all taken as prisoners of war and four died in captivity.

</span>`

let dardanelles_attack = L.marker([40.105038, 26.349335]).addTo(myMap);
dardanelles_attack.bindPopup(dardanelles_attack_popup, options);



var evacuation_popup = `<h2>Evacuations | North Beach</h2><br/><img src='https://anzacportal.dva.gov.au/sites/default/files/images/awm-c01621.jpg' alt='Evacuations at North Beach' width='750'/><span>

<h3><i>8th December-20th December 1915</i></h3>
The evacuation from Gallipoli is what some may consider to be the most successful part of the campaign, with almost no casualties.

<br></br>An Australian staff officer, Lieutenant-Colonel Charles Brudenell White, devised a plan to gradually withdraw men and equipment while convincing the Turks that everything was normal.

<br></br>Nearly all firing from the Anzacs ceased to make the enemy think they were preparing for the winter, but some irregular rifle and artillery fire was kept up. A lot of equpment was taken away at night, but some material and resources were still brought ashore during the day to keep a normal appearance.

<br></br>The evacuation consisted of 3 stages. Stage 1 and 2 would reduce the numbers to a point where they would only be able to hold off a major attack for 1 week. These first 2 stages dropped the troop count from 41,000 to 26,000.

<br></br>In the final stage which happened on the 18th December to the 20th, the last AIF troops were withdrawn over the 2 nights. On the 18th there were only 20,277 soldiers left, and on the 20th there were none.

</span>`

let evacuation = L.marker([40.216973, 26.278954]).addTo(myMap);
evacuation.bindPopup(evacuation_popup, options);



var cricket_popup = `<h2>Shell Green Cricket Game</h2><br/><img src='https://s3-ap-southeast-2.amazonaws.com/awm-media/collection/G01289/screen/4092777.JPG' alt='Cricket Game With Artillery Shells Flying Overhead' width='750'/><span>

<h3><i>17 December 1915</i></h3>
A game of cricket was played on Shell Green in an attempt to distract the Turks from the departure of allied troops. Shells were passing overhead the entire time the game was in progres
</span>`

let cricket = L.marker([40.225556, 26.28]).addTo(myMap);
cricket.bindPopup(cricket_popup, options);



var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(myMap);
}

myMap.on('click', onMapClick);