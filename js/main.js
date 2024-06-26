//Start My Project Tab Change --------------------------
const projectTabs = document.querySelector(".projectTabs");
const tabs = Array.from(document.querySelectorAll(".projectTab"));
const tabsWindows = Array.from(document.querySelectorAll("#tabsWindows"));

projectTabs.addEventListener("click", activeProjectTabsFunc);

function activeProjectTabsFunc(e) {
  let activeTab = "";
  //Active - Passive Tabs
  tabs.forEach(function (tab) {
    if (e.target.textContent == tab.children[0].id) {
      activeTab = e.target.textContent;
      tab.children[0].style.color = "rgb(31 41 55)";
      tab.children[0].style.backgroundColor = "white";
      tab.children[0].style.borderColor = "white";
      return activeTab;
    }
    else {
      tab.children[0].style.color = "rgb(107 114 128)";
      tab.children[0].style.backgroundColor = "rgb(31 41 55)";
      tab.children[0].style.borderColor = "rgb(107 114 128)";
    }
  })
  //Active - Passive Windows
  tabsWindows.forEach(function (window) {
    if (window.className.includes(activeTab)) {
      window.style.display = "block";
    }
    else {
      window.style.display = "none";
    }
  })
}
//End My Project Tap Change --------------------------


//Start Copy Code Button --------------------------
let copyArea = document.querySelector("#copyArea");
copyArea.addEventListener("click", copyCodeFunc);

function copyCodeFunc (e) {

  if (e.target.id=="copyCodeButton") {
    let codeText = e.target.parentElement.parentElement.children[1].children[0].innerText;
    let copyCodeButton =e.target;
    navigator.clipboard.writeText(codeText).then(()=>{
      copyCodeButton.innerHTML = "Copied!";
                  setTimeout(() => {
                      copyCodeButton.innerHTML = "<i class='bx bx-copy'></i>Copy";
                  }, 2000);
    }).catch(err => {
      copyCodeButton.innerHTML = "Couldn't copy! There is a problem";
                  setTimeout(() => {
                      copyCodeButton.innerHTML = "<i class='bx bx-copy'></i>Copy";
                  }, 2000);
    });
  }
}

//End Copy Code Button --------------------------


//Include function HTML page Start
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("includeHTML");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "PROJECT not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("includeHTML");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};
//Include function HTML page End