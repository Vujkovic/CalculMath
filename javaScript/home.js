

//nizovi 

let povrce = ['patlidzan','paprika','sangarepa', 'rotkvice'];
console.log(povrce);
console.log(povrce.pop());
console.log(povrce);
povrce.shift(); 
console.log(povrce);


// Objekti JavaScript ! 
let student = 
{  
    first_name:'Peter', 
    last_name:'Wegner',
    get_name : function()
    {
         return this.first_name;
    },
    get_spoji: function (rec) 
    {
         return this.last_name+ '\n' +this.first_name + rec ; 
    }

}

let recenica= 'Recenica'; 



function saberi () 
{
   let number1= parseInt( document.getElementById("polje1").value);
   let number2= parseInt(document.getElementById("polje2").value);
  

    //jednostavno smo dodelili vrednost polju !
   document.getElementById("rezultat").value = number2+number1;
}

function mnozi_matrice() 
{
   let vrsta1= [];
  vrsta1[0] =parseFloat(document.getElementById("00").value);
  vrsta1[1] =parseFloat(document.getElementById("01").value);
  vrsta1[2] =parseFloat(document.getElementById("02").value);

  let vrsta2=[] ;
  vrsta2[0]= parseFloat(document.getElementById("10").value);
  vrsta2[1]= parseFloat(document.getElementById("11").value);
  vrsta2[2]= parseFloat(document.getElementById("12").value);

  let vrsta3=[] ;
  vrsta3[0]= parseFloat(document.getElementById("20").value);
  vrsta3[1]= parseFloat(document.getElementById("21").value);
  vrsta3[2]= parseFloat(document.getElementById("22").value);


let kolonaMnozioca = [];
   
  kolonaMnozioca[0]=parseFloat( document.getElementById("000").value) ;
  kolonaMnozioca[1]=parseFloat( document.getElementById("111").value) ;
  kolonaMnozioca[2]=parseFloat( document.getElementById("222").value) ;


  document.getElementById("r00").value= vrsta1[0]*kolonaMnozioca[0] +vrsta1[1]*kolonaMnozioca[1]+vrsta1[2]*kolonaMnozioca[2];
  document.getElementById("r10").value= vrsta2[0]*kolonaMnozioca[0] +vrsta2[1]*kolonaMnozioca[1]+vrsta2[2]*kolonaMnozioca[2];
  document.getElementById("r20").value= vrsta3[0]*kolonaMnozioca[0] +vrsta3[1]*kolonaMnozioca[1]+vrsta3[2]*kolonaMnozioca[2];
}

