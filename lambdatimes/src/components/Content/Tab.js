import React from 'react';
import propTypes from 'prop-types';
import { TabDiv } from '../Styles/TabStyles';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const active = (tab === selectedTab) ? true : false;
  return (
    <TabDiv
      active={active}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        selectTabHandler(tab)
      }}
    >
      {tab.toUpperCase()}
    </TabDiv>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabs: propTypes.string,
  selectedTab: propTypes.string,
  selectTabHandler: propTypes.func
}
export default Tab;
