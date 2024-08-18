import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import { useQuery } from "react-query";
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getData } from '../services/inventory.service';
import "./ToUseList.css";

function ToUseList() {
    const { user } = useAuth0();
    const [inventoryList, setInventoryList] = useState([]);
    const { data, isFetched } = useQuery("inventory", async () => await getData(user.email), {
        onSuccess: (data) => {
            console.log(data);
            return data;
        }
    });

    useEffect(() => {
        if (isFetched && data) {
            setInventoryList([...data]);
        }
    }, [data, isFetched]);

    return (
        <div className=''>
            <p className='title'>To be used as soon as possible...</p>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Food</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Expiration date</TableCell>
                            </TableRow>
                        </TableHead>
                        {!isFetched && inventoryList.length === 0 ? (<TableRow><TableCell colSpan={6}>No food found</TableCell></TableRow>) :
                            (<TableBody>
                                {inventoryList.map((item, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{item.ingredient}</TableCell>
                                        <TableCell>{item.foodType}</TableCell>
                                        <TableCell>{item.expirationDate}</TableCell>
                                    </TableRow>
                                ))}

                            </TableBody>)}
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default ToUseList;