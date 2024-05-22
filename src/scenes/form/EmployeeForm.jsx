import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
//import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";

const EmployeeForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
      const src = 'http://localhost/user'
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
      <Header title="ADD EMPLOYEE" subtitle="Create a New Employee" />

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
              label="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="phone"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              name="phone"
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.garage}
              name="email"
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="surname"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.surname}
              name="surname"
              error={!!touched.surname && !!errors.surname}
              helperText={touched.surname && errors.surname}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="salary"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.salary}
              name="salary"
              error={!!touched.salary && !!errors.salary}
              helperText={touched.salary && errors.salary}
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
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button  type="submit" color="secondary" variant="contained">
                Create New Employee
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const initialValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  salary: "",
  type: ""
};

export default EmployeeForm;
