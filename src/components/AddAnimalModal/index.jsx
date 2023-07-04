import { useCallback, useEffect, useState } from "react";
import { Fade } from "@mui/material";
import { Box } from "@mui/system";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "react-datepicker/dist/react-datepicker.css";

import { fetchAnimal, updateAnimal } from "actions/dashboardAction";
import { AddAnimalForm } from "./AddAnimalForm";

export const AddAnimalModal = ({ id, fetch, refetch, color, children }) => {
  const [animal, setAnimal] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  console.log(open);

  useEffect(() => {
    if (open) fetchAnimal(id, setAnimal);
  }, [id, open]);

  const handleClose = useCallback(() => {
    setAnimal(null);
    setOpen(false);
  }, [setOpen]);

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
          <Box>
            {animal ? (
              <AddAnimalForm onSubmit={onSubmit} object={animal} />
            ) : null}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
