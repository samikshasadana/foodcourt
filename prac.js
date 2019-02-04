function plus1()

{
var x=document.getElementById("i1").innerHTML;

var y=parseInt(x);

y=y+1;

document.getElementById("i1").innerHTML=y;

}

function minus1()

{
var x=document.getElementById("i1").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i1").innerHTML=y;

else{
y=y-1;
document.getElementById("i1").innerHTML=y;}

}

function plus2()

{
var x=document.getElementById("i2").innerHTML;

var y=parseInt(x);

y=y+1;

document.getElementById("i2").innerHTML=y;

}

function minus2()

{
var x=document.getElementById("i2").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i2").innerHTML=y;

else{
y=y-1;
document.getElementById("i2").innerHTML=y;
}

}


function plus3()

{
var x=document.getElementById("i3").innerHTML;

var y=parseInt(x);

y=y+1;

document.getElementById("i3").innerHTML=y;

}

function minus3()

{
var x=document.getElementById("i3").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i3").innerHTML=y;

else{
y=y-1;
document.getElementById("i3").innerHTML=y;
}

}
function plus4()

{
var x=document.getElementById("i4").innerHTML;

var y=parseInt(x);

y=y+1;

document.getElementById("i4").innerHTML=y;

}

function minus4()

{
var x=document.getElementById("i4").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i4").innerHTML=y;

else{
y=y-1;
document.getElementById("i4").innerHTML=y;
}

}

function plus5()

{
var x=document.getElementById("i5").innerHTML;

var y=parseInt(x);

y=y+1;
document.getElementById("i5").innerHTML=y;

}

function minus5()

{
var x=document.getElementById("i5").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i5").innerHTML=y;

else{
y=y-1;
document.getElementById("i5").innerHTML=y;
}

}

function plus6()

{
var x=document.getElementById("i6").innerHTML;

var y=parseInt(x);

y=y+1;

document.getElementById("i6").innerHTML=y;

}

function minus6()

{
var x=document.getElementById("i6").innerHTML;

var y=parseInt(x);

if(y==0)
document.getElementById("i6").innerHTML=y;

else{
y=y-1;
document.getElementById("i6").innerHTML=y;
}

}

function total()
{
var t1=document.getElementById("i1").innerHTML;

var t2=document.getElementById("i2").innerHTML;

var t3=document.getElementById("i3").innerHTML;

var t4=document.getElementById("i4").innerHTML;

var t5=document.getElementById("i5").innerHTML;

var t6=document.getElementById("i6").innerHTML;

var t=t1*50+t2*40+t3*80+t4*1200+t5*40+t6*50;

alert("Your total is "+t);
document.getElementById("i1").innerHTML=0;

document.getElementById("i2").innerHTML=0;

document.getElementById("i3").innerHTML=0;

document.getElementById("i4").innerHTML=0;

document.getElementById("i5").innerHTML=0;

document.getElementById("i6").innerHTML=0;
} 
