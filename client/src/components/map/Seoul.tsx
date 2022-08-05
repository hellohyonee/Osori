import { useState } from "react";
import styled from "styled-components";

interface regionData {
  name: string;
  count: number;
  rate: number;
  color: string;
}

interface mapData {
  name: string;
  count: number;
  data: { [regionName: string]: regionData };
}

interface shadowType {
  [key: string]: string;
}
let shadowSet: shadowType = {
  "#9749B6": "#642F79",
  "#C181DB": "#9462A8",
  "#C1ADD1": "#83778D",
  "#EEA3BF": "#9C6B7E",
  "#FEDDD5": "#9B8883",
  "#EAEAEA": "#A6A5A5",
};

const Path = styled.path<{ check: boolean; fill: string }>`
  ${({ check, fill }) => {
    if (check) {
      return `
      transform: translate(0px, -10px);
      filter: drop-shadow(0px 5px 0px ${shadowSet[fill] || fill});  
      //filter: drop-shadow(0px 5px 0px black);
      `;
    } else {
      return ``;
    }
  }}
`;
interface mapData2 {
  id: string;
  stroke: string;
  d: string;
  x: string;
  y: string;
  name: string;
}

let data: mapData2[] = [
  {
    id: "CD11110",
    x: "399",
    y: "297",
    name: "종로구",
    stroke: "#FFFFFF",

    d: "M 455 297 l 4 -2 1 0 1 0 3 -1 4 5 7 3 2 6 0 8 -11 2 -11 1 -8 0 -9 1 -8 1 -9 1 -9 -2 -10 -1 -9 1 -4 3 -2 3 -6 -6 -3 -4 -5 -6 -4 -5 -2 -5 5 -3 0 -6 0 -10 0 -9 1 -9 -3 -4 -2 0 -2 0 -1 -4 0 -9 -5 -9 1 -10 -1 -11 -1 -6 2 -6 5 -2 7 -3 10 -2 2 -1 3 0 1 0 4 -2 8 -1 3 6 4 1 3 8 3 10 1 6 3 5 0 9 0 7 -1 5 -6 3 -6 4 -1 5 6 4 5 3 5 4 9 1 10 0 4 4 3 4 5 10 1 3 z ",
  },
  {
    id: "CD11140",
    x: "423",
    y: "343",
    name: "중구",
    stroke: "#FFFFFF",
    d: "M 477 316 l 0 9 5 5 -1 3 -4 5 -4 5 -5 4 -4 7 -3 4 -4 3 -4 10 -2 -1 -3 -7 -2 -5 -2 1 -1 0 -2 -1 -3 1 0 0 -3 1 -4 2 -5 -5 -6 -3 -10 -3 -4 -1 -3 -1 -2 2 -4 -1 -3 -1 -9 0 -2 2 -4 3 0 -7 1 -4 -2 -2 0 -1 6 -3 6 -4 -1 -2 -2 -5 2 -3 4 -3 9 -1 10 1 9 2 9 -1 8 -1 9 -1 8 0 11 -1 z ",
  },
  {
    id: "CD11170",
    x: "407",
    y: "395",
    name: "용산구",
    stroke: "#FFFFFF",
    d: "M 394 349 l 3 1 4 1 2 -2 3 1 4 1 10 3 6 3 5 5 4 -2 3 -1 0 0 3 -1 2 1 1 0 2 -1 2 5 3 7 2 1 5 9 6 2 2 9 -4 5 -4 5 -5 6 -3 4 -5 4 -5 5 -5 4 -5 3 -8 8 -5 8 -7 3 -7 -1 -10 -4 -3 -1 -6 -3 -6 -5 -5 -3 -6 -3 -9 -3 1 -5 0 -10 -2 -8 -6 -11 5 -2 4 -1 5 -4 5 -6 2 -5 3 -6 6 -5 0 -3 -2 -3 4 -3 2 -2 z ",
  },
  {
    id: "CD11200",
    x: "505",
    y: "356",
    name: "성동구",
    stroke: "#FFFFFF",
    d: "M 511 315 l 7 4 6 6 4 4 6 5 2 0 15 3 4 0 -5 20 -3 5 -5 12 -3 7 -10 20 -7 -4 -5 -3 -4 -4 -10 -3 -10 0 -7 0 -12 0 -8 4 -2 -9 -6 -2 -5 -9 4 -10 4 -3 3 -4 4 -7 5 -4 4 -5 4 -5 1 -3 -5 -5 0 -9 6 1 11 -1 5 -2 2 -1 6 0 z ",
  },
  {
    id: "CD11215",
    x: "577",
    y: "365",
    name: "광진구",
    stroke: "#FFFFFF",
    d: "M 605 315 l 1 1 -1 4 -1 7 -2 9 3 6 4 4 3 -3 9 -1 3 3 -4 10 -2 10 -2 5 -2 4 -4 5 -5 5 -5 4 -11 12 -3 3 -3 2 -8 5 -6 3 -5 1 -5 -1 -5 -1 -6 -2 -12 -5 -7 -4 13 -27 5 -12 3 -5 5 -20 3 -8 4 -5 4 -9 7 1 11 3 9 -3 4 -3 4 -2 z ",
  },
  {
    id: "CD11230",
    x: "528",
    y: "294",
    name: "동대문구",
    stroke: "#FFFFFF",
    d: "M 554 245 l 2 10 -2 5 -3 6 2 9 1 6 3 9 3 6 2 3 1 11 3 5 -4 9 -4 5 -3 8 -4 0 -15 -3 -2 0 -6 -5 -4 -4 -6 -6 -7 -4 -4 -2 -6 0 -2 1 -5 2 -11 1 -6 -1 0 -8 -2 -6 6 -4 6 -5 4 -6 3 -4 4 -5 2 -3 6 -8 4 -2 8 -3 4 -5 7 -1 7 -2 4 -6 7 -2 z ",
  },
  {
    id: "CD11260",
    x: "589",
    y: "270",
    name: "중랑구",
    stroke: "#FFFFFF",
    d: "M 621 218 l 5 3 1 6 0 10 2 8 -3 8 -3 5 0 3 3 4 -1 6 -4 2 -5 9 0 5 -4 6 -4 3 -4 5 -3 10 -4 2 -4 3 -9 3 -11 -3 -7 -1 -3 -5 -1 -11 -2 -3 -3 -6 -3 -9 -1 -6 -2 -9 3 -6 2 -5 -2 -10 0 -8 2 -11 6 -3 4 -1 9 -4 9 1 10 1 6 -2 9 -1 z ",
  },
  {
    id: "CD11290",
    x: "466",
    y: "258",
    name: "성북구",
    stroke: "#FFFFFF",
    d: "M 455 297 l -3 -2 -1 -3 -5 -10 -3 -4 -4 -4 -10 0 -9 -1 -5 -4 -5 -3 -6 -4 1 -5 6 -4 6 -3 1 -5 0 -7 0 -9 -3 -5 -1 -6 -3 -10 -3 -8 -4 -1 -3 -6 9 -5 4 -3 4 1 5 4 6 4 3 2 4 5 5 5 7 3 5 2 -1 3 0 0 0 2 1 3 5 6 9 3 4 3 5 3 8 -1 6 4 9 -4 4 -6 4 -4 4 -4 4 -6 4 -3 5 4 4 5 5 5 5 4 9 0 9 -2 -2 11 0 8 -7 1 -7 2 -4 6 -7 2 -7 1 -4 5 -8 3 -4 2 -6 8 -2 3 -4 5 -3 4 -4 6 -6 5 -6 4 -7 -3 -4 -5 -3 1 -1 0 -1 0 z ",
  },
  {
    id: "CD11305",
    x: "459",
    y: "181",
    name: "강북구",
    stroke: "#FFFFFF",
    d: "M 448 87 l 2 0 1 0 0 0 4 4 3 7 4 5 4 7 3 5 1 2 -2 4 -2 6 -2 9 -2 8 -1 5 0 4 2 4 5 3 3 0 2 -1 3 2 7 5 3 3 7 6 2 6 5 4 3 7 6 6 7 6 3 6 -4 3 -4 6 -4 4 -4 4 -4 6 -9 4 -6 -4 -8 1 -5 -3 -4 -3 -9 -3 -4 -6 -2 -3 0 -2 0 0 1 -3 -5 -2 -7 -3 -5 -5 -4 -5 -3 -2 -6 -4 -5 -4 -4 -1 3 -4 0 -6 -3 -4 1 -3 2 -3 -2 -4 -3 -7 -4 -9 4 -1 7 -7 4 -8 6 -4 2 -5 0 -13 -1 -7 2 -5 6 -5 7 -2 z ",
  },
  {
    id: "CD11320",
    x: "494",
    y: "125",
    name: "도봉구",
    stroke: "#FFFFFF",
    d: "M 463 157 l -2 -4 0 -4 1 -5 2 -8 2 -9 2 -6 2 -4 -1 -2 -3 -5 -4 -7 -4 -5 -3 -7 -1 -9 0 -8 4 -11 8 -8 10 1 9 0 3 4 1 6 3 5 9 -1 4 -2 4 -1 4 4 5 0 5 13 0 9 -1 5 -4 12 0 8 3 9 2 9 3 10 1 9 2 7 -2 13 -3 -4 -2 -3 -2 3 -5 5 -1 6 -4 9 -1 7 -6 -6 -3 -7 -5 -4 -2 -6 -7 -6 -3 -3 -7 -5 -3 -2 -2 1 -3 0 z ",
  },
  {
    id: "CD11350",
    x: "560",
    y: "153",
    name: "노원구",
    stroke: "#FFFFFF",
    d: "M 619 183 l 1 7 -3 7 -6 5 -3 7 1 8 -9 1 -6 2 -10 -1 -9 -1 -9 4 -4 1 -6 3 -9 2 -9 0 -5 -4 -5 -5 -4 -5 -5 -4 -3 -6 -7 -6 1 -7 4 -9 1 -6 5 -5 2 -3 2 3 3 4 2 -13 -2 -7 -1 -9 -3 -10 -2 -9 -3 -9 0 -8 4 -12 1 -5 0 -9 6 -4 5 -2 4 -4 4 -6 6 0 3 1 4 0 5 -1 4 -2 7 -1 5 8 5 5 5 0 3 -1 5 4 -3 10 -2 7 -1 2 1 3 3 7 2 8 -2 11 -2 5 -3 4 0 4 2 6 1 6 0 10 3 5 7 0 5 -2 5 0 4 4 4 3 z ",
  },
  {
    id: "CD11380",
    x: "323",
    y: "218",
    name: "은평구",
    stroke: "#FFFFFF",
    d: "M 368 148 l 3 2 1 3 2 11 2 9 2 8 3 5 0 5 -3 3 -5 5 -7 3 -5 2 -2 6 1 6 1 11 -1 10 -7 6 -4 3 -4 7 0 7 -5 2 -9 4 -4 4 -3 5 -3 7 -5 4 -3 4 -8 -1 0 -3 -1 0 -3 -2 -3 2 -4 5 -4 5 -5 5 -1 5 -9 -8 -12 -9 -1 -2 -6 -6 -4 -5 6 -9 1 2 -2 5 2 5 8 0 9 -1 3 -6 1 -4 2 -5 -1 -9 2 -8 -2 -10 2 -10 4 -7 3 -4 2 -6 2 -9 -1 -10 5 -4 0 -1 -1 -5 1 -4 1 -4 0 -5 -5 -3 -5 -5 0 -1 1 1 5 3 6 4 11 -1 10 -3 3 -3 4 -2 9 -4 4 -5 3 -5 5 -2 6 -2 3 4 z ",
  },
  {
    id: "CD11410",
    x: "342",
    y: "302",
    name: "서대문구",
    stroke: "#FFFFFF",
    d: "M 365 255 l 1 4 2 0 2 0 3 4 -1 9 0 9 0 10 0 6 -5 3 2 5 4 5 5 6 3 4 6 6 2 5 1 2 -6 4 -6 3 -3 3 -8 0 -10 1 -11 1 -7 2 -10 -4 -7 -6 -2 -10 -6 -3 -6 -2 -4 -2 -8 -4 -5 -5 -7 -5 1 -5 5 -5 4 -5 4 -5 3 -2 3 2 1 0 0 3 8 1 3 -4 5 -4 3 -7 3 -5 4 -4 9 -4 5 -2 0 -7 4 -7 4 -3 7 -6 5 9 z ",
  },
  {
    id: "CD11440",
    x: "293",
    y: "339",
    name: "마포구",
    stroke: "#FFFFFF",
    d: "M 263 289 l 12 9 9 8 7 5 5 5 8 4 4 2 6 2 6 3 2 10 7 6 10 4 7 -2 11 -1 10 -1 8 0 3 -3 0 1 2 2 -1 4 0 7 2 3 0 3 -6 5 -3 6 -2 5 -5 6 -5 4 -4 1 -5 2 -7 -4 -5 -4 -5 -3 -5 -2 -4 1 -4 2 -6 -4 -11 0 -12 0 -5 -2 -6 -7 -6 -6 -8 -4 -8 -4 -5 -4 -5 -3 -11 -7 -8 -5 -4 -2 -6 -4 -4 -4 -4 -3 -6 -6 -1 -3 8 -4 4 -2 4 -2 10 -2 10 -2 3 -2 0 -1 -1 -6 0 -5 4 -5 5 -4 4 5 6 6 z ",
  },
  {
    id: "CD11470",
    x: "209",
    y: "421",
    name: "양천구",
    stroke: "#FFFFFF",
    d: "M 240 363 l 8 -1 5 5 2 5 4 8 4 9 -2 3 2 2 0 2 -8 3 -5 4 -3 4 -2 12 0 4 -2 7 -4 6 -1 8 -2 6 -1 -1 -4 -2 -10 -2 -6 -2 -4 -5 -8 -1 -8 2 -4 4 -7 3 -4 3 -5 1 -3 -1 -4 -5 -4 -4 -4 -2 -3 -12 2 -9 1 -7 4 -5 0 -4 -4 -4 -4 -6 -2 -11 4 -7 3 -7 5 -2 1 6 5 5 2 6 3 9 3 7 3 4 12 1 7 -2 11 -1 7 -2 1 -8 0 -7 -1 -9 0 -10 2 -8 5 2 5 4 z ",
  },
  {
    id: "CD11500",
    x: "156",
    y: "334",
    name: "강서구",
    stroke: "#FFFFFF",
    d: "M 134 254 l 3 3 6 4 4 4 4 6 4 3 6 4 5 4 6 4 5 3 4 4 6 5 3 2 6 5 9 6 1 3 6 6 4 3 4 4 6 4 4 2 8 5 11 7 -4 8 3 9 -8 1 -8 -2 -5 -4 -5 -2 -2 8 0 10 1 9 0 7 -1 8 -7 2 -11 1 -7 2 -12 -1 -3 -4 -3 -7 -3 -9 -2 -6 -5 -5 -1 -6 -5 2 -3 7 -10 2 -9 -1 -7 -4 -3 -2 0 1 -9 5 -2 5 -6 2 -2 -6 -4 -5 -5 -4 -7 -2 -9 -2 -7 -4 -4 1 -1 -2 -2 -2 1 -1 -3 -2 -2 -7 8 -4 2 -5 6 -2 -1 -5 -2 -5 0 -3 2 1 0 1 5 -3 3 -3 -1 -2 2 -1 1 -5 8 -4 1 -1 1 1 2 -5 2 -6 1 3 1 2 2 -9 2 -4 2 2 1 -4 5 -5 0 -6 -3 -5 -1 -6 0 -5 3 -4 4 -6 4 2 z ",
  },
  {
    id: "CD11530",
    x: "199",
    y: "470",
    name: "구로구",
    stroke: "#FFFFFF",
    d: "M 245 419 l 6 7 4 4 5 2 4 4 4 9 -1 9 2 9 1 6 1 5 3 7 5 5 4 3 -3 5 -4 5 -10 1 -7 -3 -4 -5 -5 -4 -5 -3 -2 0 -2 1 -3 -5 -4 -2 3 -2 0 -1 -3 0 -3 2 -1 -5 -2 -6 -2 1 -1 1 1 1 -4 4 -5 3 -4 5 -4 4 -6 6 -9 2 -2 4 -1 10 -6 0 -8 -1 -5 -4 -4 0 -4 2 -9 0 -5 1 -8 1 2 -4 4 -5 2 -8 2 -5 3 -4 -2 -5 -3 -1 -8 -5 -1 -7 6 -3 4 -6 2 -4 2 -6 5 -6 4 2 4 4 4 5 3 1 5 -1 4 -3 7 -3 4 -4 8 -2 8 1 4 5 6 2 10 2 4 2 1 1 2 -6 1 -8 4 -6 2 -7 z ",
  },
  {
    id: "CD11545",
    x: "279",
    y: "537",
    name: "금천구",
    stroke: "#FFFFFF",
    d: "M 241 486 l 2 -1 2 0 5 3 5 4 4 5 7 3 10 -1 11 -1 6 1 3 10 -3 8 3 6 3 6 1 6 4 8 8 3 3 4 5 4 2 6 -7 7 -2 5 -3 6 -8 1 -5 4 -4 7 -9 -1 -4 -4 -3 -4 -2 -9 -3 -5 -2 -3 1 -3 -1 -3 -3 -4 -6 -3 -4 -6 -1 -9 -4 -4 -1 -4 2 -2 -2 -3 -3 -5 -4 -6 -2 -4 -4 -9 -3 -8 -1 -4 1 -2 z ",
  },
  {
    id: "CD11560",
    x: "295",
    y: "413",
    name: "영등포구",
    stroke: "#FFFFFF",
    d: "M 249 345 l 5 3 5 4 8 4 8 4 6 6 6 7 5 2 12 0 11 0 6 4 4 -2 4 -1 5 2 5 3 5 4 7 4 6 11 2 8 0 10 -1 5 -11 2 -8 1 -9 1 -8 2 -2 5 -3 8 -2 3 -3 10 -2 8 -9 2 -3 1 -4 7 -4 5 -3 5 -4 6 -4 -3 -5 -5 -3 -7 -1 -5 -1 -6 -2 -9 1 -9 -4 -9 -4 -4 -5 -2 -4 -4 -6 -7 2 -12 3 -4 5 -4 8 -3 0 -2 -2 -2 2 -3 -4 -9 -4 -8 -2 -5 -5 -5 -3 -9 z ",
  },
  {
    id: "CD11590",
    x: "361",
    y: "461",
    name: "동작구",
    stroke: "#FFFFFF",
    d: "M 367 426 l 6 3 5 3 6 5 6 3 3 1 10 4 7 1 -3 4 0 0 4 5 2 8 -2 11 0 6 -1 11 0 8 0 9 -5 -2 -14 0 -3 -2 -5 -4 -6 -10 0 -11 -2 -6 -7 3 -3 1 -2 -2 -7 -3 -9 1 -7 0 -11 -2 -6 -1 -6 7 -6 1 -10 4 -4 3 -2 1 -12 3 4 -6 3 -5 4 -5 4 -7 3 -1 9 -2 2 -8 3 -10 2 -3 3 -8 2 -5 8 -2 9 -1 8 -1 11 -2 z ",
  },
  {
    id: "CD11620",
    x: "353",
    y: "529",
    name: "관악구",
    stroke: "#FFFFFF",
    d: "M 323 470 l 6 1 11 2 7 0 9 -1 7 3 2 2 3 -1 7 -3 2 6 0 11 6 10 5 4 3 2 14 0 5 2 2 8 4 6 3 4 0 11 1 5 -9 4 -7 2 -3 1 -5 4 -5 7 -8 5 -2 7 -1 5 -5 2 -9 2 -9 1 -10 2 -4 2 -2 0 -3 -5 -2 -6 -5 -4 -5 -7 -4 -4 -2 -6 -5 -4 -3 -4 -8 -3 -4 -8 -1 -6 -3 -6 -3 -6 3 -8 -3 -10 -6 -1 -11 1 4 -5 3 -5 12 -3 2 -1 4 -3 10 -4 6 -1 z ",
  },
  {
    id: "CD11650",
    x: "481",
    y: "515",
    name: "서초구",
    stroke: "#FFFFFF",
    d: "M 460 413 l 1 0 2 -3 6 9 1 6 0 1 3 9 5 15 5 13 6 17 7 10 6 -1 5 5 1 3 4 9 7 13 3 5 6 -2 4 0 6 -1 9 -2 8 -4 5 -3 2 -2 11 0 4 8 2 3 5 6 2 7 4 4 1 7 -5 8 -6 10 0 6 -6 4 -4 4 -5 0 -4 -1 -4 0 -2 6 -2 8 -1 4 -1 2 1 3 -4 0 -10 2 -9 0 -8 0 -7 -4 -4 -6 -5 -5 -4 -2 -5 -4 1 -5 2 -4 -1 -8 0 -5 -2 -4 2 -5 0 -1 -3 -4 -2 -9 -2 -6 -5 0 -2 7 -3 6 -6 4 -8 2 -4 1 -2 0 -6 -3 -3 -3 0 0 -1 -2 -3 -6 -2 -8 -8 -2 -5 3 1 3 0 1 -4 4 -6 3 -4 3 -1 -5 0 -11 -3 -4 -4 -6 -2 -8 0 -9 0 -8 1 -11 0 -6 2 -11 -2 -8 -4 -5 0 0 3 -4 7 -3 5 -8 8 -8 5 -3 5 -4 5 -5 5 -4 3 -4 z ",
  },
  {
    id: "CD11680",
    x: "533",
    y: "464",
    name: "강남구",
    stroke: "#FFFFFF",
    d: "M 503 387 l 10 3 4 4 5 3 7 4 7 4 12 5 0 10 0 4 1 13 1 6 1 10 6 2 7 1 6 2 3 2 12 4 5 2 5 3 6 3 5 4 5 5 3 6 3 5 3 5 4 7 2 2 5 10 3 4 4 5 -10 11 -2 6 -4 0 -3 -4 -9 -2 -4 0 0 2 -1 1 -3 3 -11 3 -1 -7 -4 -4 -2 -7 -5 -6 -2 -3 -4 -8 -11 0 -2 2 -5 3 -8 4 -9 2 -6 1 -4 0 -6 2 -3 -5 -7 -13 -4 -9 -1 -3 -5 -5 -6 1 -7 -10 -6 -17 -5 -13 -5 -15 -3 -9 0 -1 -1 -6 -6 -9 -2 3 -1 0 -7 -6 5 -6 4 -5 4 -5 8 -4 12 0 7 0 z ",
  },
  {
    id: "CD11710",
    x: "624",
    y: "448",
    name: "송파구",
    stroke: "#FFFFFF",
    d: "M 621 374 l 6 2 4 2 4 4 0 8 -2 5 -1 3 0 7 5 2 8 5 5 3 8 4 3 2 5 3 5 2 -4 3 0 6 -3 10 4 5 5 3 10 0 9 3 5 5 -1 4 -2 7 -3 9 -4 3 -5 4 -5 5 -2 6 -3 7 -5 5 -10 0 -6 0 0 8 -4 5 -6 -2 -2 -1 -1 4 -4 -5 -3 -4 -5 -10 -2 -2 -4 -7 -3 -5 -3 -5 -3 -6 -5 -5 -5 -4 -6 -3 -5 -3 -5 -2 -12 -4 -3 -2 -6 -2 -7 -1 -6 -2 -1 -10 -1 -6 -1 -13 0 -4 0 -10 6 2 5 1 5 1 5 -1 6 -3 8 -5 3 -2 3 -3 11 -12 5 -4 5 -5 4 -5 z ",
  },
  {
    id: "CD11740",
    x: "675",
    y: "358",
    name: "강동구",
    stroke: "#FFFFFF",
    d: "M 726 320 l 1 7 3 9 0 9 1 9 1 10 1 5 -1 -1 -5 -1 -3 0 -4 2 -11 0 -8 1 -5 6 -4 5 -4 6 -2 4 -1 8 -4 7 -3 2 1 1 -1 2 -6 7 -1 8 -5 -2 -5 -3 -3 -2 -8 -4 -5 -3 -8 -5 -5 -2 0 -7 1 -3 2 -5 0 -8 -4 -4 -4 -2 -6 -2 -7 0 2 -4 2 -5 2 -10 4 -10 1 -1 4 -6 7 -6 5 -3 6 -3 8 -3 4 -1 5 0 11 0 9 -4 7 -5 8 -6 11 -6 11 0 0 7 3 6 z ",
  },
];

