let btn = document.getElementById("btn");


btn.addEventListener("click",()=>{
    click();
})


async function click (){
    let select = document.getElementById("select");
    let out2 = document.getElementById("out2");
    let outimg = document.getElementById("outimg");
    getWeather();
    let type;
    if(select.value == 1){
        type = await getWeather();
        type = 25;
        console.log(type)
        if (type == 11){
            outimg.innerHTML = '<img src="m_1.png" alt="Description" width="80px" hight="160px">';
            out2.innerHTML = '天気が良く気温も高い今日には、<br>半袖＋ハーフズボンのセットがおすすめ。<br>半袖はメッシュ生地で通気性の良いものを選ぼう！';
        }
        else if(type == 12){
            outimg.innerHTML = '<img src="m_2.png" alt="Description" width="80px" hight="130px">';
            out2.innerHTML = '少し暑い今日には、<br>白色の半袖＋黒のゆったりズボンがおすすめ。<br>白色の服は光を反射してくれるから<br>暑くても大丈夫！';
        }
        else if(type == 13){
            outimg.innerHTML = '<img src="m_3.png" alt="Description" width="70px" hight="140px">';
            out2.innerHTML = '過ごしやすい天気の今日は、<br>薄い羽織物＋ジーンズがおすすめ。<br>暑くも寒くもないなら、おしゃれにいこう！';
        }
        else if(type == 14){
            outimg.innerHTML = '<img src="m_4.png" alt="Description" width="130px" hight="160px">';
            out2.innerHTML = '少し肌寒い今日には、<br>アウター＋インナー＋黒ズボンがおすすめ。<br>もし熱くなっても、<br>アウターを脱げば大丈夫！';
        }
        else if(type == 15){
            outimg.innerHTML = '<img src="m_5.png" alt="Description" width="130px" hight="160px">';
            out2.innerHTML = '天気はいいけど寒い<br>そんな今日には、<br>コート＋タートル＋厚めのズボンがおすすめ。<br>寒い時には重ね着あるのみ';
        }
        else if(type == 21){
            outimg.innerHTML = '<img src="m_6.png" alt="Description" width="90px" hight="160px">';
            out2.innerHTML = '湿度も気温も高い今日は<br>メッシュのシャツ＋ハーフズボンがおすすめ。<br>通気性を意識して服を選ぼう！';
        }
        else if(type == 22){
            outimg.innerHTML = '<img src="m_7.png" alt="Description" width="80px" hight="160px">';
            out2.innerHTML = 'じめじめしてて暑い今日には、<br>半袖シャツ＋ゆったりズボンがおすすめ。<br>シャツの隙間に風が通るのが気持ちいい！';
        }
        else if(type == 23){
            outimg.innerHTML = '<img src="m_8.png" alt="Description" width="80px" hight="160px">';
            out2.innerHTML = '過ごしやすい気温、でも少しじめじめしている今日は<br>半袖＋ストレートズボンがおすすめ。<br>湿度が高くても全然大丈夫！';
        }
        else if(type == 24){
            outimg.innerHTML = '<img src="m_9.png" alt="Description" width="80px" hight="160px">';
            out2.innerHTML = '少し肌寒く感じる今日には、<br>ジャージ長袖＋暖かめズボンがおすすめ。<br>体温が下がって風邪を引かないようにしよう！';
        }
        else if(type == 25){
            outimg.innerHTML = '<img src="m_10.png" alt="Description" width="80px" hight="160px">';
            out2.innerHTML = '気温が低く湿度が高い今日は<br>ジャケット＋裏起毛のズボンがおすすめ。<br>じめじめしてきても、ジャケットを脱げば大丈夫！';
        }
    }
    if(select.value == 2){
        type = await getWeather();
        console.log(type)
        if (type == 11){
            outimg.innerHTML = '<img src="w_1.png" alt="Description">';
            out2.innerHTML = '天気が良く気温も高い今日には、<br>半袖＋ハーフズボンのセットがおすすめ。<br>半袖はメッシュ生地で通気性の良いものを選ぼう！';
        }
        else if(type == 12){
            outimg.innerHTML = '<img src="w_2.png" alt="Description">';
            out2.innerHTML = '少し暑い今日には、<br>白色の半袖＋黒のゆったりズボンがおすすめ。<br>白色の服は光を反射してくれるから<br>暑くても大丈夫！';
        }
        else if(type == 13){
            outimg.innerHTML = '<img src="w_3.png" alt="Description">';
            out2.innerHTML = '過ごしやすい天気の今日は、<br>薄い羽織物＋ジーンズがおすすめ。<br>暑くも寒くもないなら、おしゃれにいこう！';
        }
        else if(type == 14){
            outimg.innerHTML = '<img src="w_4.png" alt="Description">';
            out2.innerHTML = '少し肌寒い今日には、<br>アウター＋インナー＋黒ズボンがおすすめ。<br>もし熱くなっても、<br>アウターを脱げば大丈夫！';
        }
        else if(type == 15){
            outimg.innerHTML = '<img src="w_5.png" alt="Description">';
            out2.innerHTML = '天気はいいけど寒い<br>そんな今日には、<br>コート＋タートル＋厚めのズボンがおすすめ。<br>寒い時には重ね着あるのみ';
        }
        else if(type == 21){
            outimg.innerHTML = '<img src="w_6.png" alt="Description">';
            out2.innerHTML = '湿度も気温も高い今日は<br>メッシュのシャツ＋ハーフズボンがおすすめ。<br>通気性を意識して服を選ぼう！';
        }
        else if(type == 22){
            outimg.innerHTML = '<img src="w_7.png" alt="Description">';
            out2.innerHTML = 'じめじめしてて暑い今日には、<br>半袖シャツ＋ゆったりズボンがおすすめ。<br>シャツの隙間に風が通るのが気持ちいい！';
        }
        else if(type == 23){
            outimg.innerHTML = '<img src="w_8.png" alt="Description">';
            out2.innerHTML = '過ごしやすい気温、でも少しじめじめしている今日は<br>半袖＋ストレートズボンがおすすめ。<br>湿度が高くても全然大丈夫！';
        }
        else if(type == 24){
            outimg.innerHTML = '<img src="w_9.png" alt="Description">';
            out2.innerHTML = '少し肌寒く感じる今日には、<br>ジャージ長袖＋暖かめズボンがおすすめ。<br>体温が下がって風邪を引かないようにしよう！';
        }
        else if(type == 25){
            outimg.innerHTML = '<img src="w_10.png" alt="Description">';
            out2.innerHTML = '気温が低く湿度が高い今日は<br>ジャケット＋裏起毛のズボンがおすすめ。<br>じめじめしてきても、ジャケットを脱げば大丈夫！';
        }
    }
    let btn2 = document.getElementById("btn2");
    btn2.innerHTML='<button onclick="def()"; class="btn btn-secondary">Revert to defaults</button>'
}

