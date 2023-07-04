import { useForm } from "react-hook-form";
import { useCallback, useState } from "react";
import { TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

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

export const AdoptModal = ({ object, color = "primary", children }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: object,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
  }, [reset]);

  const onSubmit = (data) => {
    console.log(data);
    handleClose();
  };

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

              <Box>
                {object ? (
                  <Button
                    sx={{ mx: "0.5rem" }}
                    color="error"
                    variant="contained"
                    type="submit"
                  >
                    Adopted
                  </Button>
                ) : (
                  <Button
                    sx={{ mx: "0.5rem" }}
                    variant="contained"
                    type="submit"
                  >
                    Adopt
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
