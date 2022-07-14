import { TextField, Button, Grid } from "@mui/material"
import { useFormik } from "formik"
import { object, string } from 'yup'

const Formulario = ({ datos, onSubmit }) => {
    const validationSchema = object({
        ciudad: string().required('La ciudad es requerida'),
        pais: string().required('El pais es requerido'),
    });

    const formik = useFormik({
        initialValues: { datos },
        validationSchema,
        onSubmit: (values) => {
            onSubmit(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <TextField
                        name="ciudad"
                        label="Ciudad"
                        onChange={formik.handleChange}
                        value={formik.values.ciudad}
                    />
                </Grid>

                <Grid item md={12}>
                    <TextField
                        name="pais"
                        label="Pais"
                        onChange={formik.handleChange}
                        value={formik.values.pais}
                    />
                </Grid>
            </Grid>

            <Button className="my-2" color="primary" variant="contained" fullWidth>BUSCAR CLIMA</Button>
        </form>
    )
}

export default Formulario