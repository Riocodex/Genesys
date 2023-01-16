var taskList = document.getElementById("task-list");

function addTask() {
  var task = document.getElementById("task").value;
  var li = document.createElement("li");
  li.className = "task";
  li.appendChild(document.createTextNode(task + " "));
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  taskList.appendChild(li);
  document.getElementById("task").value = "";
  var close = document.getElementsByClassName("close");
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
