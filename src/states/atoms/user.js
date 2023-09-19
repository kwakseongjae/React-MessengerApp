import userData from "../datas/userData.json";
import { atom, selectorFamily } from "recoil";
import friendsData from "../datas/friendsData.json";

export const userState = atom({
  key: "user",
  default: userData.users[0],
});

export const friendsState = atom({
  key: "friends",
  default: friendsData.users,
});

export const userStateByUserId = selectorFamily({
  key: "userByUserId",
  get:
    (userId) =>
    ({ get }) => {
      const user = get(userState);
      const friends = get(friendsState);
      if (userId === 0) {
        return user;
      } else {
        return friends.filter((friend) => friend.userId === userId)[0];
      }
    },
});

export const usersStateByUserIdList = selectorFamily({
  key: "usersByUserIdList",
  get:
    (userIdList) =>
    ({ get }) => {
      return userIdList.map((userId) => get(userStateByUserId(userId)));
    },
});