function Paths({
  newData,
  selrf,
  isDrag,
  check,
  checkF,
  isClick,
  isClickF,
}: {
  newData: mapData;
  selrf: Function;
  isDrag: boolean;
  check: number;
  checkF: Function;
  isClick: number;
  isClickF: Function;
}) {
  return (
    <>
      {data.map((xx, i) => {
        let { id, name, d } = xx;

        let fill = newData.data[name]["color"];

        if (i !== isClick || i !== check) {
          return (
            <Path
              key={id}
              id={id}
              fill={fill}
              stroke={shadowSet[fill]}
              d={d}
              check={isClick === i || check === i}
              onMouseOver={(e) => {
                if (!isDrag && isClick < 0) {
                  selrf(data[i].name);
                  checkF(i);
                } else if (isClick < 0) {
                  selrf("");
                  checkF(-1);
                } else {
                  checkF(-1);
                }
              }}
              onClick={(e) => {
                if (!isDrag) {
                  if (isClick === i) {
                    selrf(data[i].name);
                    isClickF(-1);
                  } else {
                    selrf(data[i].name);
                    isClickF(i);
                  }
                }
              }}
            />
          );
        } else {
          return null;
        }
      })}
      {check >= 0 && isClick !== check ? (
        <Path
          key={data[check].id}
          id={data[check].id}
          fill={newData.data[data[check].name]["color"]}
          stroke={shadowSet[newData.data[data[check].name]["color"]]}
          d={data[check].d}
          check={true}
          onMouseOver={(e) => {
            if (isDrag) {
              selrf("");
              checkF(-1);
            }
          }}
          onClick={(e) => {
            if (!isDrag) {
              if (isClick === check) {
                isClickF(-1);
              } else {
                isClickF(check);
              }
            }
          }}
          onMouseOut={(e) => {
            if (isClick < 0) {
              selrf("");
            }
            checkF(-1);
          }}
        />
      ) : null}
      {isClick >= 0 ? (
        <Path
          key={data[isClick].id}
          id={data[isClick].id}
          fill={newData.data[data[isClick].name]["color"]}
          stroke={shadowSet[newData.data[data[isClick].name]["color"]]}
          d={data[isClick].d}
          check={true}
          onMouseOver={(e) => {
            if (isDrag) {
              selrf("");
              checkF(-1);
            }
          }}
          onClick={(e) => {
            if (!isDrag) {
              if (isClick === check) {
                isClickF(-1);
              } else {
                isClickF(check);
              }
            }
          }}
          onMouseOut={(e) => {
            if (isClick < 0) {
              selrf("");
            }
            checkF(-1);
          }}
        />
      ) : null}
    </>
  );
}

