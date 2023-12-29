import Header from 'components/Header'
import NavBar from 'components/Nav'

export default function Dashboard () {
  return(
    <>
      <NavBar />
      <div className='content'>
        <Header />
        <div className="main-data">
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  )
}
