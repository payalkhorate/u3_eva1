function append(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let products_data = document.getElementById("products_data")
    data.forEach(function(el){
        // console.log(el);
        let div=document.createElement("div");
        let img=document.createAttribute("img")
        img.src=el.image;

        let p1=document.createElement("p")
        p1.innerText=el.brand;

        let p2=document.createElement("p")
        p2.innerText=el.name;

        let p3=document.createElement("p")
        p3.innerText=el.price;

        let btn=document.createElement("button");
        btn.innerText="REMOVE";
        btn.addEventListener("click",function(){
            this.remove(index);
        })

        div.append(img,p1,p2,p3,btn);
        products_data.append(div);

    })
   

}
append();
function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];

    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(el);
            localStorage.setItem("trash",JSON.stringify(trash));
        }
        else{
             return i !==index;
        }
    });
    console.log(newData);
}