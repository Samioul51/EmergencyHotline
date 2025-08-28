// Task-4

const favs=document.querySelectorAll(".favourite");

for(const fav of favs){
        fav.addEventListener("click",function(e){
        const curHeart=document.getElementById("curHeart");
        let heartAmount=parseInt(curHeart.innerText);
        heartAmount++;
        curHeart.innerText=heartAmount.toString();
    });
}

//Task-5

const calls=document.querySelectorAll(".call");
const coins=document.getElementById("coin");

for(const call of calls){
    call.addEventListener("click",function(e){
        e.preventDefault();
        let curCoins=parseInt(coins.innerText);
        if(curCoins>=20){
            const superParent=call.parentElement.parentElement;
            const title=superParent.querySelector(".title");
            const number=superParent.querySelector(".number");
            console.log(number);
            alert("📞 Calling "+title.innerText+" "+number.innerText+"...");
            curCoins-=20;
            coins.innerText=curCoins.toString();
        }
        else
            alert("You don't have enough coins. You need at least 20 coins to make a call.");
    });
}
