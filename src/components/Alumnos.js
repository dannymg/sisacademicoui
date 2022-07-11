import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

export default function Alumnos() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "cedula",
      headerName: "Cedula",
      flex: 1,
    },
    {
      field: "nombre",
      headerName: "Nombre",
      flex: 1,
    },
    {
      field: "apellido",
      headerName: "Apellido",
      flex: 1,
    },
    {
      field: "ciclo_cursado",
      headerName: "Ciclo Cursado",
      type: "number",
      flex: 1,
    },
    {
      field: "carrera_id",
      headerName: "Carrera",
      flex: 1,
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/alumno")
      .then(function (response) {
        // handle success

        const dataFormatted = (response.data || []).map((alumno, index) => {
          return {
            ...alumno,
            id: index,
          };
        });
        console.log(dataFormatted);
        setRows(dataFormatted);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}
