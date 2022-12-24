import React from 'react';
import {Button, Container, Image} from "react-bootstrap";

const Basket = () => {
    return (
        <Container className='mt-5'>
            {/*{basket.map((item, i) =>*/}
                <div
                    // style={{background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    className='d-flex justify-content-between align-items-center border border-dark p-2 mt-4'
                >
                    <Image height={80} width={80}/>
                    <div className='d-flex gap-4'>
                        <span>name</span>
                        <span>price</span>
                        <span>year</span>
                    </div>
                    <Button className='border bg-danger'>Удалить</Button>
                </div>
            {/*)}*/}
            <div className='d-flex align-items-center justify-content-end gap-4 border border-dark p-3 mt-4'>
                <span>totalCount</span>
                <span>totalPrice</span>
                <Button>Купить</Button>
            </div>
        </Container>
    );
};

export default Basket;