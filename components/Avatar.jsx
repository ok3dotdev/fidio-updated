const UserAvatar = (props) => {
  return (
    <div>
      {props?._loggedIn.icon && (
        <img
          className='rounded-full w-8 h-8 avatar'
          src={props._loggedIn.icon}
        />
      )}
    </div>
  );
};

export default UserAvatar;
