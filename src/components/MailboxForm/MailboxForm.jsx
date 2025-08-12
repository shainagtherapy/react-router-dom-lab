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
}

export default MailboxForm;