const Frame = styled.div<{ grab: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #7c7c7c;
  box-shadow: inset 0px 0px 10px #7c7c7c;
  ${({ grab }) => {
    return `
    ${grab ? `cursor:grab;` : null}
    `;
  }}
`;

export default function Seoul({
  width,
  height,
  newData,
  selrf,
  check,
  checkF,
  isClick,
  isClickF,
}: {
  width: string;
  height: string;

  newData: mapData;
  selrf: Function;
  check: number;
  checkF: Function;
  isClick: number;
  isClickF: Function;
}) {
  let [vr, vrf] = useState([700, 600]); // view box 크기
  let [cmin, cminf] = useState([50, 50]); // view box min값
  let [dcoor, dcoorf] = useState([0, 0]); // 드래그시 위치 저장(이동거리 계산시 현재 위치반영)
  let [dpath, dpathf] = useState(0); // 이동한 거리 (단순 좌표 차이를 누적 계산함.)
  let [isDrag, isDragf] = useState(false); // 드래깅 여부
  let [cx, cy] = [
    window.innerWidth * 0.5 +
      (window.innerWidth * 0.5 > 600
        ? 275.5
        : 0.5 * (window.innerWidth * 0.5 - 55)),
    window.innerHeight * 0.55,
  ];
  return (
    <Frame
      onWheel={(e) => {
        let { clientX, clientY } = e.nativeEvent;

        if (e.deltaY < 0) {
          let [x, y] = [vr[0], vr[1]];
          let [xx, yy] = cmin;
          let r = ((cx - clientX) ** 2 + (cy - clientY) ** 2) ** 0.5 / 300;
          if (x > 100) {
            x -= 40;
            if (clientX - cx < 0) {
              xx -= 10 * (1 + r) - 20;
            } else {
              xx += 10 * (1 + r) + 20;
            }
          }

          if (y > 100) {
            y -= 40;
            if (clientY - cy < 0) {
              yy -= 10 * (1 + r) - 20;
            } else {
              yy += 10 * (1 + r) + 20;
            }
          }

          cminf([xx, yy]);
          vrf([x, y]);
        } else {
          let [x, y] = [vr[0] + 40, vr[1] + 40];

          let [xx, yy] = cmin;
          if (xx >= 50) {
            xx = xx > 20 ? xx - 20 : 50;
          } else {
            xx = xx < -20 ? xx + 20 : 50;
          }
          if (yy >= 50) {
            yy = yy > 20 ? yy - 20 : 50;
          } else {
            yy = yy < -20 ? yy + 20 : 50;
          }

          cminf([x < 700 ? xx : 50, y < 600 ? yy : 50]);
          vrf([x > 700 ? 700 : x, y > 600 ? 600 : y]);
        }
      }}
      grab={isDrag && dpath > 10}
      onMouseDown={(e) => {
        let { offsetX, offsetY } = e.nativeEvent;
        if (vr[0] < 700 && vr[1] < 600) {
          dcoorf([offsetX, offsetY]);
          isDragf(true);
        }
        dpathf(0);
      }}
      onMouseMove={(e) => {
        let { offsetX, offsetY } = e.nativeEvent;

        let [xmin, ymin] = cmin;
        if (isDrag) {
          dpathf(
            dpath + Math.abs(dcoor[0] - offsetX) + Math.abs(dcoor[1] - offsetY)
          );
          xmin += ((dcoor[0] - offsetX) * vr[0]) / 700;
          ymin += ((dcoor[1] - offsetY) * vr[1]) / 600;
          dcoorf([offsetX, offsetY]);
          cminf([xmin, ymin]);
        }
      }}
      onMouseUp={(e) => {
        isDragf(false);
      }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`${cmin[0]} ${cmin[1]} ${vr[0]} ${vr[1]} `}
        preserveAspectRatio="xMidYMid meet"
        onMouseLeave={(e) => {
          if (isDrag && dpath > 10) {
            isDragf(false);
          }
        }}
      >
        <Paths
          newData={newData}
          selrf={selrf}
          isDrag={isDrag && dpath > 10}
          isClick={isClick}
          isClickF={isClickF}
          check={check}
          checkF={checkF}
        ></Paths>
      </svg>
    </Frame>
  );
}
