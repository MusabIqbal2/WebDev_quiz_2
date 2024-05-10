import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import { login } from "../redux/user.reducer";

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "jivynosyfu@mailinator.com",
      social_auth_type:"normal",
      password: "Pa$$w0rd!",
    },
    onSubmit: async (values) => {
      console.log("values ===",values)

      const formData = new FormData();
      formData.append("email",values?.email);
      formData.append("social_auth_type",values?.social_auth_type);
      formData.append("password",values?.password);

      const response = await axios.post(
        "https://sandbox.practical.me/api/login",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.isSuccess  && response.status === 200) {
        NotificationManager.success(response.data.msg);
        dispatch(login(response.data.data.auth_token));
      } else {
        NotificationManager.error(response.data.msg || response.statusText);
      }
    },
  });

  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={formik.handleSubmit}
    >
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
      <TextField
        onChange={formik.handleChange}
        value={"normal"}
        name="social_auth_type"
        label="Social_auth_type"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default Login;
