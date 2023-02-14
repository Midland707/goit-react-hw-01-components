import { test } from 'components/Profile/Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {test}
    </div>
  );
};

// const elem1 = <span>Hello</span>;
// const elem2 = <span>World</span>;

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
