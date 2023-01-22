import styled from 'styled-components';

const size = 25;
const color = '#353535';

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 14"
      height="26"
      width="26"
    >
      <path
        stroke="#353535"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.62497 12.4999C9.86962 12.4999 12.4999 9.86962 12.4999 6.62497C12.4999 3.38031 9.86962 0.75 6.62497 0.75C3.38031 0.75 0.75 3.38031 0.75 6.62497C0.75 9.86962 3.38031 12.4999 6.62497 12.4999Z"
      ></path>
      <path
        stroke="#353535"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M13.25 13.2501L10.7833 10.7834"
      ></path>
    </svg>
  );
}

export default SearchIcon;
