import React from 'react';
import {Pagination} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useBearStore} from "../store/store";

const Pages = () => {
    const {totalCount, page, setPage, limit} = useBearStore()
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination>
            {
                pages.map(i =>
                    <Pagination.Item
                        key={i}
                        active={page === i}
                        onClick={() => setPage(i)}
                    >
                        {page}
                    </Pagination.Item>
                )
            }
        </Pagination>
    );
};

export default Pages;