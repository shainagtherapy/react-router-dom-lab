import { useState } from 'react';
import { Route, Routes } from 'react-router';
import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';


const initialState = [];

const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }


  return (
    <>
      <h1>Hello world!</h1>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <main><h1>Post Office</h1></main> } />
      <Route path="/mailboxes" element={ <MailboxList /> } />
      <Route path="/new-mailbox" element={ <MailboxForm /> } />
      <Route path="/mailboxes/:mailboxId" element={ <MailboxDetails /> } />
      <Route path="*" element={ <h2>Whoops, nothing here!</h2> } />
    </Routes>

    </>
  )
};

export default App;
