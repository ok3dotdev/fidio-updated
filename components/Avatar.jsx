import { resolveImage } from '@tycoonsystems/tycoon-modules/utility/utility/image'


const UserAvatar = (props) => {
  return (
    <div>
      {props?._loggedIn.icon && (
        <img
          className='rounded-full w-8 h-8 avatar'
          src={resolveImage(props, null, props?._loggedIn?.icon ?? null)}
        />
      )}
    </div>
  );
};

export default UserAvatar;
