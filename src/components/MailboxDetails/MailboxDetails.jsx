import { useParams } from 'react-router';


const MailboxDetails = (props) => {
    if (!props.selected) {
        return (
            <div>
                <h1>Mailbox Not Found</h1>
            </div>
        )
    }
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    
    return (
        <>
            <h2>{mailboxId}</h2>
            <dl>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxSize}</dd>
                <dt>Box Owner:</dt>
                <dd>{selectedBox.boxOwner}</dd>
            </dl>
        </>
    );

}

export default MailboxDetails;