import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";

export function MessageDialog({ openDialog, handleClose }) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const sendEmail = (e) => {
    e.preventDefault();

    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY
    const serviceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY
    const templateKey = import.meta.env.VITE_EMAIL_TEMPLATE_KEY

    emailjs.init({
      publicKey: publicKey,
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        // list: [],
        // The variable contains the email address
        // watchVariable: 'userEmail',
      },
      limitRate: {
        // Set the limit rate for the application
        id: "app",
        // Allow 1 request per 10s
        throttle: 10000,
      },
    });

    const userDetails = {
      from_name: e.target[0].value,
      from_email: e.target[1].value,
      message: e.target[2].value,
    };

    if (!userDetails.from_name.trim()) {
      toast.error("Please enter your name!");
      return;
    }
    if (!userDetails.from_email.trim()) {
      toast.error("Please enter your email!");
      return;
    }
    if (!userDetails.message.trim()) {
      toast.info(`I'm expecting your valuable message!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    emailjs.send(serviceKey, templateKey, userDetails).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        handleClose();
        Swal.fire({
          title: "Success!",
          text: "Email has been sent!",
          icon: "success",
        });
      },
      (error) => {
        console.log("FAILED...", error);
        handleClose();
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email was not sent!",
        });
      }
    );
  };
  return (
    <>
      <Dialog
        open={open}
        size="xs"
        handler={handleClose}
        className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white"
      >
        <div className="flex items-center justify-between">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
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
        <form onSubmit={sendEmail}>
          <DialogBody>
            {/* <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
            Write the message and then click button.
          </Typography> */}
            <div className="grid gap-6">
              {/* <Typography className="-mb-1" color="blue-gray" variant="h6">
              Your Name
            </Typography> */}
              <Input label="Name" color="white" />
              <Input label="E-mail" color="white" />
              <Textarea label="Message" color="white" />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="white" onClick={handleClose}>
              cancel
            </Button>
            <Button color="white" type="submit">
              send message
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}

MessageDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
