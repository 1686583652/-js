window.onload = function () {
  var name = document.querySelector("#msgName")
  var msg = document.querySelector("#msgContent")
  var btn = document.querySelector("#submit")
  var tbody = document.getElementById("tbody")
  var item = new Map()
  console.dir(btn)
  btn.addEventListener("click", submit)

  function submit(e) {
    e.preventDefault()
    var str = ""
    var pulish = name.value
    var content = msg.value
    item.set(pulish, content)
    for (let [key, value] of item) {
      str += `<tr>
        <td id="author">${key}</td>
        <td id="message">${value}</td>
      </tr>`
    }
    console.log(str)
    tbody.innerHTML = str
    name.value = ""
    msg.value = ""
  }
}