import React from 'react';
import uuid from 'uuid';
import { TabsDiv, TopicsDiv, TitleSpan } from '../Styles/TabsStyles';
import Tab from './Tab';
const Tabs = ({ selectedTab, selectTabHandler, tabs }) => {
  return (
    <TabsDiv>
      <TopicsDiv>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {
          tabs.map(tab =>
            < Tab
              key={uuid()}
              tab={tab}
              selectedTab={selectedTab}
              selectTabHandler={selectTabHandler}
            />
          )
        }
      </TopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
