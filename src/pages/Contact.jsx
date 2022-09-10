import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddressCard, AutoComplete, InfoCard } from "../components";

const Contact = () => {
  const { id } = useParams();
  const { contacts } = useSelector((state) => state.contacts);
  const contact = contacts?.find((item) => item.id === Number(id));
  const user = {
    username: contact.username,
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    website: contact.website,
  };

  return (
    <div className="container">
      <AutoComplete />
      <div className="text-center my-3">
        <h3>Information</h3>
      </div>
      <div className="row gap-2 mt-3">
        <div className="col-12 col-md d-flex justify-content-between gap-2 flex-column">
          <InfoCard border title="User" infos={user} />
          <InfoCard border title="Company" infos={contact.company} />
        </div>
        <div className="col-12 col-md">
          <AddressCard address={contact.address} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
