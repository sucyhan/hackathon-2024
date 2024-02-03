import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Table from '@mui/material/Table';
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
                {data.length === 0 && (<TableRow><TableCell colSpan={6}>Aucun aliment trouvé</TableCell></TableRow>)}
                {data.length !== 0 && (data.map())}

            </Table>
        </div>
    )
}

export default ToUseList;