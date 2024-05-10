import {
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
  } from "@mui/material";
  import axios from "axios";
  import { useFormik } from "formik";
  import { NotificationManager } from "react-notifications";
  import { useSelector } from "react-redux";
  
  const AddRecipeForm = () => {
    const token = useSelector((state) => state.user.token);
    const ingredients = useSelector((state) => state.app.ingredients);
  
    const formik = useFormik({
      initialValues: {
        name: "",
        image: "",
        description: "",
        ingredients: [],
      },
      onSubmit: async (values) => {
        const response = await axios({
          method: "POST",
          url: "http://localhost:8080/recipie/create",
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
  
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel>Ingredients</InputLabel>
          <Select
            multiple
            name="ingredients"
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            input={<OutlinedInput label="Ingredients" />}
            renderValue={(selected) => selected.join(", ")}
          >
            {ingredients.map((i) => (
              <MenuItem key={i._id} value={i._id}>
                <Checkbox checked={formik.values.ingredients.includes(i._id)} />
                <ListItemText primary={i.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    );
  };
  
  export default AddRecipeForm;
  