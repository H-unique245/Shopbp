
var cartData = JSON.parse(localStorage.getItem('added-cart')) || [];
// console.log(cartData)
// console.log(eval(10.45+651.36))
if(cartData.length>0){
    document.querySelector("#added").innerHTML="";

cartData.map(function(elem){
      console.log(elem);
    elem.itemPrice=elem.itemPrice.slice(1)
    console.log(elem.itemPrice)
    // document.querySelector("#added").innerHTML="";
      var card_body = document.createElement('div');
      card_body.setAttribute('class','card_body d-flex');
      card_body.style.height="250px"
  
      var image = document.createElement('img');
      image.setAttribute('src',elem.itemtImage);
      image.style.height="230px"
        
      var values = document.createElement('div');
      values.setAttribute("class","cartval")
    
      var h5 =document.createElement('h5');
          h5.innerText=elem.itemName;
      var p1 =document.createElement('p');
          p1.innerText=elem.itemDes;
     var price=document.createElement('p');
        price.innerText="₹"+ elem.itemPrice;
    var quant=document.createElement('h6');
        quant.innerText="Quantity : 1"
       var edit= document.createElement("button")
           edit.innerText="Edit";
           edit.style.marginRight = "15px";
        var move= document.createElement("button")
           move.innerText="Moove To Wishlist"
        values.append(h5,p1,price,quant,edit,move)
        card_body.append(image,values);
        document.querySelector("#added").append(card_body)
    
    });
}
    let total = 0;
    cartData.forEach(elem=>{
      eval(total += parseFloat(elem.itemPrice));
      console.log(total)
    })

    function round(num) {
        var m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
    }
     total = round(total);    

    document.querySelector(".total").innerText = "₹" + total;
    document.querySelector(".payment").innerText ="₹" + total;
    document.querySelector(".apply-coupon").addEventListener("click",applycoupon);
  var couponApplied = 0;
  function applycoupon(){
      if(couponApplied == 1){
          alert("Already Applied");
          return;
      }
      let couponCode = document.querySelector("#couponCodeNumber").value;
      if(couponCode == 'MASAI50' && couponApplied == 0){
          total = total/2;
          alert("coupon applied enjoy 50% OFF");
          document.querySelector("#couponCodeNumber").value="";
          document.querySelector(".total").innerText ="₹ "+ total;
          document.querySelector(".payment").innerText = "₹ "+total;
          localStorage.setItem('payableAmount',JSON.stringify(total));
          couponApplied = 1;
      }else{
          alert("Invalid coupon");
      }
  }
  function myfunction(){
      window.location.href="shipping.html";
      document.querySelector("#added").innerHTML="";
    }
    localStorage.setItem('payableAmount',JSON.stringify(total));
    var btn=document.querySelector(".check").addEventListener("click",myfunction);
