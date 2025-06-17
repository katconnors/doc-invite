import Alert from "@mui/material/Alert";

function Banner({ status, link }) {
  return status === "success" ? (
    <div>
      <Alert severity="success">
        Text was successfully sent for your page at {link}.
      </Alert>
    </div>
  ) : status === "error" ? (
    <div>
      <Alert severity="error">
        Text was not sent- please enter a valid phone number including area code
        and country code (ex: +4408000149648).
      </Alert>
    </div>
  ) : null;
}

export default Banner;
