import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/reducers";
import {TransactionsActionTypes} from "../../../types/transactionsType";
import {Box, Button} from "@chakra-ui/react";


let Pagination= () => {

    const dispatch = useDispatch()

    const onPageChanged = (page: number) => {
        dispatch({type: TransactionsActionTypes.FETCH_TRANSACTIONS, page})
    }

    const {count} = useSelector((state: RootState) => state.transactionsPage)

    let pagesCount = Math.ceil(count / 7);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / 7);
    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * 5 + 1;
    let rightPortionPageNumber = portionNumber * 5;


    return (
        <Box>
            {portionNumber > 1 &&
                <Button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</Button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <Button variant='outline'
                        key={p}
                        onClick={() => {
                            onPageChanged(p);
                        }}>{p}</Button>
                })}
            {portionCount > portionNumber &&
                <Button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</Button>}
        </Box>
    )
}

export default Pagination;