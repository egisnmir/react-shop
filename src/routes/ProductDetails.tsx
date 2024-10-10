import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductItem from "../components/products/ProductItem";
import { getProducts } from "../services/apiService";

interface IProductDetails {
    id: number,
    name: string,
    price: number
}

export default function ProductDetailsPage() {
    const params = useParams();
    const navigate = useNavigate();
    const [productDetails, setProductDetails] = useState<IProductDetails>();
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        let cancelled = false;

        getProducts().then((res) => {
            res.data.forEach((item: IProductDetails) => {
                if(item.id === parseInt(params.id ?? '0')) {
                    if(!cancelled) {
                        setProductDetails(item);
                        setLoaded(true);
                    }
                }
            });
        });

        return () => {
            cancelled = true;
        }
    }, [params]);

    return (
        <main>
            <h4>Product details page</h4>

            {loaded &&
                <>
                    <ProductItem
                        id={params.id}
                        name={productDetails?.name}
                        price={productDetails?.price}
                        noNav={true}>
                    </ProductItem>

                    <br />
                    <button onClick={() => navigate(-1)}>Return back</button>
                </>
            }
        </main>
        
    )
}
