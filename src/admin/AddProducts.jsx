import { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import {db, storage} from '../firebase.config';
import { getDownloadURL, ref, uploadBytesResumable  } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterShortDesc, setEnterShortDesc] = useState('');
    const [enterDescription, setEnterDescription] = useState('');
    const [enterCategory, setEnterCategory] = useState('');
    const [enterPrice, setEnterPrice] = useState('');
    const [enterProductImg, setEnterProductImg] = useState(null);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();
    const addProduct = async (e) => {
        e.preventDefault();
        setLoading(true);

        // add product to the firebase database

        try {

            const docRef = await collection(db, "products");

            const storageRef = ref(storage, `productImage/${Date.now() + enterProductImg.name}`);

            const uploadTask = uploadBytesResumable(storageRef, enterProductImg);

            uploadTask.on(() => {
                toast.error('images not uploaded!');
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await addDoc(docRef, {
                        productName: enterTitle,
                        shortDesc: enterShortDesc,
                        description: enterDescription,
                        category: enterCategory,
                        price: enterPrice,
                        imgURL: downloadURL
                    });
                });
            });

            setLoading(false);
            toast.success('Product successfully added!');
            navigate("/dashboard/all-products");
        } catch (error) {
            setLoading(false);
            toast.error("Product not added");
        }
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col className="m-auto text-center" lg="6">
                        {
                            loading ? <h4 className="pt-5">Loading...</h4> : <>
                            <h4 className="mb-5 d-block">Add Products</h4>
                            <Form onSubmit={addProduct}>
                                <FormGroup className="form__group">
                                    <span>Product title</span>
                                    <input type="text" className="form-control" required placeholder="Double sofa" value={enterTitle} onChange={e => setEnterTitle(e.target.value)}/>
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <span>Short Description</span>
                                    <input type="text" className="form-control" placeholder="Lorem..." value={enterShortDesc} onChange={e => setEnterShortDesc(e.target.value)}/>
                                </FormGroup>

                                <FormGroup className="form__group">
                                    <span>Description</span>
                                    <input type="text" className="form-control" required placeholder="Description..." value={enterDescription} onChange={e => setEnterDescription(e.target.value)}/>
                                </FormGroup>

                                <div className="d-flex align-items-center justify-content-between gap-5">
                                    <FormGroup className="form__group w-50">
                                        <span>Price</span>
                                        <input type="number" className="form-control" required placeholder="$100" value={enterPrice} onChange={e => setEnterPrice(e.target.value)}/>
                                    </FormGroup>

                                    <FormGroup className="form__group w-50">
                                        <span>Category</span>
                                        <select className="w-100 p-2" required value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                                            <option >Select category</option>
                                            <option value="chair">Chair</option>
                                            <option value="sofa">Sofa</option>
                                            <option value="mobile">Mobile</option>
                                            <option value="watch">Watch</option>
                                            <option value="wirelles">Wirelles</option>
                                        </select>
                                    </FormGroup>
                                </div>

                                <div>
                                    <FormGroup className="form__group">
                                        <span>Product Image</span>
                                        <input type="file" required onChange={e => setEnterProductImg(e.target.files[0])}/>
                                    </FormGroup>
                                </div>

                                <button className="buy__btn" type="submit">Add Product</button>
                            </Form>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AddProducts;