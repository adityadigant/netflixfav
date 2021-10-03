import { useHistory } from "react-router";
import NewMeetupForm from "../meetups/NewMeetupForm";

function NewMeetupPage() {
const history = useHistory();

  function addMeetupHandler(meetupData) {
    console.log(meetupData);
    fetch("https://meetup-12fac-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(()=>{
      history.replace("/")
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetups={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
