
var header= document.getElementById("header");
            var ms= document.getElementById("BUGATI");
            var m3= document.getElementById("FERARI");
            var mx= document.getElementById("koenigsegg");
            var my= document.getElementById("MERCEDES");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");


            ms.onclick=function(){
                header.style.backgroundImage="url(https://newsroomcdn.bugatti.com/w_3200/3giaqcjtpfk3-01-bugatti-chiron-profilee-auction.jpg)";
                model.innerHTML="BUGATI ";
                mph.innerHTML="11s";
                speed.innerHTML="165 km/h";
                range.innerHTML="650 km";
            }

            
            m3.onclick=function(){
                header.style.backgroundImage="url(https://media.wired.com/photos/5926764eaf95806129f4f85d/master/pass/ferrari_812-Superfast_TA.jpg)";
                model.innerHTML="FERARI";
                mph.innerHTML="11.2s";
                speed.innerHTML="190 km/h";
                range.innerHTML="600 km";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://www.carscoops.com/wp-content/uploads/2023/11/2023-Koenigsegg-Jesko-1024x576.jpg)";
                model.innerHTML="koenigsegg"
                mph.innerHTML="2.5s";
                speed.innerHTML="155 km/h";
                range.innerHTML="550 km";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://www.hindustantimes.com/ht-img/img/2023/08/19/550x309/new_car_1692424347746_1692424348006.png)";
                model.innerHTML="MERCEDES";
                mph.innerHTML="30.3s";
                speed.innerHTML="117 km/h";
                range.innerHTML="520 km";
            }
