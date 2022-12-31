const sign_content = document.getElementById("select-content");  /*Zodiac buttons div*/
const sign_btn = document.getElementById("selectbtn");    /*Main Button*/

const date_content = document.getElementById("date-content");  /*Date buttons div*/
const date_btn = document.getElementById("datebtn");    /*Main Button*/

const horoscope_content = document.getElementById("horoscope");

const right_div = document.getElementsByClassName("right");

const guide_para = document.getElementById("guide");

const horoscope_data = document.getElementsByClassName("horoscope-text");

function showZodiacContent() {
  sign_content.classList.toggle("show-select-content");
}

function selectZodiac(sign) {
  sign_content.classList.remove("show-select-content");
  sign_btn.textContent = sign;

  const date = date_btn.textContent;

  if (date != "Date") {

    const URL = `https://aztro.sameerkumar.website/?sign=${sign.toLowerCase()}&day=${date.toLowerCase()}`;
    fetch(URL, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => {

        showHoroscope(json, sign);

      });
  }
}

function showDateContent() {
  date_content.classList.toggle("show-date-content");
}

function selectDate(date) {
  date_content.classList.remove("show-date-content");
  date_btn.textContent = date;

  const sign = sign_btn.textContent;

  if (sign_btn.textContent != "Zodiac Sign") {

    const URL = `https://aztro.sameerkumar.website/?sign=${sign.toLowerCase()}&day=${date.toLowerCase()}`;
    fetch(URL, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(json => {

        showHoroscope(json, sign);

      });
  }
}

function showHoroscope(json, sign) {

  var final_desc = translate(json.description)
  final_desc = final_desc.split('--').join()

  horoscope_data[0].innerHTML = `${final_desc}`;
  horoscope_data[1].innerHTML = `<span class="horoscope-heading">Mood: </span> ${json.mood}`;
  horoscope_data[2].innerHTML = `<span class="horoscope-heading">Lucky Color: </span> ${json.color}`;
  horoscope_data[3].innerHTML = `<span class="horoscope-heading">Compatibility: </span> ${json.compatibility}`;
  horoscope_data[4].innerHTML = `<span class="horoscope-heading">Lucky Number: </span> ${json.lucky_number}`;
  horoscope_data[5].innerHTML = `<span class="horoscope-heading">Lucky Time: </span> ${json.lucky_time}`;

  if (!horoscope_content.classList.contains("show-horoscope")) {
    for (let i = 0; i < 12; i++) {
      document.getElementsByClassName('sign-images')[i].classList.toggle("hide-sign");
    }
    guide_para.classList.toggle("guide-remove");
    right_div[0].classList.toggle("show-right");
    horoscope_content.classList.toggle("show-horoscope");
  }
  if (!document.getElementById(sign).classList.contains("show-sign")){
    for (let i = 0; i < 12; i++) {
      document.getElementsByClassName('big-img')[i].classList.remove("show-sign");
    }
    document.getElementById(sign).classList.toggle("show-sign");
  }
}

window.onclick = function (event) {
  if (!event.target.matches('.selectbtn')) {
    var dropdowns = document.getElementsByClassName("select-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-select-content')) {
        openDropdown.classList.remove('show-select-content');
      }
    }
  }
  if (!event.target.matches('.datebtn')) {
    var dropdowns = document.getElementsByClassName("date-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show-date-content')) {
        openDropdown.classList.remove('show-date-content');
      }
    }
  }
}

var reveals = document.querySelectorAll(".reveal");
for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } 
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } 
    else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

