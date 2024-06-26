import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
//import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../components/Header";
import axios from "axios";

const UpdateCar = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    const src = 'http://localhost/car'
    axios.postForm(src, values)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
  console.log(values);
};

  return (
    <Box m="20px">
      <Header title="UPDATE CAR" subtitle="Update Car" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="id"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.id}
              name="id"
              error={!!touched.id && !!errors.id}
              helperText={touched.id && errors.id}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.number}
              name="number"
              error={!!touched.number && !!errors.number}
              helperText={touched.number && errors.number}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="type"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.type}
              name="type"
              error={!!touched.type && !!errors.type}
              helperText={touched.type && errors.type}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="mileage"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.mileage}
              name="mileage"
              error={!!touched.mileage && !!errors.mileage}
              helperText={touched.mileage && errors.mileage}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="garage_id"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.garage_id}
              name="garage_id"
              error={!!touched.garage_id && !!errors.garage_id}
              helperText={touched.garage_id && errors.garage_id}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="status"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.status}
              name="status"
              error={!!touched.status && !!errors.status}
              helperText={touched.status && errors.status}
              sx={{ gridColumn: "span 2" }}
            />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button  type="submit" color="secondary" variant="contained">
                Update CAR
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  id: "",
  number: "",
  type: "",
  mileage: "",
  garage_id: "",
  status: ""
};

export default UpdateCar;
