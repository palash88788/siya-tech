document.getElementById("emailError").style.display = "none";
document.getElementById("nameError").style.display = "none";
document.getElementById("typeError").style.display = "none";
document.getElementById("messageError").style.display = "none";
document.getElementById("successmsg").style.display = "none";


var projectarray = [
  {
    classname: "active-project",
    name: "Golfhubber",
    social: "https://itunes.apple.com/gb/app/golfhubber/id1350439725?mt=8",
    social1: "https://play.google.com/store/apps/details?id=com.golfhubber",
    social2: "https://golfhubber.com/",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    desc:
      " Golfhubber is the first complete golf network of its kind,  bringing clubs, pros, and amateurs together on a shared  digital platform.",
    involement: "Tech Partner,<br> Product Design & Development",
    achieve: "Launched to Market |<br> Raised £500k+ | Partnership with 10+ Clubs",
    ceoimage: "assets/img/project/ds-web.png",
    ceocomment:
      "Siya Brothers (Hatim & Abdeali) are a great partner as far as implementation of mobile startups is concerned. They translated our ideas into reality(working apps) almost perfectly, and at a competitive price. We were most impressed by the communications and outreach from the team. We felt like they were as invested in and excited about our project as our own team. I'll definitely recommend SiyaTech to everybody.",
    ceoname: "Richard Magill",
    ceoaddress: "Founder and CEO of Golfhubber",
    appimage: "assets/img/golf-screens.png",
    mobileceo:  "assets/img/project/ds.png",
  },
  {
    classname: "inactive-project",
    social: "https://itunes.apple.com/gb/app/poochplay/id1198261998?mt=8",
    social1: "https://play.google.com/store/apps/details?id=com.poochplay",
    social2: "https://www.justpoochplay.com/",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "PoochPlay",
 
    desc:
      "PoochPlay is a complete dog wellbeing management app and a wireless dog activity tracker.",
    involement: "Tech Partner,<br> Product Design & Development<br><br>",
    achieve: "Launched to Market |<br> Raised £0.3M+ |  As seen on ITV <br>& featured on all major publications",
    ceoimage: "assets/img/project/ravi.jpg",
    ceocomment:
      "SiyaTech has been our development partners. Lovely guys. Very hardworking. I wouldn't have been able to complete my product without them. Much better than some of the UK companies I've dealt with, to be honest.",
    ceoname: "Ravi Sharma",
    ceoaddress: "Founder and CEO of PoochPlay",
    appimage: "assets/img/project/poochply.png",
    mobileceo:  "assets/img/project/2.png",
  },
  {
    classname: "inactive-project",
    social: "https://itunes.apple.com/in/app/shapshap/id1311568797?mt=8",
    social1: "https://play.google.com/store/apps/details?id=com.shapshap.customer",
    social2: "http://www.shapshap.com/",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "Shap Shap",
    desc:
      "Shap Shap is an Africa based on-demand online marketplace and last-mile delivery service.",
    involement: " CTO, Product Strategy,<br> Design & Development",
    achieve: "Launched to market |<br> West Africa's fastest growing Startup",
    ceoimage: "assets/img/project/khalil.jpg",
    ceocomment:
      "Working with Hatim, I realized that he chooses his client carefully not the other way round. It is more like a family relationship than a business, he takes his time to understand you outside the business world and figure out the best way to nurture you and make sure your personalities are inclined with the business you are into, this helps in striking a great balance between work and social life.",
    ceoname: " Khalil Halilu ",
    ceoaddress: "Founder and CEO of Shap Shap",
    appimage: "assets/img/project/shapshap.png",
    mobileceo:  "assets/img/project/1.png",
  },
  {
    classname: "inactive-project",
    social: "https://itunes.apple.com/in/app/trail-social/id1444726790?mt=8",
    social1: "https://play.google.com/store/apps/details?id=com.trail&hl=en",
    social2: "https://www.trail.social",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "Trail",
    desc:
      "Trail is an innovative new social media app and influencer marketing platform all in one.",
    involement: "CoFounder and CTO,<br> Product Strategy, Design <br>&amp; Development",
    achieve: "Private Beta Launched<br><br><br>",
    ceoimage: "assets/img/project/sharif.jpg",
    ceocomment:
      "Hatim and Siya Tech have been invaluable to me in creating our app. The advice and assistance given throughout all stages has been second to none and far above the level of service I had hoped for.",
    ceoname: "Sharif Mohamed",
    ceoaddress: "Founder and CEO of Trail",
    appimage: "assets/img/project/trail.png",
    mobileceo:  "assets/img/project/4.png",
  },

  {
    classname: "inactive-project",
    social: "https://itunes.apple.com/gb/app/aptlink/id1437625720?mt=8",
    social1: "#",
    social2: "https://www.aptlink.io/",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "Aptlink",
    desc:
      "Aptlink is a  matchmaking app for professionals with whom you have crossed paths.",
    involement: " Interim CTO, <br>Product Strategy,<br> Design & Development",
    achieve: "Beta Launched<br><br><br>",
    ceoimage: "assets/img/project/tinashe.jpg",
    ceocomment:
      "Met Hatim beginning of 2018 through networking. I was on the lookout for a CTO and Hatim became more than that to my startup @Aptlink, he became a CTO, mentor and after a year, now a friend. He and his team understood my vision, it resonated so much with him that he wanted to be part of the founding team, that was a vote of confidence in me.",
    ceoname: "Tinashe G Chiweshe",
    ceoaddress: "Founder and CEO of Aptlink",
    appimage: "assets/img/project/aptlink.png",
    mobileceo:  "assets/img/project/3.png",
  },
  {
    classname: "inactive-project",
    social: "#",
    social1: "https://play.google.com/store/apps/details?id=com.patchermechanic.patcher_mechanic&hl=en",
    social2: "https://patcher.co.uk/",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "Patcher",
    desc:
      "Patcher is on-demand car maintenance and emergency app that connects users to quality mechanics and service providers within 15 miles of their location.",
    involement: "Product Strategy,<br> Design & Development",
    achieve: "Beta Launched<br><br>",
    ceoimage: "assets/img/project/reuel.jpg",
    ceocomment:
      "Hatim has been a great source if support and help with the development of the Patcher Apps. He is keen, driven and throws himself headfirst into the projects he works on giving 100% commitment to the teams and the tasks at hand. with his knowledge of the start up space, he makes a great asset to any start up he is involved in, and brings real, practical value.",
    ceoname: "Reuel Fleary Graffiths",
    ceoaddress: "Co Founder Patcher",
    appimage: "assets/img/project/patcher.png",
    mobileceo:  "assets/img/project/5.png",
  },
  {
    classname: "inactive-project",
    social: "https://itunes.apple.com/us/app/twinkly/id1132187056?mt=8",
    social1: "https://play.google.com/store/apps/details?id=com.twinkly&hl=en",
    social2: "https://www.twinkly.com",
    apple: "assets/img/project/applea.svg",
    google: "assets/img/project/playstore.svg",
    web: "assets/img/project/computer.svg",
    name: "Twinkly",
    desc:
      "Twinkly is a LED light string, controlled via smartphone: Internet of things meets extraordinary effects!",
    involement: "Product Design and<br> Development<br><br>",
    achieve: "Launched to Market |<br>Featured on all major <br>European publications",
    ceoimage: "assets/img/project/6.png",
    ceocomment:
      "Thanks for your kind support, <br> Everything is fine. <br> Hope to collaborate again for another project",
    ceoname: "Pier Bardoni",
    ceoaddress: "Founder of Things",
    appimage: "assets/img/project/twinkly.png",
    mobileceo:  "assets/img/twinklyceo.png",
  }
];
createProject();
function shiftleft() {
  console.log("shift left");
  let i = -1;
  for (i = 0; i < projectarray.length; i++) {
    const element = projectarray[i];
    if (element.classname == "active-project") {
      break;
    }
  }
  console.log(i);
  var current = i;
  if (i == 0) {
    current = projectarray.length - 1;
  } else if (i == projectarray.length - 1) {
    current = 5
  } else {
    current = i - 1;
  }
  for (let k = 0; k < projectarray.length; k++) {
    const element = projectarray[k];
    element.classname = "inactive-project";
  }
  console.log(current);
  projectarray[current].classname = "active-project";
  createProject();
}
function shiftright() {
  console.log("shift right");
  let i = -1;
  for (i = 0; i < projectarray.length; i++) {
    const element = projectarray[i];
    if (element.classname == "active-project") {
      break;
    }
  }
  console.log(i);
  var current = i;
  if (i == projectarray.length - 1) {
    current = 0;
  } else {
    current = i + 1;
  }

  for (let k = 0; k < projectarray.length; k++) {
    const element = projectarray[k];
    element.classname = "inactive-project";
  }
  console.log(current);
  projectarray[current].classname = "active-project";
  createProject();
}

