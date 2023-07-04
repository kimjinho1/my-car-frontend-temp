import { IntColorInfo } from "@/apis/api";
import { atom, selector } from "recoil";

export type SelectedIntColor = {
  code: string;
  name: string;
};

/** 내장 색상들 정보 */
export const intColorInfosState = atom<IntColorInfo[]>({
  key: "intColorInfosState",
  default: [],
});

/** 외장 색상들 정보 */
export const extColorsState = atom<string[]>({
  key: "extColorsState",
  default: [],
});

/** 선택된 내장 색상 코드 */
export const selectedIntColorState = atom<SelectedIntColor>({
  key: "selectedIntColorState",
  default: {
    code: "",
    name: "",
  },
});

/** 선택된 외장 색상 코드 */
export const extColorCodeState = atom<string>({
  key: "extColorCodeState",
  default: "",
});

/** 차량 외부 이미지 번호(1 ~ 60) */
export const carExtPreviewNumState = atom<number>({
  key: "carExtPreviewNumState",
  default: 1,
});

/** GET: 차량 외부 이미지 경로 */
// export const carExtPrivewPathSelector = selector({
//   key: "carExtPrivewPathSelector",
//   get: ({ get }) => {
//     const carList = get(carListState);
//     return carList.map((carInfo) => {
//       return {
//         carTypeCode: carInfo.carTypeCode,
//         carTypeName: carInfo.carTypeName,
//       };
//     });
//   },
// });