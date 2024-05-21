import React, { useEffect, useState } from "react"
import { Container } from "@mui/material"
import Welcome from "./Welcome/Welcome"
import Events from "./Events/Events"
import MyPublications from './MyPublications/MyPublications'
import UserList from './UserList/UserList'
import Publication from './Publication/Publication'
import Email from './Email/Email'
import CustomerReviews from "./CustomerReviews/CustomerReviews"
import ReviewHistory from "./ReviewHistory/ReviewHistory"
import './home.css'
import { getProfiles } from "../../api/profileController"

const Home = () => {
  const [users, setUsers] = useState([])
  const [profile, setProfile] = useState({})
  useEffect(() => {
    getProfiles().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })
  }, [])
  return (
    <>
      <div className="homeContainer">
        <div className="homeWrapper">
          <Container>
            <Welcome setUsers={setUsers} users={users} profile={profile} setProfile={setProfile} />
            <MyPublications />
            <UserList users={users} />
            <Publication />
            <Email profile={profile} />
          </Container>
        </div>
        <CustomerReviews />
        <ReviewHistory />
        <Container>
          <Events />
        </Container>
      </div>

    </>
  )
}

export default Home