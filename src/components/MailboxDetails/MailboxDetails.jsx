import { useParams } from 'react-router';


const MailboxDetails = (props) => {
    const { mailboxId } = useParams();

    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));
    console.log('mailbox details:', selectedBox)
    
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