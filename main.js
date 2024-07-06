const button =document.getElementById("search");
const input =document.getElementById("city_input");
const cityname =document.getElementById("city_name");
const citytemp =document.getElementById("city_temp");
const citytime =document.getElementById("city_time");

// http://api.weatherapi.com/v1/current.json?key=8a135df41d7444da947153501240507&q=London&aqi=yes
async function getdata(cityname){
    const promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=8a135df41d7444da947153501240507&q=${cityname}&aqi=yes`);
    return promise.json()

}
button.addEventListener("click",async()=>{
    // console.log(input.value);
    const value =input.value;
    const result =await getdata(value);
    console.log(result);
     cityname.innerText =`${result.location.name} ,${result.location.region} ,${result.location.country}`;
     citytime.innerText = result.location.localtime;
     citytemp.innerText =`${result.current.temp_c} °C`;
})



input.addEventListener("keydown", async (event) => {
    if (event.key === 'Enter') {
        const value =input.value;
        const result =await getdata(value);
        console.log(result);
         cityname.innerText =`${result.location.name } ,  ${result.location.region } ,  ${result.location.country}`;
         citytime.innerText = result.location.localtime;
         citytemp.innerText =`${result.current.temp_c} °C`;
    }})