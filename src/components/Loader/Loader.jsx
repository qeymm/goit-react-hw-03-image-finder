import style from './Loader.module.css';
import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={style.loader}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#f5deb3"
        secondaryColor="#8b4513"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
