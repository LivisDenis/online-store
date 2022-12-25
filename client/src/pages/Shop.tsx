import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';
import { useBearStore } from '../store/store';

const Shop = () => {
  const { setBrands, setDevices, page, setTotalCount, selectedBrand, setTypes, selectedType } =
    useBearStore();

  useEffect(() => {
    fetchTypes().then((data) => setTypes(data));
    fetchBrands().then((data) => setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(selectedType?.id, selectedBrand?.id, page, 2).then((data) => {
      setDevices(data.rows);
      setTotalCount(data.count);
    });
  }, [page, selectedType, selectedBrand]);

  return (
    <Container className='mt-5'>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
