const Basket = () => (
  <div className='mt-5'>
    {/* {basket.map((item, i) => */}
    <div
      // style={{background: i % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
      className='d-flex justify-content-between align-items-center border-dark mt-4 border p-2'
    >
      <img height={80} width={80} alt='img' />
      <div className='d-flex gap-4'>
        <span>name</span>
        <span>price</span>
        <span>year</span>
      </div>
      <button className='bg-danger border'>Удалить</button>
    </div>
    {/* )} */}
    <div className='d-flex align-items-center justify-content-end border-dark mt-4 gap-4 border p-3'>
      <span>totalCount</span>
      <span>totalPrice</span>
      <button>Купить</button>
    </div>
  </div>
);

export default Basket;
