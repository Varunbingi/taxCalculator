
        const submit=document.getElementById("sumbit");
        const reset=document.getElementById("reset");
       
        
        sumbit.addEventListener('click',function(){
        
            let amount=document.getElementById("amount").value;
            let percentage=document.getElementById("percentage").value;
            let demo=document.getElementById("demo");
            if(amount>0&&percentage>0){
                let value1=amount*(percentage/100);
                let value2=parseInt(amount)+value1;
                document.getElementById("tax").value=value1;
                document.getElementById("total").value=value2;
            }
            else{
                demo.innerText="you may not entered amount or percentage";
            }
        });
        reset.addEventListener('click',function(){
            document.getElementById("amount").value='';
            document.getElementById("percentage").value='';
            document.getElementById("tax").value='';
            document.getElementById("total").value='';
            document.getElementById("demo").innerText='';
        })
