import { Controller, useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { MenuItem, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { createAnimal, updateAnimal } from "actions/dashboardAction";
import { animalType } from "fixtures/dashboardFixtures";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "0.5rem",
};

export const AddAnimalModal = ({ object, color = "primary", children }) => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: object,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  
  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
  }, [reset]);

  const onSubmit = useCallback(
    (data) => {
      object
        ? updateAnimal(data).then(() => handleClose())
        : createAnimal(data).then(() => handleClose());
    },
    [handleClose, object]
  );

  return (
    <div>
      <Button
        sx={{ m: 1 }}
        variant="contained"
        color={color}
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        keepMounted={false}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
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

                <Box>
                  <Button variant="contained" type="submit">
                    {object ? "Update" : "Add"}
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
