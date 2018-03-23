var total=0;

var c=0;

var tc=0;

var itemnames = new Array();

var quantity = new Array();

var itemprices= new Array();

function add(item, price)
{
    var q = parseInt( prompt("Enter Quantity", "1"));

    var tprice = q * parseInt(price);

    itemnames[c] = item;

    quantity[c] = q;

    itemprices[c]=tprice;

    total = Math.round(total+tprice+(tprice*0.145));


    c=c+1;

    tc=tc+q;


}

function mycart() {
    if (total == 0)
    {
        alert("Empty Cart! Please add items to cart.");
    }
    else {
        alert("Total items : "+ tc +"  Totall bill : "+total);
    }

}

function checkout() {
    window.location = 'billing.html';
}
function myfunction(){
   

    var table=document.getElementById("myTable");
    
    for(i=0;i<c.length;i++)
    {
        document.write("hello");
    var row=table.insertRow(i+1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    cell1.innerHTML=itemprices[i];
    cell2.innerHTML=quantity[i];
    cell3.innerHTML=itemprices[i];
    
    }
    
    }
function paytm()
{
    var num = prompt("Enter the Number : ","+91");
    var otp = prompt("Enter the OTP");
    document.getElementById("p1").style.display = "block";
}
function bycash()
{
    document.getElementById('p1').style.display = "block";
}
function s()
{
    document.getElementById('p1').style.display = 'none';
}