// Write your code here

import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appId, appName, imageUrl, category} = eachAppDetails

  return (
    <li className="app-container">
      <img alt={appName} className="image-details" src={imageUrl} />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
