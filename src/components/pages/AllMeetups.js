import { useEffect, useState } from "react";
import MeetupList from "../meetups/MeetupList";


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
