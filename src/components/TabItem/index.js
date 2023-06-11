// Write your code here

import './index.css'

const TabItem = props => {
  const {eachItemDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachItemDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? `active-tab-btn` : ''

  return (
    <li className="lits-items-container">
      <button
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