function createProject() {
  var text = "";
  for (let i = 0; i < projectarray.length; i++) {
    const element = projectarray[i];
    var project = "";
    // var ceoDisplay = element.name == "Twinkly" ? "inactive-project" : "active-project"
    var appleDisplay = element.name == "Patcher" ? "inactive-project" : "active-project"
    var googleDisplay = element.name == "Aptlink" ? "inactive-project" : "active-project"
 
 
    console.log($(this).width());
    if ($(this).width() > 768) {
      project = `<div class="row  justify-content-md-center project ${
        element.classname
        }">
    <div class="col-md-7">
      <div class="project-name projectname">
        ${
        element.name
        } <a href= ${ element.social } target="_blank" class="ml-2"><img id="my-img" class= " ${appleDisplay}" src="${ element.apple}"></a> <a href= ${ element.social1 } target="_blank"><img id="my-img1" class= " ${googleDisplay}" src="${ element.google }" ></a>
        <a href= ${ element.social2 } target="_blank"><img id="my-img2" src="${ element.web }"></a>
      </div>
      <div class="project-desc projectname">
      ${element.desc}
      </div>
      <ul class="p-0 my-4 projectname">
        <li class="involve-li">
            <div class="involvement">Involvement: <span class="involement-desc">
            ${element.involement}
        </span></div>
            
        </li>
        <li class="achieve-li">
            <div class="involvement">Status:
            <span class="involement-desc">
                
            ${element.achieve}                    </span> </div>
          
        </li>
      </ul>
      <ul class="p-0 my-4 ceo-ul ceo" >
          <li class="ceo-li">
             <img src="${element.ceoimage}" style="width: 9.1rem;">

          </li>
          <li class="comment-li">
             <div class="comment-text">
             ${element.ceocomment}
             </div>
             <div class="ceo-name">
${element.ceoname}
             </div>
             <div class="address-text">
${element.ceoaddress}             </div>
          </li>
        </ul>
    </div>
    <div class="col-md-5">
      <img src="${element.appimage}" class="appimage" style="width:100%;">
    </div>
  </div>`;
    } else {
      project = `<div class="row  justify-content-md-center project m-0 ${
        element.classname
        }">
    <div class="col-sm-12 text-center">
      <div class="project-name project-name-m projectname">
        ${element.name} <br>
        <a href= ${ element.social } target="_blank" class="ml-2"><img id="my-img" class= " ${appleDisplay}" src="${ element.apple}"></a> <a href= ${ element.social1 } target="_blank"><img id="my-img1" class= " ${googleDisplay}" src="${ element.google }" ></a>
        <a href= ${ element.social2 } target="_blank"><img id="my-img2" src="${ element.web }"></a>
      </div>
      <div class="project-desc project-desc-m projectname">
      ${element.desc}
      </div>
      <div class="projectname">
      <div class="involvement">Involvement: </div>
      <div class="involement-desc">
          ${element.involement}
      </div>

      <div class="involvement">Status; </div>
            <div class="involement-desc">
                
               ${element.achieve}       
               
               
               </div>
               </div>
     
      <div class="p-0 my-4 ceo-main-div ceo" >
          <div class="ceo-div">
             <img src="${element.mobileceo}" style="width: 9.1rem;
             height: 9.1rem;
             position: absolute;
             top: -23px;
             left: 32%;">

          </div>
          <div class="comment-div mt-5">
             <div class="comment-text">
             ${element.ceocomment}
             </div>
             <div class="ceo-name">
${element.ceoname}
             </div>
             <div class="address-text pb-1">
${element.ceoaddress}       
      </div>
          </div>
        </div>
    </div>
    
  </div>`;
    }

    text = text + project;
  }
  document.getElementById("roll").innerHTML = text;
  document.getElementById("rollm").innerHTML = text;
}

