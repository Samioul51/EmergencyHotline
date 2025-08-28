// Task-4

const favs=document.querySelectorAll(".favourite");

for(const fav of favs){
    fav.addEventListener("click",function(e){
        e.preventDefault();
        const curHeart=document.getElementById("curHeart");
        let heartAmount=parseInt(curHeart.innerText);
        heartAmount++;
        curHeart.innerText=heartAmount.toString();
    });
}

//Task-5 and Task-6

const calls=document.querySelectorAll(".call");
const coins=document.getElementById("coin");
const callContainer=document.querySelector(".call-container");
const clearHistory=document.querySelector(".clearHistory");

clearHistory.addEventListener("click",function(){
    callContainer.innerHTML="";
});

for(const call of calls){
    call.addEventListener("click",function(e){
        e.preventDefault();
        let curCoins=parseInt(coins.innerText);
        if(curCoins>=20){
            const superParent=call.parentElement.parentElement;
            const title=superParent.querySelector(".title");
            const number=superParent.querySelector(".number");
            alert("📞 Calling "+title.innerText+" "+number.innerText+"...");
            curCoins-=20;
            coins.innerText=curCoins.toString();

            //Task-6 started
            const innerDiv=document.createElement("div");
            const serviceName=document.createElement("p");
            const serviceNumber=document.createElement("p");
            serviceName.innerText=title.innerText;
            serviceNumber.innerText=number.innerText;
            innerDiv.classList.add("flex","flex-col","gap-[4px]");
            serviceName.classList.add("font-semibold","text-[18px]");
            serviceNumber.classList.add("text-[18px]","text-[#808080]");
            innerDiv.appendChild(serviceName);
            innerDiv.appendChild(serviceNumber);
            const time=new Date();
            let hours=time.getHours();
            let mins=time.getMinutes();
            let seconds=time.getSeconds();
            let dummy,counter1=0,counter2=0;
            if(hours>12){
                hours%=12;
                dummy=" PM";
            }
            else
                dummy=" AM";
            if(mins<10)
                counter1=1;
            if(seconds<10)
                counter2=1;
            const timePara=document.createElement("p");
            hours=hours.toString();
            mins=mins.toString();
            seconds=seconds.toString();
            if(counter1)
                mins="0"+mins;
            if(counter2)
                seconds="0"+seconds;
            timePara.innerText=hours+":"+mins+":"+seconds+dummy;
            const outerDiv=document.createElement("div");
            outerDiv.appendChild(innerDiv);
            outerDiv.appendChild(timePara);
            outerDiv.classList.add("flex","justify-between","items-center","rounded-[8px]","bg-[#fafafa]","mb-[8px]","p-[16px]");
            callContainer.appendChild(outerDiv);
        }
        else
            alert("You don't have enough coins. You need at least 20 coins to make a call.");
    });
}

//Challenge Tasks

const copyBtn=document.querySelectorAll(".copyCount");
const curCopyCount=document.querySelector(".curCopyCount");

console.log(copyBtn);
console.log(curCopyCount);

for(const copy of copyBtn){
    copy.addEventListener("click",function(e){
        e.preventDefault();
        let copyAmount=parseInt(curCopyCount.innerText);
        copyAmount++;
        curCopyCount.innerText=copyAmount.toString();
        const superParent=copy.parentElement.parentElement;
        const number=superParent.querySelector(".number");
        alert("Copied Number: "+number.innerText);
        navigator.clipboard.writeText(number.innerText);
    });
}
