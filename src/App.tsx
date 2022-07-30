import * as React from "react"
import {
    Box, Button,
    ChakraProvider, Container, Flex, Input, Menu, MenuButton, MenuItem, MenuList,
    theme,
} from "@chakra-ui/react"
import {useDispatch, useSelector,} from "react-redux";
import {TriangleDownIcon} from "@chakra-ui/icons";
import {useEffect, useState} from "react";
import TableTransactions from "./components/TableTransactions/TableTransactions";
import {RootState} from "./store/reducers";
import {TransactionsActionTypes} from "./types/transactionsType";
import Import from "./Import/Import";
import Export from "./Export/Export";


export const App = () => {

    const dispatch = useDispatch();

    const {isLoading, page} = useSelector((state: RootState) => state.transactionsPage)

    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const filters = {
        status: ["Pending", "Completed", "Cancelled"],
        type: ["Refill", "Withdrawal"]
    }
    React.useEffect(() => {
        filter && dispatch({type: TransactionsActionTypes.FETCH_TRANSACTIONS_FILTER, filter})
    }, [filter])
    React.useEffect(() => {
        dispatch({type: TransactionsActionTypes.FETCH_TRANSACTIONS, page})
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <Box>
                <Input placeholder={'Search'} onChange={event => setSearch(event.target.value)} value={search}/>
                <Button onClick={() => dispatch({type: TransactionsActionTypes.SEARCH_TRANSACTIONS, search: search})
                }>Search</Button>
                <Container maxW={'container.xl'}>
                    <Flex justifyContent={'space-between'}>
                        <Box border='2px' borderColor='black' w={'30%'}>
                            <Box background={'blue.200'} borderBottom='2px' borderColor='black'>Transactions</Box>
                            <Box></Box>
                        </Box>
                        <Box border='2px' borderColor='black' w='100%'>
                            <Container maxW={'container.xl'}>
                                <Flex justifyContent='space-between'>
                                    <Box>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<TriangleDownIcon/>}>Status</MenuButton>
                                            <MenuList>
                                                {filters.status.map(status =>
                                                    <MenuItem key={status}
                                                              onClick={() => setFilter(status)}
                                                    >- {status}</MenuItem>)}
                                            </MenuList>
                                        </Menu>
                                        <Menu>
                                            <MenuButton as={Button} rightIcon={<TriangleDownIcon/>}>Type</MenuButton>
                                            <MenuList>
                                                {filters.type.map(type =>
                                                    <MenuItem key={type}
                                                              onClick={() => setFilter(type)}
                                                    >- {type}</MenuItem>)}
                                            </MenuList>
                                        </Menu>
                                    </Box>
                                    <Box justifyContent='space-around'>
                                        <Import/>
                                        <Export/>
                                    </Box>
                                </Flex>
                            </Container>
                            <TableTransactions/>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </ChakraProvider>
    )
}


