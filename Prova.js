const TAX_PERCENT   = 21;
const CURRENCY      = "€";
const Component_1   = "Mouse";
const Component_2   = "Keyboard";
const Component_3   = "Monitor";
const Component_4   = "Cable";
const Component_5 = "Case and Hardware";
// Variables
var money_in_the_poket  = 5000;

var BundleProductName   = "Personal Computer (Desktop)";
var BundleProduct       = Component_1 + Component_2 + Component_3 + (4 * Component_4) + Component_5;

let PriceComponent_1    = 10;
let PriceComponent_2    = 20;
let PriceComponent_3    = 80;
let PriceComponent_4    = 4.50;
let PriceComponent_5 = 1000;

let QuantityComponent_1 = 1;
let QuantityComponent_2 = 1;
let QuantityComponent_3 = 1;
let QuantityComponent_4 = 1;
let QuantityComponent_5 = 2;

var prezzoFinale = PriceComponent_1 + PriceComponent_2 + PriceComponent_3 + (4* PriceComponent_4) + PriceComponent_5;
var prezzoConTasse = prezzoFinale + (prezzoFinale*21)/100;

if(numOrdine_1 - QuantityComponent_1 >= 0 ){
    if (prezzoFinale >= 99) {
        var speseSpedizione = 0;
        console.log('La spedizione è gratis');
        if (money_in_the_poket >= (prezzoConTasse + speseSpedizione)){	
            console.log('Ed hai abbastanza soldi');	
        }
        
        else if (money_in_the_poket < (prezzoConTasse + speseSpedizione)){
            
            console.log('Ma tanto non te lo puoi permettere');		
        }

    } 
    else if (prezzoProdotto < 99) {
        
        
        var speseSpedizione = 10;
        
        console.log('La spedizione è 10€');
        
        if (money_in_the_poket >= (prezzoConTasse + speseSpedizione)){
            
            console.log('Ed hai abbastanza soldi');		
        }
        
        else if (money_in_the_poket < (prezzoConTasse + speseSpedizione)){
            
            console.log('Ma tanto non te lo puoi permettere');		
        }

    } 
}
else if()
{

}}


function sum(a,b) {
	console.log(a+b);
}