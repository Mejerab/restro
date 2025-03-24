const getData = () =>{
    const getData = localStorage.getItem('foods');
    if (getData) {
        return JSON.parse(getData);
    }
    else{
        return [];
    }
}

const storedData = (id, quant, price) =>{
    const cart = getData();
    const exist = cart.filter(item=>item.id !== id);
    if (exist) {
        exist.push({id, quant, price});
        localStorage.setItem('foods', JSON.stringify(exist));
    }
}
export {storedData, getData};