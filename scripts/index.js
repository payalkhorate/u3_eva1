//store the products array in localstorage as "data"
function Product(a,b,c,d){
    this.brand=a;
    this.name=b;
    this.price=c;
    this.image=d; 
} 


function storeData(e){
    e.preventDefault(); 
    let form=document.getElementById("product_form");
    let brand= form.product_brand.value;
    let name= form.product_name.value;
    let price= form.product_price.value;
    let image= form.product_image.value;

    let s1= new Product(brand, name, price, image )

    let data = JSON.parse(localStorage.getItem("product"))|| [];

    data.push(s1);

    localStorage.setItem("products",JSON.stringify(data));

    console.log(s1);
 } 

 function calculate(){
    let data = JSON.parse(localStorage.getItem("product"))|| [];
    let obj={}

    for (let i=0; i<data.length; i++)
    {
        if(!obj[data[i].brand]){
            obj[data[i].brand]=1
        }
    }
    console.log(obj)
 }
 calculate();