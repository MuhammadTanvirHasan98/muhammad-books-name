import { useState } from "react";
import { storeReview } from "../../../Utility/localStorage";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");

  const handleReviewAdd = (e) => {
    e?.preventDefault();
    storeReview({ name, email, review });
  };

  return (
    <div>
       <h1 className="text-5xl">This is form page</h1>
       <form
        onSubmit={handleReviewAdd}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          marginTop: 100,
          marginLeft: 100,
          marginRight: 100,
        }}
       >
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Review" value={review} onChange={(e) => setReview(e.target.value)} />
        <button type="submit" style={{
          padding: 10,
          backgroundColor: "blue",
          color: "white",
          borderRadius: 10,
          cursor: "pointer"
        }}>Submit</button>
       </form>
    </div>
  );
};

export default Form;