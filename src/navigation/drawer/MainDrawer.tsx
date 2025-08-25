import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewAssignmentsScreen from '../../screens/drawer/NewAssignmentsScreen';
import AwardedAssignmentsScreen from '../../screens/drawer/AwardedAssignmentsScreen';
import PendingInvoicesScreen from '../../screens/drawer/PendingInvoicesScreen';
import PastInvoicesScreen from '../../screens/drawer/PastInvoicesScreen';
import CancelledAssignmentsScreen from '../../screens/drawer/CancelledAssignmentsScreen';
import ProfileScreen from '../../screens/drawer/ProfileScreen';
import MyCredentialsScreen from '../../screens/drawer/MyCredentialsScreen';
import AssignmentToBidScreen from '../../screens/drawer/AssignmentToBidScreen';
import type { MainDrawerParamList } from '../../types/AppTypes';

const Drawer = createDrawerNavigator<MainDrawerParamList>();

const MainDrawer: React.FC = () => {
  return (
    <Drawer.Navigator initialRouteName="NewAssignments" screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="NewAssignments" component={NewAssignmentsScreen} />
      <Drawer.Screen name="AwardedAssignments" component={AwardedAssignmentsScreen} />
      <Drawer.Screen name="PendingInvoices" component={PendingInvoicesScreen} />
      <Drawer.Screen name="PastInvoices" component={PastInvoicesScreen} />
      <Drawer.Screen name="CancelledAssignments" component={CancelledAssignmentsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="MyCredentials" component={MyCredentialsScreen} />
      <Drawer.Screen name="AssignmentToBid" component={AssignmentToBidScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

