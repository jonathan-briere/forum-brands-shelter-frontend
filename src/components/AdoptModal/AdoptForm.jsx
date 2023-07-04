import { useForm, Controller } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DatePicker from "react-datepicker";

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

export const AdoptForm = ({ onSubmit, object }) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: object,
  });

  return (
    <Box sx={style}>
      <Typography gutterBottom variant="h4" component="div">
        Guardian
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ p: "1rem" }}>
          <TextField
            sx={{ m: "0.6rem" }}
            {...register("full_name")}
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            disabled={object}
          />

          <TextField
            sx={{ m: "0.6rem" }}
            {...register("email")}
            id="outlined-basic"
            type="email"
            label="Email"
            variant="outlined"
            disabled={object}
          />

          <TextField
            sx={{ m: "0.6rem" }}
            {...register("country")}
            id="outlined-basic"
            label="Country"
            variant="outlined"
            disabled={object}
          />

          <TextField
            sx={{ m: "0.7rem" }}
            {...register("city")}
            id="outlined-basic"
            label="City"
            variant="outlined"
            disabled={object}
          />

          <TextField
            sx={{ m: "0.7rem", width: "70%" }}
            {...register("address")}
            id="outlined-basic"
            label="Address"
            variant="outlined"
            disabled={object}
          />
        </Box>

        <Box sx={{ m: 1 }}>
          <Controller
            control={control}
            name="adopted_at"
            render={({ field: { onChange, value } }) => (
              <DatePicker
                disabled={object}
                selected={value ? new Date(value) : new Date()}
                onChange={onChange}
                minDate={object ? new Date(object.created_at) : new Date()}
              />
            )}
          />
        </Box>

        <Box>
          {object ? (
            <Button
              sx={{ mx: "0.5rem" }}
              color="error"
              variant="contained"
              type="submit"
              disabled
            >
              Adopted
            </Button>
          ) : (
            <Button sx={{ mx: "0.5rem" }} variant="contained" type="submit">
              Adopt
            </Button>
          )}
        </Box>
      </form>
    </Box>
  );
};