async function getWeather() {
    const apiKey = '48233ea65bd209703f84857502f30c0e'; // OpenWeatherMapのAPIキーをここに入力してください
    const city = document.getElementById("select2").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    const data = await response.json();
    
    const weatherDescription = data.weather[0].description;
    const temperature = data.main.temp;
    console.log(weatherDescription);
    console.log(temperature);
    let weatherDescriptiontext;
    let weatherDescription2;//天気を5段階に分割
    if(weatherDescription == "Clear" || weatherDescription == "Clouds" || weatherDescription == "few clouds" || weatherDescription == "scattered clouds" || weatherDescription == "Dust" || weatherDescription == "dust" || weatherDescription == "sand/dust whirls" || weatherDescription == "Sand" || weatherDescription == "Ash" || weatherDescription == "Tornado"){
        weatherDescriptiontext = "晴れ";//1
        if (temperature >= 35){weatherDescription2 = 11;}
        else if (temperature <=35 && temperature >=30){weatherDescription2 = 12;}
        else if (temperature <30 && temperature >=20){weatherDescription2 = 13;}
        else if (temperature <=20 && temperature >=15){weatherDescription2 = 14;}
        else if (temperature < 15){weatherDescription2 = 15;}
    }
    else{
        weatherDescriptiontext = "雨";//2
        if (temperature >= 35){weatherDescription2 = 21;}
        else if (temperature <35 && temperature >=30){weatherDescription2 = 22;}
        else if (temperature <30 && temperature >=20){weatherDescription2 = 23;}
        else if (temperature <20 && temperature >=15){weatherDescription2 = 24;}
        else if (temperature < 15){weatherDescription2 = 25;}
    }
    let out = document.getElementById("out");
    out.innerHTML = city+"の天気は"+weatherDescriptiontext+"で、気温は"+temperature+"℃です。";
    console.log(weatherDescription2);
    return weatherDescription2;
}

function def(){
    location.reload();
}