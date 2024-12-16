# React Native FlatList/SectionList Data Update Issue

This repository demonstrates a common yet subtle bug in React Native's FlatList and SectionList components where updates to the `data` prop fail to trigger a re-render, even though the underlying data has changed. The issue is due to React's shallow comparison failing to detect changes because it only compares object references.

## Bug Description

The `BuggyFlatList.js` file shows how updating the data array might not lead to an updated list, causing stale data to persist. This happens because the array reference doesn't change when we modify it.

## Solution

The `FixedFlatList.js` file demonstrates how to properly address this problem, ensuring that React's shallow comparison will correctly identify changes in the array. 

The solution involves creating a completely new array when updating, ensuring a new reference, and forcing a re-render of the FlatList.