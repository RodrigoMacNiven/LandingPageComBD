window.addEventListener('load', ()=>{
    document.getElementById("formsEbook").addEventListener('submit',(e)=>{
        e.preventDefault();

        const valEmail = document.querySelector("input[name=email]").value;
        const valTel = document.querySelector("input[name=tel]").value;

        const regex = new RegExp("([(]?\d{2,3}[)]?)?([-]?[\s])?[0-9]")

        // alert(regex.test(valTel))

        if(valEmail.indexOf("@gmail.com")==-1 && valEmail.indexOf("@outlook.com")==-1){
            alert("O e-mail está errado!")

        }else if(!regex.test(valTel) || (valTel.replace(/\D/g,"").length != 11 && valTel.replace(/\D/g,"").length != 12)){
                alert("O telefone está errado. Coloque XXX-XXXXX-XXXX ou XX-XXXXX-XXXX")
        }else{
            alert("Telefone correto!")
        }
    })
})