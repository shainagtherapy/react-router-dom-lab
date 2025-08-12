import { useParams } from 'react-router';


const MailboxDetails = () => {
    const { mailboxId } = userParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
}

export default MailboxDetails;