var jsonData = { "phrases1": "you are attractive\n\nyou have a great personality\n\nfacebook\n\nmozart\n\ni am bringing home the bacon\n\nback in my day\n\nback in my day\n\ndate night\n\non a date\n\ni will not apologize\n\ni am attracted to you\n\ni am attracted to\n\ni have dilemma in my life\n\ni am having difficulties\n\ni agree\n\ni do not understand\n\ni cannot comprehend\n\nthat was hilarious\n\nprovide proof\n\nprovide evidence\n\ngive me proof\n\ngive me evidence\n\nyou did an excellent job\n\nyou did a good job\n\nyou did well\n\nyou do an excellent job\n\nyou do a good job\n\nyou do well\n\nyou are excellent\n\nyou are good\n\nyou are looking particularly good\n\nyou are looking extra attractive\n\nyou are looking good\n\ngossip\n\ngossip\n\ni wanna be tracer\n\nare you hitting on me\n\nsomeone sent me the music video for \"never gonna give you up\"\n\nwould you like to\n\ni want to\n\nyou want to\n\ndo you want to\n\ngo on a date\n\ni hate everything\n\nlook stupid\n\nlooks stupid\n\nlook stupid\n\nlooks stupid\n\nlook sexy\n\nlooks sexy\n\nare sexy\n\nis sexy\n\na homosexual\n\nwho are you\n\nwe are doing this\n\nhaving sex\n\nhaving sex\n\nhaving intercourse\n\nhaving intercourse\n\nsuck a\n\nsuck this\n\nsuck my\n\nsuck your\n\nsuck our\n\nsuck their\n\ni am\n\ni'm horny\n\ni'm\n\nyou are\n\nam sexy\n\nwhite girl\n\nthank you\n\nthanks\n\nhas school\n\ni have school\n\nwe have school\n\nthey have school\n\ni had school\n\nwe had school\n\nthey had school\n\nhad school\n\nto school\n\nit's like that\n\nthat's how it is\n\ngo to school\n\nit's\n\nis crazy\n\nare crazy\n\ndo you want to\n\nbeing rude\n\nbe rude\n\nhow are you\n\nwhat's up\n\nwhat's\n\nam i\n\nlooks good\n\nwill please\n\nman\n\ncommit suicide\n\nsuck on\n\nam going\n\ngoing to\n\ngoing to go\n\ni am going\n\ndoing well\n\ndoing good\n\ndoing bad\n\ncalm down\n\nis hard\n\nis difficult\n\nare hard\n\nare difficult\n\nis fake\n\nare fake\n\nthe earth is round\n\nis the earth round\n\nis the earth flat\n\ngot beat up\n\nlost a fight\n\nwas beat up\n\nwere beat up\n\nwas wounded\n\nwere wounded", "phrases2": "you be lookin snatch\n\nyour face isn't so great\n\ninsta for old people\n\n6ix amadeus 9ine\n\ni am getting this bread\n\nin the 1700s\n\nin nam\n\nnetflix and chill\n\nnetflix and chill\n\nsorry not sorry\n\ni thirst for you XD\n\ni thirst for\n\ni wanna die\n\ni am going fucking kill myself because\n\nrt\n\nI can't even with\n\nI can't even with\n\ni'm dead\n\npics or it didn't happen\n\npics or it didn't happen\n\npics or it didn't happen\n\npics or it didn't happen\n\nyou slayed\n\nyou slayed\n\nyou slayed \n\nyou slay\n\nyou slay\n\nyou slay\n\nyou slay\n\nyou slay\n\nyou lookin' thicc\n\nyou lookin' thiccc\n\nyou lookin' thicc\n\nspill some tea\n\nspill tea\n\ni'm already tracer\n\nare you thirsty for me\n\ni just got rick rolled\n\nwanna\n\ni wanna\n\nyou wanna\n\nwanna\n\nnetflix and chill\n\ni wanna die\n\nlook fucking dumb\n\nlooks fucking dumb\n\nlook fuckin dumb\n\nlooks fuckin dumb\n\nlook bitchin\n\nlooks bitchin\n\nare snatched\n\nis snatched\n\ngay\n\nwho ya'll be\n\nwe in this \n\nfuckin\n\nfucking\n\nfucking \n\nfuckin\n\nsuck a\n\nsuck this\n\nsuck my\n\nsuck your\n\nsuck our\n\nsuck their\n\nya boi be\n\nwww.lemonparty.com \n\nya boi be\n\nya be\n\nbe thicc\n\nbasic bitch\n\nyeet\n\nyeet\n\nhas to waste they time\n\ni have to waste my time\n\nwe have to waste our time\n\nthey have to waste their time\n\ni had to waste my time\n\nwe had to waste our time\n\nthey had to waste their time\n\nhad to waste they time\n\nto waste time\n\nit be like that\n\nthat how it be\n\ngo waste time\n\nit be\n\nbe trippin\n\nbe trippin\n\nwanna\n\nthrowin shade\n\nthrow shade\n\nbiiiitch how is you\n\nbiiitch what is uuuuup\n\nwhat be\n\nya boi\n\nbe litty\n\nwill quiet down\n\ngrown ass man\n\nkermit suicide\n\nsuck on\n\ngonna\n\ngonna\n\ngonna go\n\nya boi gonna\n\ngetting this bread\n\ngetting this bread\n\nnot getting this bread\n\nchill\n\nbe hard sometimes\n\nbe hard sometimes\n\nbe hard sometimes\n\nbe hard sometimes\n\nbe a conspiracy\n\nbe a conspiracy\n\nthe earth be flat, boi\n\nno\n\nyes\n\ngot her weave snatched\n\ngot her weave snatched\n\ngot her weave snatched\n\ngot her weave snatched\n\ngot her weave snatched\n\ngot her weave snatched", "words1": "i challenge you to a duel\ni challenge you to a duel\nwould you like to fight\nwould you like to fight\ni am attracted to you\ntaking out a mortgage\napplying for a loan\npicture of yourself\nintelligent person\ninteresting person\ni am in disbelief\nmale relationship\nphoto of yourself\npicture of myself\nsignificant other\nhave intercourse\ni don't like you\npigs reproducing\nthat's hilarious\ndo not say that\ni am dumbfouded\ni am very happy\ni don't want to\ni feel the same\ni want to fight\ni want to fight\nphoto of myself\nwould you agree\nyour mom is gay\nawesome person\nextraordinary\nhomosexuality\nkill yourself\nyou look good\nare you sure\nfacebook ceo\nfacebook guy\ngreat person\ni'm so sorry\nmy apologies\npaying bills\npaying taxes\npigs fucking\nsmart person\nsocial media\nthat is cool\nthat's funny\nthat's funny\nyour mom gay\ncool person\ndoing taxes\ngood person\ni apologize\ni relate to\ninteresting\nlet's fight\nlet's fight\nrude person\ncigarettes\ngirlfriend\nhomosexual\ni disagree\ni hate you\ni hate you\nrather not\nur mom gay\nur mom gey\nyou people\nzuckerberg\nboyfriend\ncool dude\nfantastic\nglamorous\ngossiping\ngossiping\ngossiping\ngreetings\nirritated\nmarijuana\nno thanks\nrejecting\nright now\nsurprised\nto gossip\nto gossip\nto gossip\nwonderful\nwonderful\na reject\nabortion\nattitude\ncommando\nfreaking\nfuck off\nhave sex\nhurried \nicecream\ninsulted\nmistress\noffended\nrejected\nso sorry\nthey are\nyou suck\namazing\namazing\nare not\nare you\nas heck\nas hell\nawesome\nawesome\nbreasts\nbrother\nbullies\nfreakin\nfriends\nfucking\nhurried\ni think\nreally,\nreally?\nschools\nshut up\nsuicide\ntotally\nwant to\nwing-it\nyou all\n*gasp*\nbounce\nbreast\ncoolio\nfuckin\ngroovy\ninsane\ninsult\nplease\nreally\nreject\nschool\nstupid\nvagina\nvagina\nwe are\nyou're\nangry\naware\nbeans\nbitch\nboobs\nbrain\nbully\ncrazy\ndance\ngirls\nhello\nleave\npenis\npenis\nrelax\nrelax\nrelax\nrelax\nshoes\nsucks\nthrew\nthrow\nupset\nwoman\nwomen\nboob\nboys\ngirl\ngood\npoop\nrude\nsuck\ntaxi\nyell\nyour\nboy\nmad\nmen\nwhy\nyes\nyou\nare\nhi\nis\nme\nno\ni\npeople\nand\nmom\nmother\ngay", "words2": "cash me outside\nsquare up\ncash me outside\nsquare up\ni thirst for you XD\nadulting\nadulting\nselfie\nintellectual\ng\ni am triggered\nbromance\nselfie\nselfie\nbae\nfuck\nunfollow\nhamboning\ni'm dying\nthat's my trigger\ni am triggered\ni am happy af\nnah\nmood\ncash me outside\nsquare up\nselfie\nhow bow dat\nno u\ng\nlit\ngayness\ndelete yourself from existance\nlookin gucci\nword?\nzucc\nzucc\ng\nmy bad\nmy bad\nadulting\nadulting\nhamboning\nintellectual\nsnapchat and shit\nthat's gucci\ni'm dead\ni'm dying\nno u\ng\nadulting\ng\nmy bad\nmood\ndope\ncash me outside\nsquare up\nsavage\ncigi\nshawty\ngay\ncan't relate\nunfollow\nkys\nnah bro\nno u\nno u\nya'll\nzucc\ndaddy\ng\nsnatched\nswag\nspilling the tea\nspilling some tea\nspilling tea\nayy\nsalty\ndank kush\nnah bruh\ncurving\nrn\nshook\nto spill the tea\nto spill some tea\nto spill tea\nlit\nlitty\na bitch\nfetus-deletus\nswag\nfree ballin\nhecking\nligma\nsmash\nyeeted\nfrozen cow juice\nroasted\nside-hoe\nshook\ncurved\nmy bad\nthey's\nunfollow\nlit\nlitty\nain't\nya'll\naf\naf\nrad\nlit\ntitties\nbruv\ntrolls\nheckin\nfam\nhecking\nskirted\n\nreally,\nreally?\nwastes of time\nbitch please, stfu\nyeetus - deletus\ntotes\nwanna\nyeet-it\nya'll\nshook\nskirt\ntitty\ngoat\nheckin\ngucci\nwack\nroast\nbitch\ncrazy\ncurve\na waste of time\nshit\npussy\npuss\nwe's\nya be\ntriggered\nwoke\nlegumes \nbiiitch\ntitties\nthinking organ\ntroll\nwack\nhit the whip\nhoes\nayy\nskirt\ndick\ncock\nit's just a prank bro\nchill\nis only game\nwhy you haf to be mad\nkicks\nis wack\nyeeted\nyeet\ntriggered\nfemale\nbitches\ntitty\nbois\nhoe\nlitty\nshit\nsavage\nare wack\nuber\nholla\nya\nboi\ntriggered\nbois\nbruh why\nyaas\nya\nbe\nayy\nbe\nya boi\nnah\nya boi\nbros\nn\nmah\nmah\nhomosesicle"};
phrases1 = jsonData.phrases1.split("\n");
phrases2 = jsonData.phrases2.split("\n");
words1 = jsonData.words1.split("\n");
words2 = jsonData.words2.split("\n");
