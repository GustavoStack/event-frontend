import './App.css'
import FormUser from './components/forms/form-user.tsx'
import HomePage from './components/pages/home-page.tsx'
import CreateUser from './components/pages/create-user.tsx'
import Users from './components/pages/users/users.tsx'
function App() {

return (
    <div>
      {/* <div>
        <h1 className="p-2 mb-2 text-white font-bold">Form User</h1>
        <FormUser/>
      </div> */}
      {/*<HomePage/>*/}
      <Users/>
    </div>
  )
}

export default App
