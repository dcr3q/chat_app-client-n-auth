import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { UserList } from "./";
import { CloseCreateChannel } from "../assets";

const ChannelNameInput = ({ channelName = "", setChannelName }) => {
  const { client, setActiveChannelName } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userId || ""]);

  const handleChange = (e) => {
    e.preventDefault();
    setChannelName(e.target.value);
  };
  return (
    <div className="channel-name-input__wrapper">
      <p>Name</p>
      <input
        type="text"
        value={channelName}
        onChange={handleChange}
        placeholder="channel-name (no-spaces)"
      />
      <p>Add members</p>
    </div>
  );
};

const CreateChannel = ({ createType, setIsCreating }) => {
  const { client, setActiveChannelName } = useChatContext();
  const [selectedUsers, setSelectedUsers] = useState([client.userId || ""]);
  const [channelName, setChannelName] = useState("");

  return (
    <div className="create-channel__container">
      <div className="create-channel__header">
        <p>
          {createType === "team"
            ? "Create a New Channel"
            : "Send a Direct Message"}
        </p>
        <CloseCreateChannel setIsCreating={setIsCreating} />
      </div>
      {createType === "team" && (
        <ChannelNameInput
          channelName={channelName}
          setChannelName={setChannelName}
        />
      )}
      <UserList setSelectedUsers={setSelectedUsers} />
    </div>
  );
};

export default CreateChannel;