function kvadratna_jednacina() 
{
   let X = [];
   let k = [];

   let broj_pod_korenom ; 
   k[0] = parseFloat(document.getElementById("a").value);
   k[1] = parseFloat(document.getElementById("b").value); 
   k[2] = parseFloat(document.getElementById("c").value);
   
   if (k[0]== 0) 
   {
      console.log('Ne mozete uneti 0 !!!');
      document.write("Ne mozete uneti 0 !!!")
   }
   else 
   {
      console.log(X[0]);

      broj_pod_korenom=(k[1]*k[1])-k[0]*k[2]*4;
      
   if (broj_pod_korenom<0)
      {
         
           let Re_x1, Im_X1;

          broj_pod_korenom = broj_pod_korenom*(-1) ;
          
          Re_x1 =((-1)*k[1])/(k[0]*2);
          
          Re_x1=Re_x1.toFixed(2);  
          Im_X1 = (Math.sqrt(broj_pod_korenom))/(k[0]*2);
          Im_X1=Im_X1.toFixed(2); 
         let x1 = Re_x1 + "+" + " ("+ Im_X1 +"i" +")";  
         let x2 = Re_x1 + "-" + " ("+ Im_X1 +"i"+")"; 
            X[0]= x1;
            X[1]= x2;
         
      }
 else 
     {
         X[0] = (((-1)*k[1]) + (Math.sqrt(broj_pod_korenom)))/(k[0]*2);
         X[1] = (((-1)*k[1]) - (Math.sqrt(broj_pod_korenom)))/(k[0]*2);
     }

      
      
      
      // X[0]= Math.sqrt(k[1]*k[1]-(k[0])*k[2]*4)/(k[0]*2);
       let  i=0 ; 
      do 
      {
         console.log(k[i]);
         ++i; 
      } while(i<3);
      
      console.log(X[0]); 
        document.getElementById("X1").value = X[0]; 
        document.getElementById("X2").value = X[1]; 
   }
}
function Mnozenje_matrica2x3_3x2() 
{
    let kolona1_m3x2 = []; 
    let kolona2_m3x2 = [];

    let vrsta1_m2x3 = [];
    let vrsta2_m2x3 = [];
   //kolona 1 
   kolona1_m3x2[0]= parseFloat(document.getElementById("M3x2_00").value) ;
   kolona1_m3x2[1]= parseFloat(document.getElementById("M3x2_10").value) ;
   kolona1_m3x2[2]= parseFloat(document.getElementById("M3x2_20").value) ;
   //kolona 2 
   kolona2_m3x2[0]= parseFloat(document.getElementById("M3x2_01").value) ;
   kolona2_m3x2[1]= parseFloat(document.getElementById("M3x2_11").value) ;
   kolona2_m3x2[2]= parseFloat(document.getElementById("M3x2_21").value) ;
     
   // vrsta 1 mnozioc-matrice 
    vrsta1_m2x3[0]=parseFloat(document.getElementById("M2x3_00").value);
    vrsta1_m2x3[1]=parseFloat(document.getElementById("M2x3_01").value);
    vrsta1_m2x3[2]=parseFloat(document.getElementById("M2x3_02").value);
   // vrsta 2 mnozioc-matrice 
    vrsta2_m2x3[0]=parseFloat(document.getElementById("M2x3_10").value);
    vrsta2_m2x3[1]=parseFloat(document.getElementById("M2x3_11").value);
    vrsta2_m2x3[2]=parseFloat(document.getElementById("M2x3_12").value);
    
   //proracun 

   document.getElementById("M2_3x3_00").value = kolona1_m3x2[0]*vrsta1_m2x3[0] +kolona2_m3x2[0]*vrsta2_m2x3[0];
   document.getElementById("M2_3x3_01").value = kolona1_m3x2[0]*vrsta1_m2x3[1] +kolona2_m3x2[0]*vrsta2_m2x3[1];
   document.getElementById("M2_3x3_02").value = kolona1_m3x2[0]*vrsta1_m2x3[2] +kolona2_m3x2[0]*vrsta2_m2x3[2];
   document.getElementById("M2_3x3_10").value = kolona1_m3x2[1]*vrsta1_m2x3[0] +kolona2_m3x2[1]*vrsta2_m2x3[0];
   document.getElementById("M2_3x3_11").value = kolona1_m3x2[1]*vrsta1_m2x3[1] +kolona2_m3x2[1]*vrsta2_m2x3[1];
   document.getElementById("M2_3x3_12").value = kolona1_m3x2[1]*vrsta1_m2x3[2] +kolona2_m3x2[1]*vrsta2_m2x3[2];
   document.getElementById("M2_3x3_20").value = kolona1_m3x2[2]*vrsta1_m2x3[0] +kolona2_m3x2[2]*vrsta2_m2x3[0];
   document.getElementById("M2_3x3_21").value = kolona1_m3x2[2]*vrsta1_m2x3[1] +kolona2_m3x2[2]*vrsta2_m2x3[1];
   document.getElementById("M2_3x3_22").value = kolona1_m3x2[2]*vrsta1_m2x3[2] +kolona2_m3x2[2]*vrsta2_m2x3[2];


}

function Postupak () 
{
   var a = document.getElementById("a").value;
   var b = document.getElementById("b").value;
   var c = document.getElementById("c").value;
   
   var a1 =parseFloat(document.getElementById("a").value);
   var b1 =parseFloat(document.getElementById("b").value);
   var c1 =parseFloat(document.getElementById("c").value);

   var b_sqr = b1*b1; 
   var d = 4*a1*c1; 
   var a2 = 2*a1; 

document.getElementById("b-koeficijent").textContent  = b;
document.getElementById("b1-koeficijent").textContent = b;
document.getElementById("a-koeficijent").textContent  = a; 
document.getElementById("c-koeficijent").textContent  = c;
document.getElementById("a2-koeficijent").textContent = a;

//Treca formula 
document.getElementById("b3-koeficijent").textContent  = b;
document.getElementById("sqr_b").textContent  = b_sqr;
document.getElementById("ac4").textContent  = d;
document.getElementById("a2dole").textContent  = a2;


document.getElementById("primer").textContent  = ("55") ;
//preslikavanje jednog diva u drugi !
document.getElementById("KvadratPostupak").innerHTML = document.getElementById("kvadOpsta").innerHTML;  
//document.getElementById("KvadratPostupak").innerHTML = <br/>; 
//document.getElementById("KvadratPostupak").innerHTML = document.getElementById("kvadOpsta1").innerHTML;  



}
function vrati () { return 2 ;  }
vrati() ; 