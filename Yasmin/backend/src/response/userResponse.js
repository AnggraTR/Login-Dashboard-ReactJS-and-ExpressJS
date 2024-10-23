'use strict';

const formatUserResponse = (userModel) => {
  if (!userModel) return null;
  const { id, npm, name, email, username, actived, approved, roleId } = userModel.get();
  return { id, npm, name, email, username, actived, approved, role : roleId }; 
}

module.exports = { formatUserResponse };
