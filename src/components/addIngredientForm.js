import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { NotificationManager } from "react-notifications";
import { useSelector } from "react-redux";

const AddIngredientForm = () => {
  const token = useSelector((state) => state.user.token);

  const formik = useFormik({
    initialValues: {
      name: "",
      image: "",
      description: "",
    },
    onSubmit: async (values) => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/ingredient/create",
        data: values,
        headers: { Authorization: `Bearer ${token}` },
      });

      NotificationManager.success("SUCCESS");
      // if (
      //   response.data.msg === "CREATED INGREDIENT" &&
      //   response.status === 200
      // ) {
      // } else {
      //   NotificationManager.error("ERROR");
      // }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        onChange={formik.handleChange}
        value={formik.values.name}
        name="name"
        label="Name"
        variant="outlined"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.description}
        name="description"
        label="description"
        variant="outlined"
      />
      <TextField
        onChange={formik.handleChange}
        value={formik.values.image}
        name="image"
        label="Image"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default AddIngredientForm;
