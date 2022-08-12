function ageInDays() {
    var birthYear = document.getElementById("years").value;
    var message = document.getElementById("message");
    if (birthYear==''){
        message.innerHTML = "Please Fill The Field Correctly..."
        message.style.color = "#f0101f";
    } else{
    const d = new Date();
    let year = d.getFullYear();
    
    var bYear = (year - birthYear) * 365;
    
  
    message.textContent = "You are " + bYear + " " + "days old...";
    message.style.color = "#f0101f";
  }
};
  function reset() {
    document.getElementById("message").textContent = "";
    document.getElementById("years").value = "";
  }
