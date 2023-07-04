import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";
import "reactjs-popup/dist/index.css";

export const AdoptModal = ({ object, children }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: object,
  });

  const isObject = useMemo(() => object || false, [object]);

  const onSubmit = (data) => console.log(data);

  return (
    <Popup trigger={children} modal nested>
      {(close) => (
        <Box sx={{ p: "1rem", textAlign: "center" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ p: "1rem" }}>
              <TextField
                sx={{ m: "0.6rem" }}
                {...register("full_name")}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                disabled={isObject}
              />

              <TextField
                sx={{ m: "0.6rem" }}
                {...register("country")}
                id="outlined-basic"
                label="Country"
                variant="outlined"
                disabled={isObject}
              />

              <TextField
                sx={{ m: "0.7rem" }}
                {...register("city")}
                id="outlined-basic"
                label="city"
                variant="outlined"
                disabled={isObject}
              />

              <TextField
                sx={{ m: "0.7rem", width: "70%" }}
                {...register("address")}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                disabled={isObject}
              />
            </Box>

            <Box>
              {isObject ? (
                <Button sx={{ mx: "0.5rem" }} color="error" variant="contained" type="submit">
                  Adopted
                </Button>
              ) : (
                <Button sx={{ mx: "0.5rem" }} variant="contained" type="submit">
                  Adopt
                </Button>
              )}

              <Button
                sx={{ mx: "0.5rem" }}
                variant="contained"
                type="submit"
                onClick={() => close()}
              >
                Close
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </Popup>
  );
};

AdoptModal.propTypes = {
  children: PropTypes.node.isRequired,
};
