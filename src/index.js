if (document.readyState !== "loading") {
  console.log("All good");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("All good now");
    initializeCode();
  });
}

function initializeCode() {
  document.getElementsByTagName("h2").className = "header";
  var addButton = document.getElementById("add-comment");
  var rmvButton = document.getElementById("remove-comments");

  addButton.addEventListener("click", function () {
    var comList = document.getElementById("list");
    var listItem = document.createElement("li");

    listItem.innerHTML = document.getElementById("txtArea").value;
    comList.appendChild(listItem);
    document.getElementById("txtArea").value = "";
  });

  rmvButton.addEventListener("click", function () {
    confirm("You sure?");
    document.getElementById("list").innerHTML = "";
  });
}
