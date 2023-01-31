import { useState } from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/shop.css';
import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {

    const [productsData, setProductsData] = useState(products);

    const handleFilter = (e) => {
        const filterValue = e.target.value;

        if (filterValue === 'all' || filterValue === 'Filter by category') {
            setProductsData(products)
        } else if (filterValue !== '') {
            const filterProducts = products.filter((item) => item.category === filterValue)

            setProductsData(filterProducts)
        }
    }

    const sortByPrice = (e) => {
        const sortValue = e.target.value;

        switch (sortValue) {
            case 'Ascending':
                const ascendingOrder = products.sort((a,b) => a.price - b.price);
                setProductsData(ascendingOrder);
                break;
            case 'Descending':
                const descendingOrder = products.sort((a,b) => b.price - a.price);
                setProductsData(descendingOrder);
                break;
            default:

        }
    }
    

    const handleSearch = (e) => {
        const searchTerm = e.target.value;

        const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts);
    }

    return (
        <Helmet title='Shop'>
            <CommonSection title='Product'/>

            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Filter by category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className="text-end">
                            <div className="filter__widget">
                                <select onChange={sortByPrice}>
                                    <option>Sort by</option>
                                    <option value="Ascending">Ascending</option>
                                    <option value="Descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className="search__box">
                                <input type="text" placeholder="Search..." onChange={handleSearch}/>
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? <h1 className="text-center">No products are found!</h1> : <ProductsList data={productsData}/>
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Shop