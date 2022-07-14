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
            <input
                name="ciudad"
                label="Ciudad"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                onChange={formik.handleChange}
                value={formik.values.ciudad}
            />
            <input
                name="pais"
                label="Pais"
                onChange={formik.handleChange}
                value={formik.values.pais}
            />

            <button className="px-3 bg-blue-700 hover:bg-blue-900 text-white">BUSCAR CLIMA</button>
        </form>
    )
}

export default Formulario