import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';

const Basket = () => (
    <Container className='mt-5'>
      {/* {basket.map((item, i) => */}
      <div
        // style={{background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
        className='d-flex justify-content-between align-items-center border-dark mt-4 border p-2'
      >
        <Image height={80} width={80} />
        <div className='d-flex gap-4'>
          <span>name</span>
          <span>price</span>
          <span>year</span>
        </div>
        <Button className='bg-danger border'>Удалить</Button>
      </div>
      {/* )} */}
      <div className='d-flex align-items-center justify-content-end border-dark mt-4 gap-4 border p-3'>
        <span>totalCount</span>
        <span>totalPrice</span>
        <Button>Купить</Button>
      </div>
    </Container>
  );

export default Basket;
