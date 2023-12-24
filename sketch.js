var sound1
function preload(){
  sound1 = loadSound("28994767_MotionElements_before-christmas-musicbox-slowlyver_preview.mp3") //先把音樂檔載入到sound1程式碼中
}

var face_colors = "dad7cd-a3b18a-588157-3a5a40-344e41".split("-").map(a=>"#"+a)
var eye_colors = "0a0908-22333b-eae0d5-c6ac8f-5e503f".split("-").map(a=>"#"+a)
// var pos_x=[200,500]
// var pos_y=[400,600]
// var sizes=[0.6,0.2]
// var colors =["#f4acb7","#cc8b86"]

var pos_x=[]
var pos_y= []
var sizes=[]
var colors=[]
var v_y=[] //  移動速度x軸
var v_x=[] //移動速度y軸
function setup() {
  createCanvas(windowWidth, windowHeight);
  // for(var i=0;i<20;i=i+1){
  //    drawface(face_colors[int(random(face_colors.length))]),eye_colors[int(random(eye_colors.length))],random(0.3,1.2)
  // }
}

function draw (){
  background("#efe6dd")
  for(var i=0;i<pos_x.length;i=i+1)
  {
    push()
     translate(pos_x[i],pos_y[i])
     drawface(colors[i],0,sizes[i])
    pop()
    pos_y[i]=pos_y[i] +v_y[i]
    //?????????????????????????????
    if(pos_y[i]>height ||pos_y[i]<0) //判斷有沒有碰到上下邊
    {
      pos_x.splice(i,1) //把碰到邊的陣列元刪除
      pos_y.splice(i,1)
      sizes.splice(i,1)
      colors.splice(i,1)
      v_y.splice(i,1)
    }
  }
}




function drawface(face_clr=255,eye_clr=0,size=1){ //255與0為預設的值

  push() //自行設定格式

   //translate(random(width),random(height)) //原點(0,0)移動到(200,200)
   scale(size)//
   fill(face_clr)

   //臉蛋
   ellipse(0,0,350)

   //眼睛
   fill("#ffffff")
   ellipse(0,-30,200,200)

   //眼球
   fill("#000000")
   ellipse(0,0,100,100)

   //眼珠
   fill("#ffffff")
   ellipse(-10,-10,20,20) 

   //嘴巴 
   fill("#ffb3c1")
   arc(0,90,-80,70,-0,PI) 
  
   //腮紅
   fill("#e5989b")
   ellipse(-100,60,50,30)
   ellipse(100,60,50,30)


pop() //原本設定的格式全部取消
}

//按下滑鼠播放音樂
function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }else{
    sound1.play();
  }
}

function mousePressed(){
  pos_x.push(mouseX)
  pos_y.push(mouseY)
  sizes.push(random(0.3,1))
  colors.push(face_colors[int(random(face_colors.length))])
  v_y.push(random(-1,1))
  
}

 