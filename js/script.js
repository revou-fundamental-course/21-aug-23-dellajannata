function validateForm(){
  const nama = document.forms["form"]["nama"].value;
  const email = document.forms["form"]["email"].value;
  const telp = document.forms["form"]["telp"].value;
  const message = document.forms["form"]["message"].value;

  if(nama=="" || email=="" || telp=="" || message==""){
    alert("Tidak boleh ada yang kosong");
    return false;
  }
  setForm(nama, email, telp, message);
  return false;
}

function setForm(nama, email, telp, message){
  document.getElementById("nama-show").innerHTML = nama;
  document.getElementById("email-show").innerHTML = email;
  document.getElementById("telp-show").innerHTML = telp;
  document.getElementById("message-show").innerHTML = message;

}