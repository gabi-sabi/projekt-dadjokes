import './style.css';

import { useState } from 'react';
import user1 from './img/user01.png';

export const HomePage = () => {
  const [likeAdd, setLikeAdd] = useState(0);
  const [likeSubtract, setLikeSubtract] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={user1} />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setLikeAdd(likeAdd + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {likeAdd}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setLikeSubtract(likeSubtract + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {likeSubtract}
          </span>
        </div>
      </div>
    </div>
  );
};
