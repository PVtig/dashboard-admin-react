import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
//import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";

const CarForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
      const src = 'http://localhost/report'
      axios.post(src, values)
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
      <Header title="CREATE REPORT" subtitle="Create a New Report" />

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
              type="number"
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
              type="number"
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
              type="number"
              label="garage"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.garage}
              name="garage"
              error={!!touched.garage && !!errors.garage}
              helperText={touched.garage && errors.garage}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="car_id"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.car_id}
              name="car_id"
              error={!!touched.car_id && !!errors.car_id}
              helperText={touched.car_id && errors.car_id}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="user_id"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.user_id}
              name="user_id"
              error={!!touched.user_id && !!errors.user_id}
              helperText={touched.user_id && errors.user_id}
              sx={{ gridColumn: "span 2" }}
            />
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button  type="submit" color="secondary" variant="contained">
                Create New REPORT
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  type: "",
  mileage: "",
  garage: "",
  car_id: "",
  user_id: ""
};

export default CarForm;