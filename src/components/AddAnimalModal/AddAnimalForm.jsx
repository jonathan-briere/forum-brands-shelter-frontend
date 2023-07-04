import { useForm, Controller } from "react-hook-form";
import { InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";

import { animalType } from "fixtures/dashboardFixtures";
import "react-datepicker/dist/react-datepicker.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  borderRadius: "0.5rem",
};

export const AddAnimalForm = ({ onSubmit, object }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: object,
  });

  return (
    <Box sx={style}>
      <Typography gutterBottom variant="h4" component="div">
        Animal
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ p: "1rem" }}>
          <TextField
            sx={{ m: "0.6rem" }}
            {...register("name")}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />

          <TextField
            sx={{ m: "0.6rem" }}
            type="number"
            {...register("age")}
            id="outlined-basic"
            label="age"
            variant="outlined"
          />

          <TextField
            sx={{ m: "0.7rem" }}
            type="number"
            {...register("weight")}
            id="outlined-basic"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            label="Weight"
            variant="outlined"
          />

          <TextField
            sx={{ m: "0.7rem", width: "70%" }}
            {...register("breed")}
            id="outlined-basic"
            label="Breed"
            variant="outlined"
          />
          <Controller
            control={control}
            name="animal_type"
            render={({ field: { onChange, value } }) => (
              <TextField
                id="outlined-select-currency"
                select
                label="Animal Type"
                value={value}
                onChange={onChange}
                helperText="Please select your currency"
              >
                {animalType.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <Controller
            control={control}
            name="adopted_at"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value ? new Date(value) : new Date()}
                onChange={onChange}
                minDate={object ? new Date(object.created_at) : new Date()}
              />
            )}
          />
        </Box>

        <Box>
          {object ? (
            <Button sx={{ mx: "0.5rem" }} variant="contained" type="submit">
              Update
            </Button>
          ) : (
            <Button sx={{ mx: "0.5rem" }} variant="contained" type="submit">
              Add
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};
