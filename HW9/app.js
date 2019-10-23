async function go() {
    const p1 = fetch(''); 
    const p2 = fetch ('').then(r => r.json()); //await waits for the one previous 
    const res = Promise.all;;(p1, p2); 
    console.log(res); 
    const dataPromises = res.map(r => r.json()); 
}

go(); 

async function getData() {

}

getData['wesbo', 'stolinski']; 



