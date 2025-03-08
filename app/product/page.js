async function productList() {
    let response = await fetch("https://dummyjson.com/products");
    console.log(response)
    let data = await response.json();
    return data.products;
}

export default async function Product(){
    let products = await productList(); 
    return(
        <div>
            <h1>Product list</h1>
            {
                products.map((item)=>
                    <h1>Name:{item.title}</h1> 
                )
            }

        </div>
    )
}