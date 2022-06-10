const AppRoot = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  background: '#e5e5e5'
};

const HeaderContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const BookshelfHeader = {
  ...HeaderContainer,
  width: '100%',
  marginBottom: '49px'
};

const BookshelfContainer = {
  display: 'flex',
  flexDirection: 'column',
  width: '601px',
  marginTop: '80px',
  marginBottom: '80px',
  gap: '10px'
};

const HeaderText = {
  fontStyle: 'SF Pro Display',
  fontWeight: 700,
  fontSize: '42px',
  color: 'black'
};

const InputTitle = {
  ...HeaderText,
  fontSize: '14px'
};

const FormParent = {
  display: 'flex',
  flexDirection: 'column',
  width: '564px',
  marginTop: '80px',
  marginBottom: '80px',
  gap: '50px'
};

const TextField = {
  width: '564px',
  height: '50px',
  borderRadius: '4px',
  fontSize: '20px',
  border: '1px solid black'
};

const TextArea = {
  ...TextField,
  height: '107px'
};

const Button = {
  background: '#199C7D',
  height: '49px',
  width: '123px',
  borderRadius: '6px',
  ...HeaderText,
  color: '#ffffff',
  fontSize: '18px',
  border: 'none'
};

export const styles = {
  AppRoot,
  HeaderContainer,
  BookshelfHeader,
  BookshelfContainer,
  HeaderText,
  InputTitle,
  FormParent,
  TextField,
  TextArea,
  Button
};
