import './App.css'
import useRouteElements from './useRouteElements'

function App() {
  const routeElements = useRouteElements()
  return <div className='wrapper'>{routeElements}</div>
}

export default App
