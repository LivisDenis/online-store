import React, {useContext} from 'react';
import {ListGroup} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <ListGroup className='flex-row flex-wrap gap-2'>
            {device.brands.map(brand =>
                <ListGroup.Item
                    key={brand.id}
                    variant="secondary"
                    className='border rounded'
                    style={{cursor: 'pointer'}}
                    active={brand.id === device.selectedBrand.id}
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default BrandBar;