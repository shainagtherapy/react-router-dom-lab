import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    _id: 0,
    boxSize: 'SMALL',
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

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    }
    useEffect(() => {
        console.log(formData)
    }, [formData])

    return (
    <main>
      <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxOwner">Name:</label>
            <input type="text" id="boxOwner" name="boxOwner" value={formData.boxOwner} onChange={handleChange} />

            <label htmlFor="boxSize">Size:</label>
            <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                <option value="SMALL">SMALL</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="LARGE">LARGE</option> </select>
        <button type="submit">Submit</button>
        </form>
    </main>
    )
}

export default MailboxForm