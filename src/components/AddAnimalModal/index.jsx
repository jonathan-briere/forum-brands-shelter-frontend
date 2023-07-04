import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import { useForm, Controller } from "react-hook-form";
import { Button, Input, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import "reactjs-popup/dist/index.css";

import { animalType } from "fixtures/dashboardFixtures";

export const AddAnimalModal = ({ object, children }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: object,
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Popup className="deny-modal" trigger={children} modal nested>
      {(close) => (
        <Box sx={{ p: "1rem" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ p: "1rem", textAlign: "center" }}>
              <TextField
                sx={{ m: "0.6rem" }}
                {...register("name")}
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />

              <TextField
                sx={{ m: "0.7rem" }}
                {...register("age")}
                type="number"
                id="outlined-basic"
                label="Age"
                variant="outlined"
              />

              <TextField
                sx={{ m: "0.7rem" }}
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
                    sx={{ m: "0.6rem" }}
                    id="outlined-select-currency"
                    select
                    label="Type"
                    value={value}
                    onChange={onChange}
                    helperText="Please select Type"
                  >
                    {animalType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Box sx={{ p: "1rem" }}>
                <label htmlFor="contained-button-file">
                  <Input
                    sx={{ m: "0.6rem" }}
                    {...register("img")}
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload
                  </Button>
                </label>
              </Box>

              <Box>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      )}
    </Popup>
  );
};

AddAnimalModal.propTypes = {
  children: PropTypes.node.isRequired,
};
