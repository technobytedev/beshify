document.getElementById("alert").style.display = "none";



const beshifyBtn = document.getElementById("beshifyBtn");
beshifyBtn.addEventListener("click", beshify);

function beshify(){
    document.getElementById("alert").style.display = "none";

    var string = document.getElementById('phrase').value;
    var lis = string.split(" ");
    string =  lis.join(" 🤸 ");
    document.getElementById('beshified_phrase').innerHTML = string;
    var string = document.getElementById('phrase').value = '';


}


const copy = document.getElementById("copy");
copy.addEventListener("click", copyText);

function copyText() {


  var copyText = document.getElementById("beshified_phrase").innerHTML;
  

  navigator.clipboard.writeText(copyText)
    .then(() => {

        document.getElementById("alert").style.display = "";

    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });
}


const clear = document.getElementById("clear");
clear.addEventListener("click", clearText);

function clearText() {


 document.getElementById("phrase").value = '';
  

}
 
 


 
 