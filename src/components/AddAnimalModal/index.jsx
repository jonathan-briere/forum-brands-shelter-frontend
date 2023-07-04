import { useForm, Controller } from "react-hook-form";
import { useCallback, useState } from "react";
import { InputAdornment, MenuItem, TextField, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";

import { updateAnimal } from "actions/dashboardAction";
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

export const AddAnimalModal = ({
  refetch,
  fetch,
  object,
  color = "primary",
  children,
}) => {
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
      updateAnimal(data).then(() => {
        handleClose();
        refetch(!fetch);
      });
    },
    [fetch, refetch, handleClose]
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
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
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
                      minDate={
                        object ? new Date(object.created_at) : new Date()
                      }
                    />
                  )}
                />
              </Box>

              <Box>
                {object ? (
                  <Button
                    sx={{ mx: "0.5rem" }}
                    variant="contained"
                    type="submit"
                  >
                    Update
                  </Button>
                ) : (
                  <Button
                    sx={{ mx: "0.5rem" }}
                    variant="contained"
                    type="submit"
                  >
                    Add
                  </Button>
                )}

                <Button
                  sx={{ mx: "0.5rem" }}
                  variant="contained"
                  color="error"
                  type="button"
                  onClick={handleClose}
                >
                  Close
                </Button>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
