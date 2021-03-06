import React from "react";
import { AddChannel } from "../assets";

const TeamChannelList = ({
  children,
  error = false,
  loading,
  type,
  isCreating,
  setisEditing,
  setCreateType,
  setIsCreating,
}) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          Connection error,please wait a moment and try again
        </p>
      </div>
    ) : null;
  }
  if (loading) {
    <div className="team-channel-list">
      <p className="team-channel-list__message loading">
        {type === "team" ? "Channels" : "Messages"} loading...
      </p>
    </div>;
  }
  return (
    <div className="team-channel-list">
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type === "team" ? "Channels" : "Direct Messages"}
        </p>
        <AddChannel
          isCreating={isCreating}
          setIsEditing={setisEditing}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          type={type === "team" ? "team" : "messaging"}
        />
      </div>
      {children}
    </div>
  );
};

export default TeamChannelList;
