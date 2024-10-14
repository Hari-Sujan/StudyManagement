document.addEventListener("DOMContentLoaded", function () {
  // Remove the messages after 5 seconds (5000 milliseconds)
  setTimeout(function () {
    var messageList = document.getElementById("message-list");
    if (messageList) {
      messageList.style.display = "none";
    }
  }, 2000); // 5000ms = 5 seconds
});
