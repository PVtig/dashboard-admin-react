import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
//import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import Header from "../../../components/Header";

const DeleteEmployee = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
      const src = 'http://localhost/user' + values.id;
      axios.delete(src)
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
      <Header title="DELETE EMPLOYEE" subtitle="Delete Employee" />

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
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button  type="submit" color="secondary" variant="contained">
                Delete Employee
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  id: ""
};

export default DeleteEmployee;
