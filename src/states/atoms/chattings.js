import { atom, selectorFamily } from "recoil";
import chattingsData from "../datas/chattingsData.json";
// import { localStorageEffect } from "../../utilities/localStorage";

export const chattingsState = atom({
  key: "chattings",
  default: chattingsData.chattings,
  // effects: [localStorageEffect("chattings")],
});

export const chattingStateByChattingId = selectorFamily({
  key: "chattingByChattingId",
  get:
    (chattingId) =>
    ({ get }) =>
      get(chattingsState).filter(
        (chatting) => chatting.chattingId === chattingId
      )[0],
  set:
    (chattingId) =>
    ({ set }, newChatting) => {
      set(chattingsState, (prev) =>
        prev.map((chatting) =>
          chatting.chattingId === chattingId ? newChatting : chatting
        )
      );
    },
});

export const chattingStateByUserId = selectorFamily({
  key: "chattingByUserId",
  get:
    (userId) =>
    ({ get }) =>
      get(chattingsState).filter(
        (chatting) => chatting.userIdList[1] === userId
      )[0],
});
