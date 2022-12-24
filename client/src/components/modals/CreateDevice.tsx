import React, {useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {createDevice, fetchBrands, fetchTypes} from "../../http/deviceAPI.js";
import {useBearStore} from "../../store/store";

interface IInfo {
    title: string
    description: string
    number: number
}

interface IModalsProps {
    show: boolean
    onHide: () => void
}

const CreateDevice: React.FC<IModalsProps> = ({show, onHide}) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState<File>()
    const [info, setInfo] = useState<IInfo[]>([])

    const {setBrands, selectedBrand, setSelectedBrand, brands, types, setTypes, setSelectedType, selectedType} = useBearStore()

    useEffect(() => {
        fetchTypes().then(data => setTypes(data))
        fetchBrands().then(data => setBrands(data))
    }, [])

    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number: number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key: string, value: string, number: number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file!)
        formData.append('typeId', selectedType?.id!)
        formData.append('brandId', selectedBrand?.id!)
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
                            {selectedType?.name || 'Выбрать тип'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                types.map(type =>
                                    <Dropdown.Item
                                        onClick={() => setSelectedType(type)}
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
                            {selectedBrand?.name || 'Выбрать бренд'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                brands.map(brand =>
                                    <Dropdown.Item
                                        onClick={() => setSelectedBrand(brand)}
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
};

export default CreateDevice;