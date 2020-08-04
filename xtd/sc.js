function solve(m,mm,n){
    
    m++;
    mm++
    var rn1;
    var rn2;
    var pl = 0;
    var mi = 0;
    var t  = 0;
    var ln = "?";
    var re;
    
    for (;n > 0; n--){
        rn1 = random(m);
        rn2 = random(mm);
        t++;
        
        re = prompt("(" + ln + ")  \n" + t + ") " + rn1 + " * " + rn2 + " = ");
        
        if (re == (rn1 * rn2)){
            pl++;
            ln = "+";
        }else{
            mi++;
            ln = "-";
        }
    }
    
    //alert("  t" + t + "  +" + pl + "  -" + mi);
    document.write("t" + t + "  +" + pl + "  -" + mi + "<br/><br/>");
    
}

function random(max) {
    return Math.round(Math.random() * (0 - max) + max)
}


var nt = 0;//t
var nm = 0;//m1
var n2 = 0;//m2
var ns = 1;//tmr


if (nm == 0){
    nm = prompt("mx");
}
if (n2 == 0){
    n2 = prompt("m2");
}
if (nt == 0){
    nt = prompt("ti");
}

if (ns != 0){
    date = new Date(),  
                h = date.getHours(),
                m = date.getUTCMinutes(),
                s = date.getUTCSeconds();
    
    //alert(h + ' ' + m + ' ' + s);
    //document.writeln(h + ' ' + m + ' ' + s + "<br/>");
    
    solve(nm,n2,nt);

    date = new Date(),
                h2 = date.getHours(),
                m2 = date.getUTCMinutes(),
                s2 = date.getUTCSeconds();
    
    //alert(h2 + ' ' + m2 + ' ' + s2);
    //document.writeln(h2 + ':' + m2 + ':' + s2 + "<br/>");
    
    var rs; var rm; var rh;
    
    if ((h2 - h) > 23) {
        alert("error 88 " + h2 + " " + h);
    }else{
        if (s2 > s){
            rs = s2 - s;
        }else if(s2 == s){
            rs = 0;
        }else{
            rs = (s2 + (60 - s));
            m2--;
        }
        
        if (m2 > m){
            rm = m2 - m;
        }else if(m2 == m){
            rm = 0;
        }else{
            rm = (m2 + (60 - m));
            h2--;
        }
        
        if (h2 > h){
            rh = h2 - h;
        }else if(h2 == h){
            rh = 0;
        }else{
            rh = (h2 + (60 - h));
            //alert("error 96" + h2 + " " + h);
    }
    h = (h < 10) ? '0' + h : h,
    m = (m < 10) ? '0' + m : m,
    s = (s < 10) ? '0' + s : s,
    h2 = (h2 < 10) ? '0' + h2 : h2,
    m2 = (m2 < 10) ? '0' + m2 : m2,
    s2 = (s2 < 10) ? '0' + s2 : s2,
    rh = (rh < 10) ? '0' + rh : rh,
    rm = (rm < 10) ? '0' + rm : rm,
    rs = (rs < 10) ? '0' + rs : rs,
    document.writeln(h + ':' + m + ':' + s + "<br/>");
    document.writeln(h2 + ':' + m2 + ':' + s2 + "<br/>");
    document.writeln("<br/>" + rh + ' ' + rm + ' ' + rs + "<br/>");
}
}else{
    solve(nm,n2,nt);
}