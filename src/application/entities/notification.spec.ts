import { Content } from "./content";
import { Notification } from "./notification";

describe('Notification', () => {
    it('should to be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade'),
            category: 'Social',
            recipientId: 'example-recipientId'
        });

        expect(notification).toBeTruthy();
    });
});
