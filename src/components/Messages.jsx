import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((store) => store.appSlice.searchText);
  const emails = useSelector((store) => store.appSlice.emails);
  const [tempEmails, setTempEmails] = useState(emails);
  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // console.log(allEmails);
      dispatch(setEmails(allEmails));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filteredEmail = emails.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email.to.toLowerCase().includes(searchText.toLowerCase()) ||
        email.message.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setTempEmails(filteredEmail);
  }, [emails, searchText]);
  return (
    <div>
      {tempEmails &&
        tempEmails?.map((item) => {
          <Message email={item} />;
        })}
    </div>
  );
};

export default Messages;