function openNav() {
  if (document.getElementById("myNav").style.width == "100%") {
    document.getElementById("myNav").style.width = "0%";
  } else {
    document.getElementById("myNav").style.width = "100%";
  }
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

async function submit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var type = document.getElementById("sel1").value;
  var message = document.getElementById("message").value;
  if (!name) {
    document.getElementById("nameError").style.display = "block";
    return;
  } else {
    document.getElementById("nameError").style.display = "none";
  }
  if (!email) {
    document.getElementById("emailError").style.display = "block";
    return;
  } else {
    document.getElementById("emailError").style.display = "none";
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
      document.getElementById("emailError").innerText = "Enter valid Email ID"
      document.getElementById("emailError").style.display = "block";
      return
    }
  }
  if (!type) {
    document.getElementById("typeError").style.display = "block";
    return;
  } else {
    document.getElementById("typeError").style.display = "none";
  }
  if (!message) {
    document.getElementById("messageError").style.display = "block";
    return;
  } else {
    document.getElementById("messageError").style.display = "none";
  }
  var obj = { name: name, email: email, type: type, message: message }
 

  console.log(obj.name)
  const response = await fetch('https://siyatechventures.com/siyatechventures/index.php/WebsiteContact/addWebsiteContact', {
    method: 'POST',
    body:JSON.stringify(obj)  
  
  });


  document.getElementById("successmsg").style.display = "block";
   document.getElementById("name").value="";
   document.getElementById("email").value="";
 document.getElementById("message").value="";
  
}
