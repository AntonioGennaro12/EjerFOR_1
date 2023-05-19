/* imprime 10 veces HOLA!! */
const MAX_ITER      = 10;
const MAX_ITER_2    = 90;

for (let i= 0 ; i< MAX_ITER; i++ ){
    console.log ("HOLA!!! -" +(i+1));
}

for (let i=MAX_ITER; i< MAX_ITER_2; i++ ){
    console.log ("HOLA!!! -" +(i+1+MAX_ITER));
}

