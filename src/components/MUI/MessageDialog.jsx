import React, { useEffect } from "react";
import PropTypes from 'prop-types'
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography
} from "@material-tailwind/react";
 
export function MessageDialog({openDialog,handleClose}) {
  const [open, setOpen] = React.useState(false);    
  const handleOpen = () => setOpen(!open);
    useEffect(()=>{
        setOpen(openDialog)
    },[openDialog])
  return (
    <>
    <Dialog open={open} size="xs" handler={handleClose} className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start">
            {" "}
            <Typography className="mb-1 text-white" variant="h4">
             Feel free to connect!
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5 hover:cursor-pointer"
            onClick={handleClose}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody>
          {/* <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write the message and then click button.
          </Typography> */}
          <div className="grid gap-6">
            {/* <Typography className="-mb-1" color="blue-gray" variant="h6">
              Your Name
            </Typography> */}
            <Input label="Name" color="white"/>
            <Input label="E-mail" color="white"/>
            <Textarea label="Message" color="white"/>
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="white" onClick={handleClose}>
            cancel
          </Button>
          <Button color="white" onClick={handleOpen}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

MessageDialog.propTypes = {
    openDialog: PropTypes.bool.isRequired, 
    handleClose: PropTypes.func.isRequired, 
  };