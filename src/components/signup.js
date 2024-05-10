import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post("http://localhost:8080/user/register", {
        ...values,
        role: "USER",
      });
      NotificationManager.success(response.data.msg);
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        onChange={formik.handleChange}
        value={formik.values.username}
        name="username"
        label="Username"
        variant="outlined"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.email}
        name="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.password}
        name="password"
        label="Password"
        type="password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
