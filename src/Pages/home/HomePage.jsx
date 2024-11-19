import AuthScreen from "./AuthScreen"
import HomeScreen from "./HomeScreen"



function HomePage() {
  const user =false;
  return (
   <div>
    {user ? <HomeScreen /> : <AuthScreen/>}
   </div>
  )
}

export default HomePage
