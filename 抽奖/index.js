let rollTime; // 定义定时器变量用来清除定时器
let time = 0; // 转动次数
let speed = 300; // 转动时间间隔
let times; // 总转动次数
var num=0;

// 开始按钮点击事件后开始抽奖
$("#start").on("click", function () {
  $("#award").text(""); //清空中奖信息
  times = parseInt(Math.random() * (20 - 30 + 1) + 20, 10); // 定义总转动次数，随机20-30次
  rolling();
});

// TODO：请完善此函数
function rolling() {
  time++; // 转动次数加1
  num++;
  if(num>8)num=1;
  for(var i=1;i<9;i++)
  {
    $(".li"+i).removeClass("active")
  }
  $(".li"+num).addClass("active")
  clearTimeout(rollTime);
  rollTime = setTimeout(() => {
    window.requestAnimationFrame(rolling); // 进行递归动画
  }, speed);

  // time > times 转动停止
  if (time > times) {
    clearInterval(rollTime);
    var v=$(".li"+num).text();
    document.getElementById("award").innerHTML="恭喜您抽中了"+v+"!!!";
    time = 0;
    return;
  }
}
