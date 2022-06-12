const AppRoot = {
  display: 'flex',
  flexGrow: 1,
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
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
  marginTop: '40px',
  marginBottom: '40px',
  gap: '30px'
};

const BookContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '601px',
  height: '230px',
  background: '#ffffff',
  borderRadius: '8px',
  border: '1px solid #F1F1F1',
  boxShadow: '0px 51px 80px rgba(0, 0, 0, 0.04)'
};

const Text = {
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  color: '#000000',
  fontSize: '14px'
};

const HeaderText = {
  ...Text,
  fontWeight: 700,
  fontSize: '42px'
};

const InputTitle = {
  ...Text,
  fontWeight: 700
};

const CardBookTitle = {
  ...Text,
  fontSize: '20px'
};

const AuthorText = {
  ...Text,
  fontWeight: 500,
  fontSize: '12px',
  color: '#5F5F5F'
};

const BodyText = {
  ...Text,
  fontWeight: 400
};

const FormParent = {
  display: 'flex',
  flexDirection: 'column',
  width: '564px',
  marginTop: '40px',
  marginBottom: '40px',
  gap: '30px'
};

const TextField = {
  ...Text,
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
  border: 'none',
  cursor: 'pointer'
};

export const styles = {
  AppRoot,
  HeaderContainer,
  BookshelfHeader,
  BookshelfContainer,
  BookContainer,
  HeaderText,
  InputTitle,
  CardBookTitle,
  AuthorText,
  BodyText,
  FormParent,
  TextField,
  TextArea,
  Button
};
