import { Button, Container, Grid, TextField } from "@mui/material";
import { useState } from "react";

const Home = () => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    lastname: "",
    address: "",
    phone: "",
    birth: "",
    dni: "",
  })

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSendData = (event) => {
    event.preventDefault();

    console.log(values)
  }
  return (
    <Container>
      <form action="" onSubmit={(e) => handleSendData(e)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Home</h1>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su correo" name="email" value={values.email} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su nombre" name="name" value={values.name} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese sus apellidos" name="lastname" value={values.lastname} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su dirección" name="address" value={values.address} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su telefono" name="phone" value={values.phone} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su fecha de nacimiento" name="birth" value={values.birth} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Ingrese su DNI" name="dni" value={values.dni} onChange={(e) => handleOnChange(e)} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" color="primary" variant="contained">
              Boton de incio
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Home;