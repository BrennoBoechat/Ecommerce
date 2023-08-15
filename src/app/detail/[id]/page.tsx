

interface ProductPros {
    params: {
        id: string;
    }
}

export default function Detail ({params}: ProductPros) {
    
    return (
        <h1>Product: {params.id}</h1>
    )
}