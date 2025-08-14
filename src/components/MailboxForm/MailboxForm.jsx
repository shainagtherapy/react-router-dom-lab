import { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    boxSize: '',
    boxOwner: '',
}

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes')
    }

    return (
    <main>
      <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxOwner">Name:</label>
            <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleSubmit} />

            <label htmlFor="boxSize">Size:</label>
            <select name="boxSize" id="boxSize" onChange={handleSubmit}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option> </select>
            <button type="submit">Submit</button>
        </form>
    </main>
    )
}

export default MailboxForm