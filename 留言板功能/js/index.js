window.onload = function () {
  var name = document.querySelector("#msgName")
  var msg = document.querySelector("#msgContent")
  var btn = document.querySelector("#submit")
  var tbody = document.getElementById("tbody")
  var item = new Map()
  btn.addEventListener("click", submit)

  //添加留言板函数
  function submit(e) {
    e.preventDefault()
    var str = ""
    if (name.value && msg.value) {
      var pulish = name.value
      var content = msg.value
    } else {
      alert("字段不能为空")
      return
    }
    item.set(pulish, content)
    for (let [key, value] of item) {
      str += `<tr>
        <td class="key">${key}</td>
        <td>${value}</td>
        <td><button class="btn btn-success delete">删除</button></td>
      </tr>`
    }
    tbody.innerHTML = str
    name.value = ""
    msg.value = ""
    //删除按钮
    removeFn()
  }


  //删除功能函数
  function removeFn() {
    var remove = document.querySelectorAll(".delete")
    for (let j = 0; j < remove.length; j++) {
      remove[j].addEventListener("click", function () {
        var _name = document.querySelectorAll(".key")[j].innerHTML
        item.delete(_name)
        var target = document.querySelectorAll("tbody tr")[j]
        var parent = target.parentNode
        parent.removeChild(target)
      })
    }
  }

  //对输入内容做判断
}