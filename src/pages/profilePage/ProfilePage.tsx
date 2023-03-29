import { FunctionComponent, useState } from "react"
import { useSelector } from "react-redux"

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
  const { userInfo } = useSelector(
    (state: { auth: { userInfo: { email: string } } }) => state.auth
  )

  // const [info, setInfo] = useState<string | undefined | null>("")

  console.log(userInfo)

  return <p>{userInfo.email}</p>
}

export default ProfilePage
