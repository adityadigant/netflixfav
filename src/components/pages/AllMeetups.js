import { useEffect, useState } from "react";
import MeetupList from "../meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

function AllMeetUpsPage() {
 const [isLoading, setIsLoading] = useState(true); 
 const [loadedMeetups, setLoadedMeetups] = useState([])

useEffect(()=>{
  setIsLoading(true);
  fetch("https://meetup-12fac-default-rtdb.firebaseio.com/meetup.json")
  .then(Response=>{
    return Response.json()
  }).then(data =>{
    const meetups = [];

    for(const key in data){
      const meetup = {
        id:key,
        ...data[key]
      };
      meetups.push(meetup)
    }
    console.log(data)
    setIsLoading(false)
    setLoadedMeetups(meetups)
  })
},[])
 

  if(isLoading){
    return(<section>
      <p>Loading...</p>
    </section>)
  }
  return (
    <section>
      <h1>All Meet Ups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  );
}

export default AllMeetUpsPage;
