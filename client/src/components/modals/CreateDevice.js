import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('typeId', device.selectedType.id)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => {
            onHide()
            setName('')
            setPrice(0)
        })
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Добавить устройство</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {device.selectedType.name || 'Выбрать тип'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                device.types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedType(type)}
                                        key={type.id}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-4'>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {device.selectedBrand.name || 'Выбрать бренд'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                device.brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => device.setSelectedBrand(brand)}
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </Dropdown.Item>
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите название устройства...'
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-4'
                        placeholder='Введите цену устройства...'
                        type='number'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        className='mt-4'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button onClick={addInfo}>Добавить новое свойство</Button>
                    {
                        info.map(item =>
                            <Row key={item.number} className='mt-4'>
                                <Col md={4}>
                                    <Form.Control
                                        type='text'
                                        placeholder='Введите название устройства...'
                                        value={item.title}
                                        onChange={(e) => changeInfo('title', e.target.value, item.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        type='text'
                                        placeholder='Введите описание устройства...'
                                        value={item.description}
                                        onChange={(e) => changeInfo('description', e.target.value, item.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => removeInfo(item.number)}>Удалить</Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Закрыть</Button>
                <Button variant="primary" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;