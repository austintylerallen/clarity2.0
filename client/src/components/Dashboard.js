import React from 'react';
import NewsFeed from './NewsFeed/NewsFeed';
import RepresentativeProfiles from './RepresentativeProfiles/RepresentativeProfiles';
import UpcomingElections from './UpcomingElections/UpcomingElections';
import LegislationTracker from './LegislationTracker/LegislationTracker';
import TownHallMeetings from './TownHallMeetings/TownHallMeetings';
import UserEngagement from './UserEngagement/UserEngagement';
import PetitionManagement from './PetitionManagement/PetitionManagement';
import CivicEducation from './CivicEducation/CivicEducation';
import PushNotifications from './PushNotifications/PushNotifications';
import Integration from './Integration/Integration';
import Donations from './Donations/Donations';
import DataVisualization from './DataVisualization/DataVisualization';
import UserProfile from './UserProfile/UserProfile';
import LocationBasedFeatures from './LocationBasedFeatures/LocationBasedFeatures';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <NewsFeed />
      <RepresentativeProfiles />
      <UpcomingElections />
      <LegislationTracker />
      <TownHallMeetings />
      <UserEngagement />
      <PetitionManagement />
      <CivicEducation />
      <PushNotifications />
      <Integration />
      <Donations />
      <DataVisualization />
      <UserProfile />
      <LocationBasedFeatures />
    </div>
  );
};

export default Dashboard;
