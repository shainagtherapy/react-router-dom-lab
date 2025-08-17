import { Link } from 'react-router';


const MailboxList = (props) => {

    return (
        <>
            <h2>Mailboxes</h2>
            <ul >
                {props.mailboxes.map((selectedBox) => (
                    <div class="mail-box">
                    <li key={selectedBox._id} >
                        <Link to={`/mailboxes/${selectedBox._id}`}> {selectedBox._id} </Link>
                    </li>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;