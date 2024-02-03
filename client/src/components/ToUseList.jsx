import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
import { Link } from 'react-router-dom';
import "./ToUseList.css";

function ToUseList() {

    let data = [];


    return (
        <div>
            <p>À utiliser au plus vite...</p>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Aliment</TableCell>
                        <TableCell>Date d'expiration</TableCell>
                        <TableCell>Nombre de jours restants</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.length === 0 &&
                        <div id="emptyMessage" >
                            <p>Aucun élément dans votre liste</p>
                            <Link id="emptyListLink" to="/inventory">Ajouter des aliments</Link>
                        </div>}
                </TableBody>
            </Table>
        </div>
    )
}

export default ToUseList;