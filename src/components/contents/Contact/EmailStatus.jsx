import { useSelector } from "react-redux";

function EmailStatus() {
  const contactStatus = useSelector((state) => state.contact.status);
  const contactError = useSelector((state) => state.contact.error);

  if (contactStatus === "loading") return <div>Sending email...</div>;
  if (contactStatus === "succeeded") return <div>Email successfully sent!</div>;
  if (contactStatus === "failed") return <div>Error sending email: {contactError}</div>;
  return null;
}

export default EmailStatus;
