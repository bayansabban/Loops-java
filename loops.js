// alert ("")
var welcom = prompt("where do you want to go?")

while (welcom!="petra" && welcom != "aqaba" ){
    welcom= prompt("where do you want to go?")
}

var img;

if (welcom=="petra"){
    img="<img src='https://www.petra.gov.jo/upload/1608729608372.jpeg'>";
}
else{
    img = "<img src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fd/4e/aqaba.jpg?w=1100&h=700&s=1'>"
}
var x= prompt("how many times?")
for (i = 0; i < x; i++){
    document.write(img)
}
